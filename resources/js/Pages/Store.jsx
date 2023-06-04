import GameCard from "@/Components/GameCard";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import axios from "axios";
import { useEffect, useState } from "react";

const Store = ({ auth }) => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const getGames = async () => {
            const res = await axios.get("http://localhost:8000/api/games");
            const data = res.data;
            setGames(data);
        };
        getGames();
    }, []);

    return (
        <AuthenticatedLayout user={auth.user}>
            <div className="flex flex-wrap gap-8">
                {games.map((game) => (
                    <GameCard key={game.id} game={game} />
                ))}
            </div>
        </AuthenticatedLayout>
    );
};

export default Store;
