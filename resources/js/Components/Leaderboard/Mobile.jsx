import axios from "axios";
import { useEffect, useState } from "react";
import Row from "./Row";

const Mobile = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const getGames = async () => {
            const res = await axios.get("http://localhost:8000/api/games");
            const data = res.data.filter((game) => game.type === "mobile");
            setGames(data);
        };
        getGames();
    }, []);

    return (
        <div>
            {games.map((game) => (
                <Row key={game.id} game={game} />
            ))}
        </div>
    );
};

export default Mobile;
