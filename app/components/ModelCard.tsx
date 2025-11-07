import Image from "next/image";
import Link from "next/link";
import type { Model } from "@/app/types";
import placeholderImg from "@/public/hero-img.png"
import { getUserId } from "@/app/lib/user";
import Like from "@/app/components/Like";


export default async function ModelCard({ model }: { model: Model }) {
    const user_id = await getUserId();

    return (
        <Link href={`/3d-models/${model.id}`}
            className="block group hover:shadow-lg hover:-translate-y-[3px] transition-all"
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
                        <span className="place-self-start outline outline-gray-400 rounded-full px-3 py-1">{model.slug}</span>
                        <Like count={model.likes} user_id={user_id} model_id={model.id} liked={model.isLiked > 0} />
                    </div>
                </div>
            </article>
        </Link>
    )
}