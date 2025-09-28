import { getAllModels } from "@/app/lib/models";
import ModelsGrid from "../components/ModelsGrid";

export default async function ModelsPage() {
    const data = await getAllModels();

    return (
        <ModelsGrid title="3D Models" models={data} />
    )
}