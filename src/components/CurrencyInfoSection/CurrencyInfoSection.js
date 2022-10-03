import React, { useState } from 'react'
import { currency_history_info } from '../../stores/CurrencyHistory'

export default function CurrencyInfoSection() {

    const randomNumber = () => {
        return Math.floor(Math.random() * currency_history_info.length)
    }
    const currencyHistoryText = currency_history_info[randomNumber()]
    return (
        <div className='data-container text-container'>
            <div className='text'>
                <strong>Did you know?
                    <br /><br />{currencyHistoryText.title}</strong>
                <br /><br />{currencyHistoryText.info}
                <br /><br /><a href={currencyHistoryText.source} target="_blank">Source link</a>
            </div>
        </div>
    )
}