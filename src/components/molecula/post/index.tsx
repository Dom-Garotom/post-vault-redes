import React from 'react'

import { PostStyled } from './postStyled'
import UserImage from "../../../assets/user-image.png"
import PopoverPost from '../../atomo/popover'

type PostProps = {
    userName : string,
    userInfo : string,
}


export default function Post() {
    return (
        <PostStyled.Wrapper>

            <PostStyled.WrapperInfo>
                <div className='user-info'>
                    <img src={UserImage} width={60} height={60} alt="Imagem do usuário" />
                    <div>
                        <h3>User</h3>
                        <span>location</span>
                    </div>
                </div>
                <PopoverPost/>
            </PostStyled.WrapperInfo>

            <PostStyled.TitlePost>How to Create a Zig-Zag Box Using CSS</PostStyled.TitlePost>

            <PostStyled.ParagraphPost>
                TLDRLearn how to create stylish Zig-Zag borders using modern CSS techniques.
                This tutorial walks through the HTML and CSS code needed
                to achieve two different Zig-Zag box designs.....
            </PostStyled.ParagraphPost>

        </PostStyled.Wrapper>
    )
}
