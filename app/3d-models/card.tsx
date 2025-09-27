import Image from "next/image";
import type { Model } from "../types";
import like from "@/public/Heart.svg";
import Link from "next/link";
import placeholderImg from "@/public/hero-img.png"

export default function ModelCard({ model }: { model: Model }) {
    return (
        <Link href={`/3d-models/${model.id}`}
            className="block group hover:shadow-xl hover:-translate-y-[3px] transition-all"
            aria-labelledby={`model-${model.id}-title`}
        >
            <article className="overflow-hidden flex flex-col outline outline-gray-400 rounded-lg h-full">
                <Image className="aspect-square w-full inset-0 object-cover" src={placeholderImg} width={267} height={267} alt={model.name} />
                <div className="p-4">
                    <div className="flex flex-col gap-2 mb-3">
                        <h2 id={`model-${model.id}-title`} className="text-xl">{model.name}</h2>
                        <p>{model.description}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="place-self-start outline outline-gray-400 rounded-full px-3 py-1">{model.category}</span>
                        <div className="flex items-center gap-1 mt-2"
                            aria-label={`${model.likes}`}
                        >
                            <Image src={like} alt="like" />
                            <span className="text-gray-400">{model.likes}</span>
                        </div>
                    </div>
                </div>
            </article>
        </Link>
    )
}