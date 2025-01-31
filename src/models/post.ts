import { getAll, post, put, remove } from '../services/requests'
import { EditPostSchema, Post as PostType } from '../types/post'
import { FormDataSchema, ResponseCreatePost } from './../types/formDataSchema'

export const PostModel = {
  async getPostById(id: string): Promise<PostType | null> {
    try {
      const response = await getAll('/posts')

      if (response.error) {
        throw new Error('Erro ao buscar os dados.')
      }

      const post = response.data as PostType[]
      const foundPost = post.find((post) => post.id.toString() === id)

      return foundPost || null
    } catch (err) {
      console.error(err)
      throw new Error(err instanceof Error ? err.message : 'Erro Desconhecido')
    }
  },

  async createPost(
    formData: FormDataSchema
  ): Promise<ResponseCreatePost | undefined> {
    try {
      const response = await post('/posts', formData)

      if (response.error) {
        throw new Error(
          'Não foi possivel realizar a requisição\nError : ' + response.error
        )
      }

      if (!response.data) {
        return {} as ResponseCreatePost
      }

      const serverResponse = response.data as ResponseCreatePost
      return serverResponse
    } catch (error) {
      console.log('Error : ' + error)
    }
  },

  async editPost(
    postId: string,
    body: EditPostSchema
  ): Promise<EditPostSchema | undefined> {
    try {
      const response = await put(`/posts/${postId}`, body)

      if (response.error) {
        throw new Error(
          'Infelizmente não foi possível realizar a edição do post\nError : ' +
            response.error
        )
      }

      if (!response.data) {
        return
      }

      const serverResponse = response.data as EditPostSchema
      return serverResponse
    } catch (error) {
      console.log(error)
      alert('Não foi possível realizar a edição do seu post')
    }
  },

  async deletePost(postId: number): Promise<boolean> {
    try {
      console.log(`O post que tá sendo excluído é o de ID: ${postId}`)

      const response = await remove(`/posts/${postId}`)

      console.log('Resposta da API: ', response)

      if (response.error) {
        throw new Error(
          'Infelizmente não foi possível realizar a exclusão do post\nError: ' +
            response.error
        )
      }

      console.log('Post excluído com sucesso!')
      alert(`O post com o ID ${postId} foi excluído com sucesso!`)
      return true
    } catch (error) {
      console.error(`Erro ao excluir post ${postId}: `, error)
      return false
    }
  },
}
