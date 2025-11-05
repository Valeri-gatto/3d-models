import { ModelsGridProps, Model } from "@/app/types";
import ModelCard from "@/app/components/ModelCard";

export default function ModelsGrid({ title, models, noMatches }: ModelsGridProps) {
    return (
        !noMatches ?
            <div className="container p-6 max-w-7xl mx-auto">
                <h1 className="mb-8 text-3xl">{title}</h1>
                <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:gap-10"
                    aria-label="3D Models Gallery"
                >
                    {models.map((model: Model) => (
                        <ModelCard key={model.id} model={model} />
                    ))}
                </section>
            </div>
            : <div className="container px-5 py-15 text-2xl text-center max-w-7xl mx-auto"><h1>No matches found for your current filters</h1></div>
    )
}