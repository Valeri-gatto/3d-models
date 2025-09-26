import { getAllModels } from "@/app/lib/models";
import Card from "./card";

export default async function ModelsPage() {
    const data = await getAllModels();
    return (
        <main>
            <h1 className="text-3xl">3D Models</h1>
            <section className="grid">
                {data.map(card => <Card key={card.id} data={card} />)}
            </section>
        </main>
    )
}