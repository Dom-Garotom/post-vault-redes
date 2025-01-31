import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Post as PostType } from "../../types/post";
import { PostContainerDiv, PostContainerInfoDiv, Wrapper, ProfileDetailStyle  } from "./style";
import { PostModel } from "../../models/post";
import ProfileDetail from "../../components/molecula/profileDetail";

export default function Post(){
    const { id } = useParams<{ id: string }>(); 
    const [post, setPost] = useState<PostType | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
      const fetchPost = async () => {
        try {
          const foundPost = await PostModel.getPostById(id!);
          setPost(foundPost);
        } catch (err: unknown) {
          setError(err instanceof Error ? err.message : "Erro desconhecido!");
        }
      };
  
      fetchPost();
    }, [id]);
    if (error) {
      return <div>Erro: {error}</div>;
    }

    return (
      <Wrapper >
        {post ? (
          <PostContainerDiv>
            <PostContainerInfoDiv>
              <div className="container-info">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </PostContainerInfoDiv>
          </PostContainerDiv>
        ) : (
          <div>Post não encontrado</div>
        )}
          <ProfileDetailStyle>
            <ProfileDetail/>
          </ProfileDetailStyle>
      </Wrapper >
    );
}