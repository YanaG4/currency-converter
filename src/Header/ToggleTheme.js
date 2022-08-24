import React from 'react'
import './ToggleTheme.scss'
import useDarkMode from "use-dark-mode";
import { useTheme } from "../utils/useTheme";

export default function ToggleTheme() {
    const darkMode = useDarkMode(true);
    const theme = useTheme();


    return (
        <div class="toggle-container">
            <label class="switch-theme">
                <input type="checkbox" id="input-theme" onClick={darkMode.toggle} />
                <label for="input-theme" data-warm="Warm" data-cold="Cold" class="slider-theme"></label>
            </label>
        </div>
    )
}
