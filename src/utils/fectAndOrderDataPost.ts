import { Post } from '../types/post'
import { postWithUserInfo } from '../types/postWithUser'
import { User } from '../types/userApi'
import { fetchData } from './fetchData'
import { mergePostWithUser } from './mergePostWithUser'

export const fetchAndOrderDataPost = async (
  setPost: React.Dispatch<React.SetStateAction<postWithUserInfo[] | null>>
) => {
  try {
    const [userResponse, postResponse] = await Promise.all([
      fetchData<User>('/users'),
      fetchData<Post>('/posts'),
    ])

    if (!userResponse || !postResponse) {
      throw new Error('Não foi possível realizar a requisição dos dados')
    }

    const postList = postResponse
    const userList = userResponse

    const listPostWithUser = mergePostWithUser(postList, userList)
    setPost(listPostWithUser)
  } catch (error) {
    console.log('Error : ' + error)
  }
}
