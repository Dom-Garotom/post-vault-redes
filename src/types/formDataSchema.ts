export interface FormDataSchema {
  title: string
  body: string
}

export type ResponseCreatePost = FormDataSchema & {
  id : number
}