import ModelsGrid from "@/app/components/ModelsGrid";
import { getCategoryBySlug, getDisplayNameFromSlug } from "@/app/lib/categories";
import { getAllModels } from "@/app/lib/models";
import { CategoryDetailPageProps } from "@/app/types";

export default async function Page({ params }: CategoryDetailPageProps) {
    const { categoryName } = await params;
    const slug = getCategoryBySlug(categoryName).slug;
    const category = getDisplayNameFromSlug(slug);
    const models = (await getAllModels()).filter(model => model.category === slug);

    if (!models) {
        return <p>This category doesn&apos;t exsist</p>
    }

    return (
        <ModelsGrid title={category} models={models} />
    )
}