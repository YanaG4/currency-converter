import React from 'react'
import { converterNavBarSections } from '../../../../const/websiteSections'
import './ConverterNavigationBar.scss'

export default function ConverterNavigationBar({ handleSectionChange, activeSection }) {
    const activeSectionStyles = {
        backgroundColor: 'transparent',
        cursor: 'default'
    }
    return (
        <ul className="converter-menu-item">
            {converterNavBarSections.map(section =>
                <li
                    key={section.section}
                    style={section.section === activeSection ? activeSectionStyles : {}}>
                    <div onClick={() => handleSectionChange(section.section)}>
                        <i className={section.icon}></i>
                        {section.section}
                    </div>
                </li>
            )}
        </ul>
    )
}
