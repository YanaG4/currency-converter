import React, { useState } from 'react'

import CarouselWrapper from '../../Elements/CarouselWrapper/CarouselWrapper'
import CurrencyInfoTable from './CurrencyInfoTable'

import { useToCurrencyFullInfo, useFromCurrencyFullInfo } from '../../../utils/useCurrencyFullInfo'

export default function CurrencyInfoTables() {
  const toCurrencyInfo = useToCurrencyFullInfo()
  const fromCurrencyInfo = useFromCurrencyFullInfo()

  const [isHidden, setIsHidden] = useState(true)
  function handleIsHiddenChange() {
    setIsHidden(false)
  }

  let renderTables = ''
  renderTables = (
    <>
      <CarouselWrapper>
        <CurrencyInfoTable
          currencyInfo={fromCurrencyInfo}
          isHidden={isHidden}
          handleIsHiddenChange={handleIsHiddenChange}
        />
        <CurrencyInfoTable currencyInfo={toCurrencyInfo}
          isHidden={isHidden}
          handleIsHiddenChange={handleIsHiddenChange} />
      </CarouselWrapper>
      <div style={{ height: '60px' }}></div>
    </>
  )

  return (
    <>
      {
        isHidden ? renderTables : renderTables
      }
    </>
  )
}