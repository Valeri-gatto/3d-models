import Image from "next/image";
import type { Model } from "../types";
import like from "@/public/Heart.svg";

export default function Card({ data }: { data: Model }) {
    return (
        <article className="flex flex-col outline-gray-400 rounded-md">
            <Image src={data.image} width={267} height={267} alt={data.description} />
            <div className="flex flex-col gap-4 p-3">
                <h2>{data.name}</h2>
                <p>{data.description}</p>
                <span className="outline-gray-400 rounded-3xl p-1">{data.category}</span>
                <div className="flex">
                    <Image src={like} alt="like" />
                    <span className="text-gray-400">{data.likes}</span>
                </div>
            </div>
        </article>
    )
}