import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Post as PostType } from "../../types/post";
import { getAll } from "../../services/requests";
import { PostContainerDiv, PostContainerInfoDiv, TitlePost, Paragraph } from "./style";

export default function Post(){
    const { id } = useParams<{ id: string }>(); 
    const [post, setPost] = useState<PostType | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPost = async () => { 
          try {
            const response = await getAll('/posts');
            if (response.error) {
              throw new Error("Erro ao buscar os dados.");
            }
    
            const posts = response.data as PostType[]; 
            const foundPost = posts.find((post) => post.id.toString() === id);
            setPost(foundPost || null); 
          } catch (err: unknown) {
            if (err instanceof Error) {
              setError(err.message || "Ocorreu um erro inesperado!");
            } else {
              setError("Erro desconhecido!");
            }
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
      </div>
    );
}