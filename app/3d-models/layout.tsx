import { RootLayoutProps } from "@/app/types";
import CategoriesNavBar from "@/app/components/CategoriesNavBar";

export default function ModelsLayout({ children }: RootLayoutProps) {
    return (
        <div className="relative flex flex-col min-h-[70vh] gap-5 md:flex-row">
            <CategoriesNavBar />
            <main className="flex-1 p-4 md:ml-64">
                {children}
            </main>
        </div >
    )
}