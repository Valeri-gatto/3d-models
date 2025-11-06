import { CategoryDetailPageProps } from "@/app/types";
import ModelsGrid from "@/app/components/ModelsGrid";
import { getCategoryBySlug } from "@/app/lib/categories";
import { getModels } from "@/app/lib/models";

export default async function CategoryPage({ params }: CategoryDetailPageProps) {
    const { categoryName } = await params;
    const category = getCategoryBySlug(categoryName);
    const models = getModels(category.id);

    if (!models) {
        return <p>This category doesn&apos;t exsist</p>
    }

    return (
        <ModelsGrid title={category.displayName} models={models} />
    )
}