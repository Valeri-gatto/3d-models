import Image from "next/image";
import cutHero from '@/public/cut-hero-img.png'
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <section className="flex flex-col md:flex-row justify-between items-center gap-8 px-6 py-12 mx-auto max-w-7xl">
        <div className="flex-1 space-y-6">
          <p className="hidden uppercase text-base md:block">Your go-to platform for 3D printing files</p>
          <h1 className="text-4xl md:text-5xl leading-none">Discover what’s possible with 3D printing</h1>
          <p className="text-2xl">Join our community of creators and explore a vast library of user-submitted models.</p>
          <div className="flex gap-4">
            <Link href="/3d-models" className="font-semibold uppercase text-xl border-2 p-3 transition duration-100 bg-white text-black hover:bg-black hover:text-white">Browse models</Link>
          </div>
        </div>
        <Image src={cutHero} alt="creatures" />
      </section>
    </main>
  )
}