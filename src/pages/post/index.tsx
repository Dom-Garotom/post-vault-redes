import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Post as PostType } from "../../types/post";
import { PostContainerDiv, PostContainerInfoDiv, TitlePost, Paragraph } from "./style";
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
      <div>
        {post ? (
          <PostContainerDiv>
            <PostContainerInfoDiv>
              <div className="container-info">
                <TitlePost>{post.title}</TitlePost>
                <Paragraph>{post.body}</Paragraph>
              </div>
            </PostContainerInfoDiv>
          </PostContainerDiv>
        ) : (
          <div>Post não encontrado</div>
        )}

        <ProfileDetail/>
      </div>
    );
}