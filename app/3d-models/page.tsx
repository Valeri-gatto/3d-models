import { getAllModels } from "@/app/lib/models";
import ModelCard from "../components/card";
import { Model } from "../types";

export default async function ModelsPage() {
    const data = await getAllModels();

    return (
        <main className="container p-6 max-w-7xl mx-auto">
            <h1 className="mb-8 text-3xl">3D Models</h1>
            <section
                role="region"
                aria-label="3D Models Gallery"
                className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-10"
            >
                {data.map((model: Model) => <ModelCard key={model.id} model={model} />)}
            </section>
        </main>
    )
}