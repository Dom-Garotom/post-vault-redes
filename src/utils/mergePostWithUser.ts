import { Post } from "../types/post";
import { postWithUserInfo } from "../types/postWithUser";
import { User } from "../types/userApi";

export const mergePostWithUser = (postList: Post[], userList: User[]) => {
    return postList
        .map(post => {
            const user = userList.find(user => user.id === post.userId)

            const postWithUser = {
                username: user?.username,
                email: user?.email,
                ...post
            }

            return user ? postWithUser : undefined;

        }).filter(Boolean) as postWithUserInfo[];
}