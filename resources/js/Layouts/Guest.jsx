import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link, Head } from "@inertiajs/react";
import PageFooter from "@/Components/PageFooter";

export default ({ children, title }) => {
    return (
        <>
            <Head title={title} />

            <div className="flex flex-col items-center min-h-screen py-6 bg-gray-100 dark:bg-dark-eval-0">
                <div className="max-h-[300px]">
                    <Link href="/">
                        <ApplicationLogo className="w-[200px] h-[200px]" />
                        <span className="sr-only">Games Rank</span>
                    </Link>
                </div>

                <main className="flex items-center flex-1 w-full sm:max-w-md">
                    <div className="w-full px-6 py-4 overflow-hidden bg-white shadow-md sm:rounded-lg dark:bg-dark-eval-1">
                        {children}
                    </div>
                </main>

                <PageFooter />
            </div>
        </>
    );
};
