import React from 'react'
import './ToggleTheme.scss'

export default function ToggleTheme() {
    return (
        <div class="toggle-container">
            <label class="switch-theme">
                <input type="checkbox" id="input-theme" />
                <label for="input-theme" data-warm="Warm" data-cold="Cold" class="slider-theme"></label>
            </label>
        </div>
    )
}
