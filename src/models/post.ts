import { getAll } from "../services/requests"
import { Post as PostType } from "../types/post"

export const PostModel = {
    async getPostById(id: string): Promise<PostType | null> {
        try {
            const response = await getAll("/posts");

            if(response.error){
                throw new Error("Erro ao buscar os dados.");
            }

            const post = response.data as PostType[];
            const foundPost = post.find((post) => post.id.toString() === id);

            return foundPost || null;
        } catch(err) {
            console.error(err);
            throw new Error(err instanceof Error ? err.message: "Erro Desconhecido")
        }
    }
}