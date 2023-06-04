import React from "react";

const GameCard = ({ src }) => {
    return (
        <div className="w-1/4 text-white h-auto border-2 border-[#888] rounded-lg">
            <img
                src={src}
                className="p-2 bg-[#2563EB22] w-full h-full object-cover rounded-lg bg-[#0A0910]"
                alt="Game cover"
            />
        </div>
    );
};

const Carousel = () => {
    return (
        <div className="bg-[#0B1940] py-24">
            <div className="grid place-items-center text-center mb-12">
                <span className="block py-2 px-6 w-max rounded-xl text-[#00eeff] bg-[#00ffee22]">
                    Discover our
                </span>
                <h2 className="text-white font-bold text-4xl mt-4">
                    Games List
                </h2>
            </div>
            <div className="flex gap-4 max-w-[1200px] justify-between m-auto">
                <GameCard src="https://hips.hearstapps.com/digitalspyuk.cdnds.net/13/14/gaming-gta5-cover.jpeg" />
                <GameCard src="https://static-cdn.jtvnw.net/ttv-boxart/493057-285x380.jpg" />
                <GameCard src="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt6ce962f552812df5/62d6bd83c4f39a1084ff5bef/GettyImages-1409223178.jpg?format=jpg" />
                <GameCard src="https://m.media-amazon.com/images/I/616+j9jEM4L._AC_UF894,1000_QL80_.jpg" />
            </div>
        </div>
    );
};

export default Carousel;
