import React from 'react'
//components
import ToggleTheme from '../Elements/ToggleTheme/ToggleTheme'
//data
import { headerNavBarSections } from '../../const/websiteSections'
//styles
import './NavigationBar.scss'

export default function NavigationBar() {
    return (
        <>
            <div className='nav-header-full-width'></div>
            <nav className='nav-header'>
                <img src='icons/dollar_white.png' alt="Logo" />
                <div className='menu'><a href='/' onClick={e => { e.preventDefault() }} >☰</a>
                    <ul className="menuItems dropdown">
                        {
                            headerNavBarSections.map(section => (
                                <li key={section.section}>
                                    <a href={`/${section.link}`} data-item={section.section}>
                                        {section.section}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <ToggleTheme />
            </nav>
        </>
    )
}


