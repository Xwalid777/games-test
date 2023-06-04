export default ({ className }) => {
    return (
        <img
            className={className || "w-20 h-20 object-contain"}
            src="/logo2.png"
            alt="Logo"
        />
    );
};
