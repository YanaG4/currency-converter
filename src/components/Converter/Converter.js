
import React from 'react'

import ConverterNavigationBar from './ConverterNavigationBar'
import CurrencyInputFields from './CurrencyInput/CurrencyInputFields';
import CurrencyOutput from './CurrencyOutput';
import { Notification } from '../Elements/Notifications/Notification'
import CurrencyTable from './CurrencyTable'

import './Converter.scss'

function Converter() {
    return (
        <>
            <div className='data-container converter-container'>
                <ConverterNavigationBar />
                <div className='converter-container-items'>
                    <CurrencyInputFields />
                    <CurrencyOutput />
                    <Notification text='We use the mid-market rate for our Converter. This is for informational purposes only. You won’t receive this rate when sending money. Check send rates' />
                </div>
            </div>
            <CurrencyTable />
        </>
    );
}

export default Converter;
