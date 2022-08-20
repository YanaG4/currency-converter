
import './App.css';
import CurrencyInputFields from './CurrencyInputFields';
import CurrencyOutput from './CurrencyOutput';
import NavigationBar from './NavigationBar';
import React, { useEffect, useState } from 'react'
const BASE_URL = 'https://api.apilayer.com/exchangerates_data/latest'

var myHeaders = new Headers();
myHeaders.append("apikey", process.env.REACT_APP_API_KEY);

var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

function App() {
  const [currencyCode, setCurrencyCode] = useState(['EUR', 'USD', 'JPY'])
  const [fromCurrency, setFromCurrency] = useState(['EUR'])
  const [toCurrency, setToCurrency] = useState(['USD'])
  const [amount, setAmount] = useState(1.00)
  const [exchangeRate, setExchangeRate] = useState(0.7)


  return (
    <>
      <div class='main-container'>
        <NavigationBar />
        <div class='heading-container'>
          <div class='heading-container-text heading-container-main-text'>Currency converter</div>
          <div class='heading-container-text'>Check live foreign currency exchange rates <br />
            With Xe design and exchangeratesapi.io
          </div>
        </div>
        <div class='converter-container'>
          <h1>Currency converter</h1>
          <CurrencyInputFields
            currencyCodes={currencyCode}
            from={fromCurrency}
            to={toCurrency}
            amount={amount}
            onChangeCode={e => setFromCurrency(e.target.value)}
            onChangeAmount={e => setAmount(e.target.value)}
          />
          <CurrencyOutput
            currencyCodes={currencyCode}
            to={toCurrency}
          />
        </div>
        {/* <div class='text-container'>
          <div class='text'>flex-start (default): items are packed toward the start of the flex-direction.
            flex-end: items are packed toward the end of the flex-direction.
            start: items are packed toward the start of the writing-mode direction.
            end: items are packed toward the end of the writing-mode direction.
            left: items are packed toward left edge of the container, unless that doesn’t make sense with the flex-direction, then it behaves like start.</div>
        </div> */}
      </div>
    </>
  );
}

export default App;
