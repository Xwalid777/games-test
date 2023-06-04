import React from "react";
import {
    Card,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
    Accordion,
    AccordionHeader,
    Typography,
    AccordionBody,
} from "@material-tailwind/react";
import {
    NewspaperIcon,
    ShoppingBagIcon,
    UserCircleIcon,
    InboxIcon,
    PresentationChartBarIcon,
    ChevronRightIcon,
} from "@heroicons/react/solid";
import { ChevronDownIcon, LogoutIcon } from "@heroicons/react/solid";
import { Link } from "@inertiajs/react";

export default function Sidebar() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => {
        setOpen(open === value ? 0 : value);
    };

    return (
        <Card className="h-full rounded-none w-full max-w-[20rem] p-4 shadow-md">
            <List>
                <ListItem>
                    <ListItemPrefix>
                        <NewspaperIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Link href={route("dashboard")}>News</Link>
                </ListItem>
                <ListItem>
                    <ListItemPrefix>
                        <ShoppingBagIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Link href={route("store")}>Store</Link>
                </ListItem>
                <Accordion
                    open={open === 1}
                    icon={
                        <ChevronDownIcon
                            strokeWidth={2.5}
                            className={`mx-auto h-4 w-4 transition-transform ${
                                open === 1 ? "rotate-180" : ""
                            }`}
                        />
                    }
                >
                    <ListItem className="p-0" selected={open === 1}>
                        <AccordionHeader
                            onClick={() => handleOpen(1)}
                            className="border-b-0 p-3"
                        >
                            <ListItemPrefix>
                                <PresentationChartBarIcon className="h-5 w-5" />
                            </ListItemPrefix>
                            <Typography
                                color="blue-gray"
                                className="mr-auto font-normal"
                            >
                                Leaderboard
                            </Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <List className="p-0">
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className="h-3 w-5"
                                    />
                                </ListItemPrefix>
                                <Link href={route("desktop")}>
                                    Desktop leaderboard
                                </Link>
                            </ListItem>
                            <ListItem>
                                <ListItemPrefix>
                                    <ChevronRightIcon
                                        strokeWidth={3}
                                        className="h-3 w-5"
                                    />
                                </ListItemPrefix>
                                <Link href={route("mobile")}>
                                    Mobile leaderboard
                                </Link>
                            </ListItem>
                        </List>
                    </AccordionBody>
                </Accordion>

                <ListItem>
                    <ListItemPrefix>
                        <UserCircleIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Link href={route("profile.edit")}>Profile</Link>
                </ListItem>
                <ListItem className="py-4 text-red-600 rounded-none">
                    <ListItemPrefix>
                        <LogoutIcon className="h-5 w-5" />
                    </ListItemPrefix>
                    <Link href={route("logout")} method="post" as="button">
                        Logout
                    </Link>
                </ListItem>
            </List>
        </Card>
    );
}
