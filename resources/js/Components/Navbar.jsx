import React from "react";
import {
    Navbar,
    Typography,
    Button,
    IconButton,
    Collapse,
} from "@material-tailwind/react";
import { Link } from "@inertiajs/react";

export default function NavBar({ user }) {
    const [openNav, setOpenNav] = React.useState(false);

    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const navList = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Home
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    About us
                </a>
            </Typography>
            <Typography
                as="li"
                variant="small"
                color="blue-gray"
                className="p-1 font-normal"
            >
                <a href="#" className="flex items-center">
                    Games list
                </a>
            </Typography>
        </ul>
    );

    return (
        <Navbar className="inset-0 bg-transparent border-none z-10 h-[60px] w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    href="#"
                    className="mr-4 cursor-pointer py-1.5 font-medium"
                >
                    Games Rank
                </Typography>
                <div className="flex items-center gap-4">
                    <div className="mr-4 flex items-center hidden lg:block">
                        {navList}
                    </div>
                    <div className="hidden lg:block">
                        {user ? (
                            <Link
                                href={route("dashboard")}
                                className="px-3 py-1 rounded-md font-semibold bg-blue-600 text-gray-200 hover:text-white dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={route("login")}
                                    className="px-3 py-1 rounded-md font-semibold text-gray-200 hover:text-white dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Login
                                </Link>
                                <Link
                                    href={route("register")}
                                    className="px-3 py-1 rounded-md font-semibold text-gray-200 hover:text-white dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                    <IconButton
                        variant="text"
                        className="-mt-6 h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                        ripple={false}
                        onClick={() => setOpenNav(!openNav)}
                    >
                        {openNav ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                className="h-6 w-6"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth={2}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </IconButton>
                </div>
            </div>
            <Collapse open={openNav}>
                {navList}
                <div className="flex gap-4 justify-center items-center">
                    <Button
                        variant="gradient"
                        size="sm"
                        fullWidth
                        className="mb-4 bg-[rgba(0,120,255,0.2)]"
                    >
                        <span>Login</span>
                    </Button>
                    <Button
                        variant="gradient"
                        size="sm"
                        fullWidth
                        className="mb-4 bg-[rgba(0,120,255,0.2)]"
                    >
                        <span>Sign Up</span>
                    </Button>
                </div>
            </Collapse>
        </Navbar>
    );
}
