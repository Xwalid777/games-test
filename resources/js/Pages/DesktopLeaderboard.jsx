import Desktop from "@/Components/Leaderboard/Desktop";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const DesktopLeaderboard = ({ auth }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Desktop />
        </AuthenticatedLayout>
    );
};

export default DesktopLeaderboard;
