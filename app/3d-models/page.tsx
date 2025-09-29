import { getModels } from "@/app/lib/models";
import ModelsGrid from "../components/ModelsGrid";

export default async function ModelsPage() {
    const data = await getModels();

    return (
        <ModelsGrid title="3D Models" models={data} />
    )
}