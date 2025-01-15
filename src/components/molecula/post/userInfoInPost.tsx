import { useEffect, useState } from 'react';
import { PostStyled } from './postStyled'

import { PostApi } from '../../../services/api/postApi';
import { User } from '../../../types/user';
import PopoverPost from '../../atomo/popover'
import userImage from "../../../assets/user-image.png"

export default function UserInfoInPost({ userId }: { userId: number }) {
    const [listUser, setListUser] = useState<User[]>([])
    const [userCurrent, setUserCurrent] = useState<User>()

    useEffect(() => {
        fetchPost();
        findUser();
    })

    const fetchPost = async () => {
        try {
            const userResponse = await PostApi.get("/users");

            if (!userResponse.data) {
                throw new Error("Não foi possivel realizar a requisição");
            }

            const userList: User[] = userResponse.data;
            setListUser(userList)

        } catch (error) {
            console.log("Error : " + error)
        }
    }

    const findUser = () => {
        const user = listUser.find( user => user.id === userId);        
        setUserCurrent(user)
    }


    return (
        <PostStyled.WrapperInfo>
            <div className='user-info'>
                <img src={userImage} width={60} height={60} alt="Imagem do usuário" />
                <div>
                    <h3>{userCurrent?.name}</h3>
                    <span>{userCurrent?.email}</span>
                </div>
            </div>
            <PopoverPost />
        </PostStyled.WrapperInfo>
    )
}
