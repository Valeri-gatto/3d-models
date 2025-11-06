import { notFound } from "next/navigation";
import { Model } from "@/app/types";
import { getDB } from "@/app/lib/db";

export function getModels(categoryId?: number) {
    if (categoryId) {
        return getDB().prepare<[number], Model>('SELECT models.id, models.name, models.description, models.image, models.date_added, categories.slug, (SELECT count(user_id) FROM likes WHERE likes.model_id=models.id) AS likes FROM models JOIN categories ON models.category=categories.id WHERE categories.id=?').all(categoryId);
    } else {
        return getDB().prepare<[], Model>('SELECT models.id, models.name, models.description, models.image, models.date_added, categories.slug, (SELECT count(user_id) FROM likes WHERE likes.model_id=models.id) AS likes FROM models JOIN categories ON models.category=categories.id').all();
    }
}

export function getModelById(id: string | number): Model {
    const foundModel = getDB().prepare<[string | number], Model>('SELECT models.id, models.name, models.description, models.image, models.date_added, categories.slug, (SELECT count(user_id) FROM likes WHERE likes.model_id=models.id) AS likes FROM models JOIN categories ON models.category=categories.id WHERE models.id=?').get(id);
    if (!foundModel) {
        notFound()
    }
    return foundModel
}

