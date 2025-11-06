import { RootLayoutProps } from "@/app/types";
import CategoriesNavBar from "@/app/components/CategoriesNavBar";
import { getAllCategories } from "@/app/lib/categories";

export default function ModelsLayout({ children }: RootLayoutProps) {
    const categories = getAllCategories();

    return (
        <div className="relative flex flex-col min-h-[70vh] gap-5 md:flex-row">
            <CategoriesNavBar categories={categories} />
            <main className="flex-1 p-4 md:ml-64">
                {children}
            </main>
        </div >
    )
}