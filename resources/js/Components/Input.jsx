import { useEffect, useRef } from "react";

const Input = ({
    type = "text",
    name,
    value,
    className,
    autoComplete,
    required,
    isFocused,
    handleChange,
    withIcon = false,
    placeholder,
}) => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (isFocused) {
            inputRef.current.focus();
        }
    }, []);

    const baseClasses = `py-2 border-gray-400 rounded-md focus:border-gray-400 focus:ring focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-600 dark:bg-dark-eval-1 dark:text-gray-300 dark:focus:ring-offset-dark-eval-1`;

    return (
        <input
            type={type}
            name={name}
            value={value}
            className={`${baseClasses} ${
                withIcon ? "pl-11 pr-4" : "px-4"
            } ${className}`}
            ref={inputRef}
            autoComplete={autoComplete}
            required={required}
            onChange={handleChange}
            placeholder={placeholder}
        />
    );
};

export default Input;
