
import React from 'react'
//redux
import { useSelector } from 'react-redux';
import { getDate } from '../../../../features/currency/currencySlice'
//components
import ConverterNavigationBar from '../../MainConverterContainer/NavBar/ConverterNavigationBar'
import CurrencyInputFields from '../Converter/CurrencyConversionInput/CurrencyInputFields'
import CurrencyOutput from '../Converter/CurrencyConversionOutput/CurrencyOutput'
import { Notification } from '../../../Elements/Notifications/Notification'
//styles
import './Converter.scss'

function Converter() {
    const date = useSelector(getDate)
    return (
        <>
            <div className='data-container converter-container'>
                <ConverterNavigationBar />
                <div className='converter-container-items'>
                    <CurrencyInputFields />
                    <CurrencyOutput />
                    <Notification>{`The latest update of the rates was on ${date}. We use api.exchangerate.host to get the latest exchange rates.`}</Notification>
                </div>
            </div>
        </>
    );
}

export default Converter;
