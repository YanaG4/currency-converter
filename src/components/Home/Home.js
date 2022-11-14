import React, { useEffect } from 'react'
//Components
import Header from '../CurrencyConverter/ConverterHeader/Header'
import Converter from '../CurrencyConverter/MainConverterContainer/MainContainer/Converter'
import CurrencyTables from '../CurrencyConverter/CurrencyConversionTables/CurrencyTables'
import MobileSection from '../MobileSection/MobileSection'
import CurrencyInfoSection from '../CurrencyConverter/CurrencyInfoSection/CurrencyInfoSection'
import CurrencyInfoTables from '../CurrencyConverter/CurrencyInfoSection/CurrencyInfoTables';
//redux
import { useDispatch } from 'react-redux'
import { fetchCurrencyRates, fetchCurrencyInfo, fetchCurrencyTimeseries } from '../../features/currency/currencySlice'

export default function Home() {
    //Fetch converter data
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCurrencyInfo())
            .then(() =>
                dispatch(fetchCurrencyRates())
                    .then(() =>
                        dispatch(fetchCurrencyTimeseries())))
    }, [dispatch])
    return (
        <>
            <Header />
            <Converter />
            <CurrencyTables />
            <MobileSection />
            <CurrencyInfoSection />
            <CurrencyInfoTables />
        </>
    )
}
