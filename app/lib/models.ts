import modelsData from "@/app/data/models.json";
import { GetModelsParams, Model } from "@/app/types";

export async function getModels({ category }: GetModelsParams = {}) {
    // There is a place for fetch the list of models from a database. 
    // I use a JSON array of data in models.json for now.
    let filteredModels = [...modelsData];
    if (category) {
        filteredModels = modelsData.filter(model => model.category === category);
    }
    return filteredModels;
}

export async function getModelById(id: string | number): Promise<Model> {
    const foundModel = modelsData.find((model: Model) => model.id.toString() === id.toString())
    if (!foundModel) {
        throw new Error(`Model with id ${id} not found`)
    }
    return foundModel
}