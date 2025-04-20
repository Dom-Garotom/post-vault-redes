export type Post = {
  "userId": number,
  "id": number,
  "title": string,
  "body": string,
}


export interface EditPostSchema {
  id : number,
  userId : number ,
  title: string ,
  body: string,
}