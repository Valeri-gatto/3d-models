import Database from 'better-sqlite3';
import { unlink } from 'fs';
import categories from "@/app/data/categories.json";
import modelsData from "@/app/data/models.json";
import { randomBytes } from 'crypto';

const tables = new Set(["categories", "sessions", "models", "likes"]);
const dbPath = 'db.sqlite';

export function getDB() {
    return new Database(dbPath);
}
let db = getDB();
const allTables = db.prepare<[], { name: string }>("SELECT name FROM sqlite_master WHERE type='table'").all();
const allTablesExist = new Set(allTables.map(t => t.name)).symmetricDifference(tables).size === 0;
if (!allTablesExist) {
    db.close();
    unlink(dbPath, (err) => {
        console.log(err)

    })
    db = new Database(dbPath);
    db.pragma('journal_mode = WAL');
    db.exec(`
CREATE TABLE sessions (id INTEGER PRIMARY KEY, session_id BLOB NOT NULL) STRICT;
CREATE UNIQUE INDEX sessions_id ON sessions(session_id);

CREATE TABLE categories (id INTEGER PRIMARY KEY, displayName TEXT NOT NULL, slug TEXT NOT NULL) STRICT;
CREATE UNIQUE INDEX categories_slug ON categories(slug);

CREATE TABLE models (id INTEGER PRIMARY KEY, name TEXT NOT NULL, description TEXT NOT NULL, image TEXT, date_added TEXT NOT NULL, category INTEGER, FOREIGN KEY(category) REFERENCES categories(id)) STRICT;

CREATE TABLE likes (user_id INTEGER, model_id INTEGER, FOREIGN KEY(user_id) REFERENCES sessions(id), FOREIGN KEY(model_id) REFERENCES models(id)) STRICT;
CREATE INDEX likes_models_id ON likes(model_id);
        `);
    const insertCats = db.prepare('INSERT INTO categories (displayName, slug) VALUES (@displayName, @slug);');
    for (const obj of categories) {
        insertCats.run(obj);
    }

    const insertModels = db.prepare('INSERT INTO models (name, description, date_added, category) VALUES (@name, @description, @dateAdded, (SELECT id FROM categories WHERE slug=@category));');
    for (const obj of modelsData) {
        insertModels.run(obj);
    }

    const maxLikes = Math.max(...modelsData.map(mod => mod.likes));
    const insertSessions = db.prepare('INSERT INTO sessions (session_id) VALUES (?);');
    for (let i = 0; i < maxLikes; i++) {
        insertSessions.run(randomBytes(16))
    }

    const insertLikes = db.prepare('INSERT INTO likes (user_id, model_id) VALUES (?, ?);');
    for (let i = 0; i < modelsData.length; i++) {
        const model = modelsData[i];
        for (let j = 0; j < model.likes; j++) {
            insertLikes.run(j + 1, i + 1)
        }
    }
}