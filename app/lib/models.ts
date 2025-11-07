import { notFound } from "next/navigation";
import { Model } from "@/app/types";
import { db } from "@/app/lib/db";

export function getModels(user_id: string, categoryId?: number) {
    if (categoryId) {
        return db.prepare<[string, number], Model>('SELECT models.id, models.name, models.description, models.image, models.date_added AS dateAdded, categories.slug, (SELECT count(user_id) FROM likes WHERE likes.model_id=models.id) AS likes, (SELECT count(*) FROM likes WHERE likes.user_id=? AND likes.model_id=models.id) AS isLiked FROM models JOIN categories ON models.category=categories.id WHERE categories.id=?').all(user_id, categoryId);
    } else {
        return db.prepare<[string], Model>('SELECT models.id, models.name, models.description, models.image, models.date_added AS dateAdded, categories.slug, (SELECT count(user_id) FROM likes WHERE likes.model_id=models.id) AS likes, (SELECT count(*) FROM likes WHERE likes.user_id=? AND likes.model_id=models.id) AS isLiked FROM models JOIN categories ON models.category=categories.id').all(user_id);
    }
}

export function getModelById(user_id: string, id: string | number): Model {
    const foundModel = db.prepare<[string, string | number], Model>('SELECT models.id, models.name, models.description, models.image, models.date_added AS dateAdded, categories.slug, (SELECT count(user_id) FROM likes WHERE likes.model_id=models.id) AS likes, (SELECT count(*) FROM likes WHERE likes.user_id=? AND likes.model_id=models.id) AS isLiked FROM models JOIN categories ON models.category=categories.id WHERE models.id=?').get(user_id, id);
    if (!foundModel) {
        notFound()
    }
    return foundModel
}

