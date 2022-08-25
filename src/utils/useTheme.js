import React from "react";
import useDarkMode from "use-dark-mode";

const coldTheme = "light-mode";
const warmTheme = "dark-mode";

export const useTheme = () => {
    const darkMode = useDarkMode();
    const [theme, setTheme] = React.useState(warmTheme);
    React.useEffect(() => {
        setTheme(darkMode?.value ? warmTheme : coldTheme);
    }, [darkMode.value]);

    return theme;
};