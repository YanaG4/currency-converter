import React from 'react'

export default function NavigationBar() {
    return (

        <nav class='nav-header'>
            <img src='icons/dollar_white.png' alt="Logo" />
            <ul class="menuItems">
                <li><a href='/' data-item='Personal'>Personal</a></li>
                <li><a href='/' data-item='Business'>Business</a></li>
                <li><a href='/' data-item='Converter'>Converter</a></li>
                <li><a href='/' data-item='Currency API'>Currency API</a></li>
                <li><a href='/' data-item='Tools'>Tools</a></li>
            </ul>
        </nav>

    )
}


