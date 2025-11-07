import { FeaturesProps } from "@/app/types";

export default function Features({ children, title, text }: FeaturesProps) {
    return (
        <article className="flex flex-col gap-3">
            <div className="flex gap-3">
                {children}
                <h2 className="text-2xl">{title}</h2>
            </div>
            <p>{text}</p>
        </article>
    )
}