import React, { useRef, createRef } from 'react'
//components
import ToggleTheme from '../Elements/ToggleTheme/ToggleTheme'
//data
import { headerNavBarSections } from '../../const/websiteSections'
//styles
import './NavigationBar.scss'

export default function NavigationBar() {
    const currentSection = useRef(window.location.pathname)
    const sections = useRef(Array(headerNavBarSections.length).fill(createRef()));

    return (
        <>
            <div className='nav-header-full-width'></div>
            <nav className='nav-header'>
                <a href='/'><img src='icons/dollar_white.png' alt="Logo" /></a>
                <div className='menu'><a href='/' onClick={e => { e.preventDefault() }} >☰</a>
                    <ul className="menuItems dropdown">
                        {
                            headerNavBarSections.map((section, i) => (
                                <li
                                    key={section.section}
                                    ref={sections[i]}
                                    style={currentSection.current === section.link ? { borderBottom: '2px solid white', pointerEvents: 'none' } : {}}
                                    onClick={e => { if (currentSection.current === section.link) e.preventDefault() }}
                                >
                                    <a href={section.link} data-item={section.section}>
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


