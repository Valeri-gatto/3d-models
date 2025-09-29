import { getModels } from "@/app/lib/models";
import ModelsGrid from "../components/ModelsGrid";
import { ModelsPageProps } from "../types";
import Form from "next/form"

export default async function ModelsPage({ searchParams }: ModelsPageProps) {
    const data = await getModels();
    const search = (await searchParams)?.search?.toLowerCase() || "";
    const filteredData = search ? data.filter(model => model.name.toLowerCase().includes(search) || model.description.toLowerCase().includes(search)) : data;

    return <>
        <Form action="/3d-models" className="w-full px-5 md:px-0 md:max-w-xl md:place-self-end">
            {/* <label htmlFor="model-search" className="sr-only">
            </label> */}
            <input className="rounded-full border w-full px-5 py-3 text-sm md:text-base bg-white"
                type="text"
                name="search"
                placeholder="Search for a model"
                id="model-search"
                autoComplete="off"
                defaultValue={search}
            />
        </Form>
        <ModelsGrid title="3D Models" models={filteredData} />
    </>
}