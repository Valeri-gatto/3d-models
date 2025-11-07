import Image from "next/image";
import Link from "next/link";
import { getModelById } from "@/app/lib/models";
import { ModelDetailPageProps } from "@/app/types";
import placeholderImg from "@/public/hero-img.png";
import { getUserId } from "@/app/lib/user";
import Like from "@/app/components/Like";

export default async function Model({ params }: ModelDetailPageProps) {
    const { id } = await params;
    const user_id = await getUserId();
    const model = getModelById(user_id, id);

    return (
        <div className="container max-w-6xl mx-auto px-4 py-8">
            <article className="flex flex-col lg:flex-row gap-8">
                <Link href={'/3d-models'} className="text-center uppercase block md:hidden">Back to overview</Link>
                <Image className="aspect-square inset-0 object-cover basis-[45%] shadow-lg rounded-lg" src={placeholderImg} alt="model" />
                <section className="flex flex-col justify-center place-self-center h-full">
                    <div className="flex flex-col gap-5">
                        <Like count={model.likes} user_id={user_id} model_id={model.id} liked={model.isLiked > 0} />
                        <h1 className="text-4xl">{model.name}</h1>
                        <span className="place-self-start outline outline-gray-400 rounded-full px-3 py-1"
                            role="status"
                            aria-label="category"
                        >{model.slug}</span>
                        <p className="prose prose-lg max-w-none text-2xl leading-relaxed">{model.description}</p>
                    </div>

                    <footer className="text-sm text-gray-500 mt-10">
                        <time dateTime={model.dateAdded}>
                            Added on {new Date(model.dateAdded).toLocaleDateString()}
                        </time>
                    </footer>
                </section>
            </article>
        </div>
    )
}