import React from 'react'
import './ToggleTheme.scss'
import useDarkMode from "use-dark-mode";
import { useTheme } from "../../../utils/useTheme";
import { useRef, useEffect } from 'react';

export default function ToggleTheme() {
    const darkMode = useDarkMode(true);
    const theme = useTheme();
    const inputElement = useRef();
    useEffect(() => {
        if (darkMode.value !== inputElement.current.checked)
            inputElement.current.checked = darkMode.value
        //console.log(darkMode.value);
    }, [darkMode])
    return (
        <div className="toggle-container">
            <label className="switch-theme">
                <input ref={inputElement} type="checkbox" id="input-theme" onChange={darkMode.toggle} defaultChecked={false} />
                <label htmlFor="input-theme" data-warm="Warm" data-cold="Cold" className="slider-theme"></label>
            </label>
        </div>
    )
}
