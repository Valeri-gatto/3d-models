import { notFound } from "next/navigation";
import { Category } from "@/app/types";
import { db } from "@/app/lib/db";

export function getAllCategories(): Category[] {
    return db.prepare<[], Category>('SELECT * FROM categories').all();
}

export function getCategoryBySlug(slug: string): Category {
    const category = db.prepare<[string], Category>('SELECT * FROM categories WHERE slug=?').get(slug);
    if (!category) {
        notFound()
    }
    return category
}
