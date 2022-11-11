
import React, { useState } from 'react'
import ConverterNavigationBar from './ConverterNavigationBar'
import CurrencyInputFields from './CurrencyInput/CurrencyInputFields';
import CurrencyOutput from './CurrencyOutput';
import { Notification } from '../Elements/Notification'
import CurrencyTable from './CurrencyTable'

import './Converter.scss'

function Converter() {
    const [amount, setAmount] = useState((1).toFixed(2))

    function changeAmountHandler(value) {
        setAmount(value)
    }

    return (
        <>
            <div className='data-container converter-container'>
                <ConverterNavigationBar />
                <div className='converter-container-items'>
                    <CurrencyInputFields
                        amount={amount}
                        setAmount={changeAmountHandler}
                    />
                    <CurrencyOutput
                        amount={amount}
                    />

                    <Notification text='We use the mid-market rate for our Converter. This is for informational purposes only. You won’t receive this rate when sending money. Check send rates' />
                    {/* <div className='main-button-container'>
                        <Button text='Convert' />
                    </div> */}
                </div>
            </div>
            <CurrencyTable />
        </>
    );
}

export default Converter;
