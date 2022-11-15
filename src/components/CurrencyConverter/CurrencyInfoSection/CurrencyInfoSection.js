import React, { useEffect } from 'react'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { getFacts, fetchInterestingFacts } from '../../../features/interestingFacts/interestingFactsSlice'
//styles
import './CurrencyInfoSection.css'

export default function CurrencyInfoSection() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchInterestingFacts())
    }, [])
    const interestingFacts = useSelector(getFacts)
    const randomNumber = () => {
        return Math.floor(Math.random() * interestingFacts.length)
    }
    function textWithNewLine() {
        return currencyHistoryText?.info?.replace(/\n/g, "<br /><br />").replace(/\(/g, '<i>(').replace(/\)/g, ')</i>')
    }
    const currencyHistoryText = interestingFacts[randomNumber()]
    return (
        <div className='data-container text-container'>
            <div className='text-header-background'></div>
            <h3>Did you know?..</h3>
            <br />
            <h4>{currencyHistoryText.title}</h4>
            <br />
            <p dangerouslySetInnerHTML={{ __html: textWithNewLine() }} />
            <br />
            <a href={currencyHistoryText.source} target="_blank" rel="noopener">Source link</a>
        </div>
    )
}