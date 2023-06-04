export default function Checkbox({ className = "", handleChange, ...props }) {
    return (
        <input
            {...props}
            onChange={handleChange}
            type="checkbox"
            className={
                "rounded border-gray-300 text-indigo-600 shadow-sm focus:ring-indigo-500 " +
                className
            }
        />
    );
}
