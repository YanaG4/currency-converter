import React from "react";
import useDarkMode from "use-dark-mode";

const warmTheme = "light-mode";
const coldTheme = "dark-mode";

export const useTheme = () => {
    const darkMode = useDarkMode();
    const [theme, setTheme] = React.useState(warmTheme);
    React.useEffect(() => {
        setTheme(darkMode?.value ? coldTheme : warmTheme);
    }, [darkMode.value]);

    return theme;
};