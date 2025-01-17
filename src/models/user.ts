import { getOne } from '../services/requests'
import { UserInterface } from '../types/user'

export const getUser = async (
  userId: string
): Promise<UserInterface | null> => {
  const response = await getOne(`/users/${userId}`)

  if (response.data) {
    return response.data
  }

  return null
}
