import React from 'react'
import './ToggleTheme.scss'
import useDarkMode from "use-dark-mode";
import { useTheme } from "../utils/useTheme";

export default function ToggleTheme() {
    const darkMode = useDarkMode(true);
    const theme = useTheme();
    return (
        <div className="toggle-container">
            <label className="switch-theme">
                <input type="checkbox" id="input-theme" onClick={darkMode.toggle} />
                <label htmlFor="input-theme" data-warm="Warm" data-cold="Cold" className="slider-theme"></label>
            </label>
        </div>
    )
}
