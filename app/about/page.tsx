import Image from "next/image"
import createsImg from '@/public/hero-img.png'
import flag from '@/public/flag.svg'
import globe from '@/public/globe.svg'
import stack from '@/public/stack.svg'
import watermark from '@/public/watermark.svg'
import { albert, montserrat } from "../fonts"

export default function AboutPage() {
    return (
        <main className={`${albert.className} flex flex-col gap-7 container text-xl px-4 py-8 mx-auto max-w-6xl md:gap-10 `}>
            <section className="flex flex-1 flex-col md:flex-row gap-6 md:gap-20">
                <Image className="object-cover" src={createsImg} alt="creates" />
                <div className="flex flex-col justify-between items-start gap-7">
                    <p className="text-sm uppercase font-medium">About printforge</p>
                    <h1 className={`${montserrat.className} text-4xl md:text-5xl leading-none`}>Empowering makers worldwide</h1>
                    <p className="text-2xl">Founded in 2023, PrintForge has quickly become the go-to platform for 3D printing enthusiasts, makers, and professional designers to share and discover amazing STL files for 3D printing.</p>
                    <p className="text-2xl">Our mission is to foster a vibrant community where creativity meets technology, enabling anyone to bring their ideas to life through 3D printing.</p>
                </div>
            </section>
            <hr className="border-gray-300" aria-hidden="true" />
            <section className="flex flex-col gap-6 md:flex-row md:mx-auto max-w-5xl" aria-labelledby="key-features">
                <h2 id="key-features" className="sr-only">Key Features</h2>
                <article className="flex flex-col gap-3">
                    <div className="flex gap-3">
                        <Image src={stack} alt='stack' />
                        <h2 className={`${montserrat.className} text-2xl`}>100K+ Models</h2>
                    </div>
                    <p>Access our vast library of community-created 3D models, from practical tools to artistic creations.</p>
                </article>
                <p className="hidden border-l border-gray-500 md:inline"></p>
                <article className="flex flex-col gap-3">
                    <div className="flex gap-3">
                        <Image src={globe} alt='globe' />
                        <h2 className={`${montserrat.className} text-2xl`}>Active Community</h2>
                    </div>
                    <p>Join thousands of makers who share tips, provide feedback, and collaborate on projects.</p>
                </article>
                <p className="hidden border-l border-gray-500 md:inline"></p>
                <article className="flex flex-col gap-3">
                    <div className="flex gap-3">
                        <Image src={flag} alt='flag' />
                        <h2 className={`${montserrat.className} text-2xl`}>Free to Use</h2>
                    </div>
                    <p>Most models are free to download, with optional premium features for power users.</p>
                </article>
            </section>
            <hr className="border-gray-300" aria-hidden="true" />
            <section className="flex flex-col justify-center gap-6 mx-auto max-w-3xl" >
                <h1 className={`${montserrat.className} text-4xl`}>Our vision</h1>
                <p>At PrintForge, we believe that 3D printing is revolutionizing the way we create, prototype, and manufacture. Our platform serves as a bridge between designers and makers, enabling the sharing of knowledge and creativity that pushes the boundaries of what&apos;s possible with 3D printing.</p>
                <p className="w-4/5 place-self-center border-t border-gray-500 md:w-1/5"></p>
                <p>Whether you&apos;re a hobbyist looking for your next weekend project, an educator seeking teaching materials, or a professional designer wanting to share your creations, PrintForge provides the tools and community to support your journey in 3D printing.</p>
                <Image className="hidden md:block place-self-center mt-10" src={watermark} alt="pen" />
            </section>
        </main>
    )
}