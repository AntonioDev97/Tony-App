import { useEffect, useState } from "react";
import { getCookie, setCookie } from "@/utils/cookies";

type Theme = "light" | "dark";

export const useTheme = (defaultTheme: Theme) => {
    const [theme, setTheme] = useState<Theme>(() => {
        const cookieTheme = getCookie("theme") as Theme | null;
        return cookieTheme || defaultTheme; // default -> dark
    });

    useEffect(() => {
        document.documentElement.setAttribute("data-bs-theme", theme);
        setCookie("theme", theme, 365); // set cookie for 1 year
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "dark" ? "light" : "dark"));
    };

    return { theme, toggleTheme };
};
