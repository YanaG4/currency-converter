import './styles/VariablesWarmTheme.css'
import './App.scss';
import Converter from './components/Converter/Converter';
import NavigationBar from './components/Header/NavigationBar';
import Header from './components/Header/Header'
import { useTheme } from "./utils/useTheme";
import React, { useEffect, useState } from 'react'
import MobileSection from './components/MobileSection/MobileSection'
import Footer from './components/Footer/Footer';
import CurrencyInfoSection from './components/CurrencyInfoSection/CurrencyInfoSection';
import CurrencyInfoTables from './components/CurrencyInfoSection/CurrencyInfoTables';
import { useSelector, useDispatch } from 'react-redux'
import { fetchCurrencyRates, fetchCurrencyInfo } from './features/currency/currencySlice';

function App() {
  const theme = useTheme();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCurrencyInfo())
      .then(() => dispatch(fetchCurrencyRates()))
  }, [dispatch])
  return (
    <div className={theme}>
      <div className='nav-header-full-width'></div>
      <section className='body-section'>
        <div className='main-container'>
          <NavigationBar />
          <Header />
          <Converter />
          <MobileSection />
          <CurrencyInfoSection />
          <CurrencyInfoTables />
          <CurrencyInfoTables />
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default App;
