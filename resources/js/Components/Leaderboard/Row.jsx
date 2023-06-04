import { Fragment } from "react";
import { schema } from "./schema";

const Row = ({ isHead, game }) => {
    return (
        <Fragment>
            {isHead ? (
                <div className="flex items-center justify-between p-3 text-sm font-semibold">
                    {Object.keys(schema).map((key) => (
                        <span
                            key={key}
                            className="block flex-1 text-center uppercase"
                        >
                            {key}
                        </span>
                    ))}
                </div>
            ) : (
                <div
                    className={`${
                        !(game.id % 2) ? "bg-gray-100" : "bg-white"
                    } p-2 flex items-center w-full m-auto`}
                >
                    <span className="flex-1 text-gray-600 text-sm text-center">
                        {game.id}
                    </span>
                    <span className="flex-1 text-sm text-center">
                        {game.name}
                    </span>
                    <div className="flex-1">
                        <img
                            className="m-auto w-12 h-auto object-contain bg-[#ccc] p-1 border-[1px] border-[#eee]"
                            src={game.img}
                            alt="avatar"
                        />
                    </div>
                    <span className="flex-1 text-green-500 text-center font-semibold">
                        {game.price}
                    </span>
                    <span className="flex-1 text-sm text-center text-gray-900">
                        {game.type}
                    </span>
                </div>
            )}
        </Fragment>
    );
};

export default Row;
