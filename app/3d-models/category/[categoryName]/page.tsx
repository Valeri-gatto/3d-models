import { CategoryDetailPageProps } from "@/app/types";
import ModelsGrid from "@/app/components/ModelsGrid";
import { getCategoryBySlug, getDisplayNameFromSlug } from "@/app/lib/categories";
import { getModels } from "@/app/lib/models";

export default async function CategoryPage({ params }: CategoryDetailPageProps) {
    const { categoryName } = await params;
    const category = getCategoryBySlug(categoryName);
    const models = await getModels({ category: categoryName });
    const name = getDisplayNameFromSlug(category.slug);

    if (!models) {
        return <p>This category doesn&apos;t exsist</p>
    }

    return (
        <ModelsGrid title={name} models={models} />
    )
}