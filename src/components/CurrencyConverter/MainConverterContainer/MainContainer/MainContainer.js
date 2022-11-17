
import React, { useState } from 'react'
//components
import ConverterNavigationBar from '../NavBar/ConverterNavigationBar'
import ConverterContainer from './ConverterContainer';
import ChartsContainer from './ChartsContainer';
//styles
import './MainContainer.scss'
//data
import { converterNavBarSections } from '../../../../const/websiteSections'

function MainContainer() {
    const [activeSection, setActiveSection] = useState(converterNavBarSections[0].section)
    function handleSectionChange(section) {
        setActiveSection(section)
    }

    return (
        <>
            <div className='data-container converter-container'>
                <ConverterNavigationBar
                    handleSectionChange={handleSectionChange}
                    activeSection={activeSection} />
                <div className='converter-container-items'>
                    {activeSection === converterNavBarSections[0].section &&
                        <ConverterContainer />
                    }
                    {activeSection === converterNavBarSections[1].section &&
                        <ChartsContainer />
                    }
                </div>
            </div>
        </>
    );
}

export default MainContainer;
