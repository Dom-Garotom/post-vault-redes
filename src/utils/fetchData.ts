import { getAll } from "../services/requests";

export const fetchData = async <T>(path: string): Promise<T[] | undefined> => {
    try {
        const response = await getAll(`${path}`);

        if (!response.data) {
            throw new Error("Não foi possivel realizar a requisição");
        }

        const user : T[] = response.data;
        return user;

    } catch (error) {
        console.log("Error : " + error)
    }
}