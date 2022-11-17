import React, { useEffect } from 'react'
import { Skeleton } from '@mui/material'
//redux
import { useDispatch, useSelector } from 'react-redux'
import { getFacts, fetchInterestingFacts, getStatus } from '../../../features/interestingFacts/interestingFactsSlice'
//styles
import './CurrencyInfoSection.css'

export default function CurrencyInfoSection() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchInterestingFacts())
    }, [dispatch])

    const interestingFacts = useSelector(getFacts)
    const status = useSelector(getStatus)
    const randomNumber = () => {
        return Math.floor(Math.random() * interestingFacts.length)
    }
    function textWithNewLine() {
        return currencyHistoryText?.info?.replace(/\n/g, "<br /><br />").replace(/\(/g, '<i>(').replace(/\)/g, ')</i>')
    }
    const currencyHistoryText = interestingFacts[randomNumber()]

    let renderFact = ''
    renderFact = status === 'fulfilled' ?
        (
            <>
                <h4>{currencyHistoryText.title}</h4>
                <br />
                <p dangerouslySetInnerHTML={{ __html: textWithNewLine() }} />
                <br />
                <a href={currencyHistoryText.source} target="_blank" rel="noopener noreferrer" >Source link</a>
            </>
        )
        :
        (
            <>
                <Skeleton variant="rounded" width={'50%'} height={50} />
                <br />
                <Skeleton variant="rounded" width={'100%'} height={300} />
                <br />
                <Skeleton variant="rounded" width={150} sx={{ fontSize: '1.1rem', marginLeft: 'auto' }} />
            </>
        )

    return (
        <div className='data-container text-container'>
            <div className='text-header-background'></div>
            <h3>Did you know?..</h3>
            <br />
            {renderFact}
        </div>
    )
}