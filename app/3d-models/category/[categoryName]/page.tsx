import { CategoryDetailPageProps } from "@/app/types";
import ModelsGrid from "@/app/components/ModelsGrid";
import { getCategoryBySlug } from "@/app/lib/categories";
import { getModels } from "@/app/lib/models";
import { getUserId } from "@/app/lib/user";

export default async function CategoryPage({ params }: CategoryDetailPageProps) {
    const { categoryName } = await params;
    const user_id = await getUserId();
    const category = getCategoryBySlug(categoryName);
    const models = getModels(user_id, category.id);

    if (!models) {
        return <p>This category doesn&apos;t exsist</p>
    }

    return (
        <ModelsGrid title={category.displayName} models={models} />
    )
}