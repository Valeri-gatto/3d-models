import { notFound } from "next/navigation";
import { Category } from "@/app/types";
import { getDB } from "@/app/lib/db";

export function getAllCategories(): Category[] {
    return getDB().prepare<[], Category>('SELECT * FROM categories').all();
}

export function getCategoryBySlug(slug: string): Category {
    const category = getDB().prepare<[string], Category>('SELECT * FROM categories WHERE slug=?').get(slug);
    if (!category) {
        notFound()
    }
    return category
}
