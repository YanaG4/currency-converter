
import './App.css';
import CurrencyFields from './CurrencyFields';
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
  const [currencyCode, setCurrencyCode] = useState([])
  const [fromCurrency, setFromCurrency] = useState()
  const [toCurrency, setToCurrency] = useState()
  const [amount, setAmount] = useState(1)
  const [exchangeRate, setExchangeRate] = useState()



  return (
    <div class='container'>
      <h1>Currency converter</h1>
      <CurrencyFields
        currencyCodes={currencyCode}
        selectedCurrency={fromCurrency}
        amount={1}
      />
      <button className='change'><i class="gg-arrows-exchange-alt-v"></i></button>

      <CurrencyFields
        currencyCodes={currencyCode}
        selectedCurrency={toCurrency}
      />
    </div>
  );
}

export default App;
