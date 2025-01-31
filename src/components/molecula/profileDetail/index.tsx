import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { User } from "../../../types/userApi";
import userImage from "../../../assets/user-image.png"
import { PostModel } from "../../../models/post";

export default function ProfileDetail(){
    const { id } = useParams<{ id: string }>();
    const [user, setUser] = useState<User | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const foundUser = await PostModel.getUserById(id!)
                setUser(foundUser)
            } catch (err: unknown) {
                setError(err instanceof Error ? err.message : "Erro desconhecido!");
            }
        }

        fetchUser()
    }, [id]);
    if (error) {
        return <div>Erro: {error}</div>;
    }

    return(
        <div>
            <h2>Profile</h2>
            {user ? (
                <div>
                    <img src={userImage} width={60} height={60} alt="Imagem do usuário" />
                    <h1>{user.name}</h1>
                    <p className="email">{user.email}</p>
                    <p><strong>Location:</strong> {user.address.city}</p>
                    <p><strong>Company:</strong> {user.company.name}</p>
                    <p><strong>Phone:</strong> {user.phone}</p>
                    <button className="follow-btn" disabled>Follow</button>
                </div>
            ) : (
                <h1>Carregando...</h1>
            )}
        </div>
    );
}