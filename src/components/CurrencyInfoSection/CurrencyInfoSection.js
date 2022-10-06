import React, { useState } from 'react'
import { currency_history_info } from '../../stores/CurrencyHistory'
import './CurrencyInfoSection.css'

export default function CurrencyInfoSection() {

    const randomNumber = () => {
        return Math.floor(Math.random() * currency_history_info.length)
    }
    function textWithNewLine() {
        return currencyHistoryText.info.replace(/\n/g, "<br /><br />").replace(/\(/g, '<i>(').replace(/\)/g, ')</i>')
    }
    const currencyHistoryText = currency_history_info[randomNumber()]
    return (
        <div className='data-container text-container'>
            <div className='text-header-background'></div>
            <div className='text'>
                <h3>Did you know?..</h3>
                <br />
                <h4>{currencyHistoryText.title}</h4>
                <br />
                <p dangerouslySetInnerHTML={{ __html: textWithNewLine() }} />
                <br />
                <a href={currencyHistoryText.source} target="_blank">Source link</a>
            </div>
        </div>
    )
}