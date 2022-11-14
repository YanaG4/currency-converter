
import React, { useState, useEffect } from 'react'
//redux
import { useSelector } from 'react-redux';
import { getDate } from '../../../../features/currency/currencySlice'
//components
import ConverterNavigationBar from '../../MainConverterContainer/NavBar/ConverterNavigationBar'
import CurrencyInputFields from '../Converter/CurrencyConversionInput/CurrencyInputFields'
import CurrencyOutput from '../Converter/CurrencyConversionOutput/CurrencyOutput'
import { Notification } from '../../../Elements/Notifications/Notification'
import CurrencyChart from '../Charts/CurrencyChart'
//styles
import './Converter.scss'
//data
import { converterNavBarSections } from '../../../../const/websiteSections'

function Converter() {
    const date = useSelector(getDate)
    const [activeSection, setActiveSection] = useState(converterNavBarSections[0].section)
    useEffect(() => {
        console.log('activeSection === ' + activeSection);
    }, [activeSection])
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
                            <CurrencyInputFields />
                            <CurrencyOutput />
                            <Notification>{`The latest update of the rates was on ${date}. We use api.exchangerate.host to get the latest exchange rates.`}</Notification>
                        </>
                    }
                    {activeSection === converterNavBarSections[1].section &&
                        <CurrencyChart />
                    }
                </div>
            </div>
        </>
    );
}

export default Converter;
