
import React, { useState } from 'react'
//redux
import { useSelector } from 'react-redux';
import { getDate } from '../../../../features/currency/currencySlice'
//components
import ConverterNavigationBar from '../NavBar/ConverterNavigationBar'
import CurrencyInputFields from '../Converter/CurrencyConversionInput/CurrencyInputFields'
import CurrencyOutput from '../Converter/CurrencyConversionOutput/CurrencyOutput'
import { Notification } from '../../../Elements/Notifications/Notification'
import CurrencyChart from '../Charts/CurrencyChart'
//styles
import './MainContainer.scss'
//data
import { converterNavBarSections } from '../../../../const/websiteSections'

function MainContainer() {
    const date = useSelector(getDate)
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
                        <>
                            <CurrencyInputFields withAmount={true} />
                            <CurrencyOutput />
                            <Notification>{`The latest update of the rates was on ${date}. We use api.exchangerate.host to get the latest exchange rates.`}</Notification>
                        </>
                    }
                    {activeSection === converterNavBarSections[1].section &&
                        <>
                            <CurrencyInputFields withAmount={false} />
                            <CurrencyChart />
                        </>
                    }
                </div>
            </div>
        </>
    );
}

export default MainContainer;
