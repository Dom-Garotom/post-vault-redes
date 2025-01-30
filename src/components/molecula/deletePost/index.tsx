import { remove } from "../../../services/requests";

export const deletePost = async (postId: number): Promise<void> => {
    try {
        console.log(`O post que tá sendo excluído é o de ID: ${postId}`);

        const response = await remove(`/posts/${postId}`);

        console.log('Resposta da API: ', response);

        if (!response.error) {
            console.log('Post excluído com sucesso!');
            alert(`O post com o ID ${postId} foi excluído com sucesso!`)
        } else {
            throw new Error(
                'Infelizmente não foi possível realizar a exclusão do post\nError: ' +
                response.error
            );
        }
    } catch (error) {
        console.error(`Erro ao excluir post ${postId}: `, error);
    }
};
