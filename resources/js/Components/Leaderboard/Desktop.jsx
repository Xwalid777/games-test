import Row from "./Row";
import axios from "axios";
import React, { useState, useEffect } from "react";

const Desktop = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        const getGames = async () => {
            const res = await axios.get("http://localhost:8000/api/games");
            const data = res.data.filter((game) => game.type === "Desktop");
            setGames(data);
        };
        getGames();
    }, []);

    return (
        <div>
            <Row isHead={true} />
            {games.map((game) => (
                <Row key={game.id} game={game} />
            ))}
        </div>
    );
};

export default Desktop;
