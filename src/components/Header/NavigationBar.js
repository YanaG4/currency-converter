import React from 'react'
import './NavigationBar.scss'
import ToggleTheme from '../Elements/ToggleTheme'

export default function NavigationBar() {
    return (
        <nav className='nav-header'>
            <img src='icons/dollar_white.png' alt="Logo" />
            <div className='menu'><a href='/'>☰</a>
                <ul className="menuItems dropdown">
                    <li><a href='/' data-item='Converter'>Converter</a></li>
                    <li><a href='/' data-item='Currency API'>Currency API</a></li>
                    <li><a href='/' data-item='Tech stack'>Tech stack</a></li>
                    <li><a href='/' data-item='About'>About</a></li>
                </ul>
            </div>
            <ToggleTheme />
        </nav>

    )
}


