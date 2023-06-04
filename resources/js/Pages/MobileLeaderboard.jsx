import Mobile from "@/Components/Leaderboard/Mobile";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";

const MobileLeaderboard = ({ auth }) => {
    return (
        <AuthenticatedLayout user={auth.user}>
            <Mobile />
        </AuthenticatedLayout>
    );
};

export default MobileLeaderboard;
