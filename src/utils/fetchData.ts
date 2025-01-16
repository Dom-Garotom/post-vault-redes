import { PostApi } from "../services/api/postApi";

export const fetchData = async <T>(path: string): Promise<T[] | undefined> => {
    try {
        const response = await PostApi.get(`${path}`);

        if (!response.data) {
            throw new Error("Não foi possivel realizar a requisição");
        }

        const user : T[] = response.data;
        return user;

    } catch (error) {
        console.log("Error : " + error)
    }
}