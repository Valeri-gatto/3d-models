import modelsData from "../data/models.json"
import { GetModelsParams, Model } from "../types";

export async function getModels({ category }: GetModelsParams = {}) {
    // This is where you'd write code to fetch the list
    // of models from a database. We're mocking that with
    // our JSON array of data in models.json for now.
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