import React from 'react'

import CarouselWrapper from '../../Elements/CarouselWrapper/CarouselWrapper'
import CurrencyInfoTable from './CurrencyInfoTable'

import { useSelector } from 'react-redux'
import { getToCurrency, getFromCurrency, getCurrencyInfo } from '../../../features/currency/currencySlice'

export default function CurrencyInfoTables() {

  const toCurrency = useSelector(getToCurrency)
  const fromCurrency = useSelector(getFromCurrency)
  const currencyInfo = useSelector(getCurrencyInfo)

  const toCurrencyInfo = currencyInfo.find(currency => currency.code === toCurrency)
  const fromCurrencyInfo = currencyInfo.find(currency => currency.code === fromCurrency)

  return (
    <CarouselWrapper>
      <CurrencyInfoTable currencyInfo={fromCurrencyInfo} />
      <CurrencyInfoTable currencyInfo={toCurrencyInfo} />
    </CarouselWrapper>
  )
}