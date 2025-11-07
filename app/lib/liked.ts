'use server'
import { db } from "@/app/lib/db";

export async function setLikedInDB(user_id: number, model_id: number, liked: boolean) {
    if (!liked) {
        db.prepare<[number, number], [number]>('DELETE FROM likes WHERE user_id=? AND model_id=?;').run(user_id, model_id)
    } else {
        try {
            db.prepare<[number, number], [number]>('INSERT INTO likes (user_id, model_id) VALUES (?, ?);').run(user_id, model_id);
        } catch { }
    }
    return db.prepare<number, number>('SELECT count(user_id) FROM likes WHERE likes.model_id=?').pluck().get(model_id) || 0;
}