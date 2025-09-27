import { getAllModels } from "@/app/lib/models";
import { notFound } from "next/navigation";

export default async function Model({ params }: { params: Promise<{ id: string }> }) {
    const id = Number((await params).id);
    const allData = await getAllModels();
    const data = allData.find(card => card.id === id);

    if (!data) {
        notFound();
    }

    return (
        <main>
            <section>
                <p>{data.name}</p>
            </section>
        </main>
    )
}