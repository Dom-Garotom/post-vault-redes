import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Post as PostType } from "../../types/post";
import { getAll } from "../../services/requests";

export default function Post(){
    const { id } = useParams<{ id: string }>(); 
    const [post, setPost] = useState<PostType | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPost = async () => { 
          try {
            const response = await getAll('/posts');
            if (response.error) {
              throw new Error("Erro ao buscar os dados.");
            }
    
            const foundPost = response.data.find((post: PostType) => post.id.toString() === id);
            setPost(foundPost || null); 
          } catch (err: any) {
            setError(err.message || "Ocorreu um erro inesperado!");
          } finally {
            setLoading(false);
          }
        };
    
        fetchPost();
    }, [id]); 
    
      if (loading) {
        return <div>Carregando...</div>;
    }
    
      if (error) {
        return <div>Erro: {error}</div>;
    }

    return(
        <div>
            {post ? (
                <div>
                    <div>
                        <div>
                            <div>{post.title}</div>
                            <div>{post.body}</div>
                        </div>
                    </div>
                </div>
            ) : (
                <div>Post não encontrado</div>
            )}
        </div>
    )
}