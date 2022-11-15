import React from 'react'

import CarouselWrapper from '../../Elements/CarouselWrapper/CarouselWrapper'
import CurrencyInfoTable from './CurrencyInfoTable'

import { useToCurrencyFullInfo, useFromCurrencyFullInfo } from '../../../utils/useCurrencyFullInfo'

export default function CurrencyInfoTables() {
  const toCurrencyInfo = useToCurrencyFullInfo()
  const fromCurrencyInfo = useFromCurrencyFullInfo()

  return (
    <>
      <CarouselWrapper>
        <CurrencyInfoTable currencyInfo={fromCurrencyInfo} />
        <CurrencyInfoTable currencyInfo={toCurrencyInfo} />
      </CarouselWrapper>
      <div style={{ height: '60px' }}></div>
    </>
  )
}