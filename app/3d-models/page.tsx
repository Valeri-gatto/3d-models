import { ModelsPageProps } from "@/app/types";
import { getModels } from "@/app/lib/models";
import ModelsGrid from "@/app/components/ModelsGrid";
import SearchInput from "../components/SearchInput";

export default async function ModelsPage({ searchParams }: ModelsPageProps) {
    const data = await getModels();
    const search = (await searchParams)?.search?.toLowerCase() || "";
    const filteredData = search ? data.filter(model => model.name.toLowerCase().includes(search) || model.description.toLowerCase().includes(search)) : data;

    return <>
        <SearchInput />
        <ModelsGrid title="3D Models" models={filteredData} noMatches={filteredData.length === 0} />
    </>
}