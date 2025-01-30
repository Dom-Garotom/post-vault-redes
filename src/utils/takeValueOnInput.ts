import { ChangeEvent } from 'react'

export const takeValueOnInput = <T>(
  event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  setData: React.Dispatch<React.SetStateAction<T>>
) => {
  const { value, name } = event.target

  setData((prev) => {
    return {
      ...prev,
      [name]: value,
    }
  })
}
