import React, { useRef, createRef } from 'react'
import { useLocation } from "react-router-dom";
//components
import ToggleTheme from '../Elements/ToggleTheme/ToggleTheme'
//data
import { headerNavBarSections } from '../../const/websiteSections'
//styles
import './NavigationBar.scss'
import dollarSign from '../../assets/icons/dollar_white.png'

export default function NavigationBar() {
    const currentSection = `#${useLocation().pathname}`
    const sections = useRef(Array(headerNavBarSections.length).fill(createRef()));
    const checkLink = (link) => {
        if (!Array.isArray(link))
            return currentSection === link ? { borderBottom: '2px solid white', pointerEvents: 'none' } : {}
        for (const singleLink of link) {
            if (currentSection === singleLink) {
                return { borderBottom: '2px solid white', pointerEvents: 'none' }
            }
        }
        return {}
    }

    return (
        <>
            <div className='nav-header-full-width'></div>
            <nav className='nav-header'>
                <a href='/'><img src={dollarSign} alt="Logo" /></a>
                <div className='menu'><a href='/' onClick={e => { e.preventDefault() }} >☰</a>
                    <ul className="menuItems dropdown">
                        {
                            headerNavBarSections.map((section, i) => (
                                <li
                                    key={section.section}
                                    ref={sections[i]}
                                    style={checkLink(section.link)}
                                    onClick={e => { if (currentSection.current === section.link) e.preventDefault(); e.target.blur() }}
                                >
                                    <a href={Array.isArray(section.link) ? section.link[0] : section.link} data-item={section.section}>
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


