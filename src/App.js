import React, { useEffect } from 'react'
//sections
import Converter from './components/Converter/Converter';
import NavigationBar from './components/Header/NavigationBar';
import Header from './components/Header/Header'
import MobileSection from './components/MobileSection/MobileSection'
import Footer from './components/Footer/Footer';
import CurrencyInfoSection from './components/CurrencyInfoSection/CurrencyInfoSection';
import CurrencyInfoTables from './components/CurrencyInfoSection/CurrencyInfoTables';
//redux
import { useDispatch } from 'react-redux'
import { fetchCurrencyRates, fetchCurrencyInfo, fetchCurrencyTimeseries } from './features/currency/currencySlice';
//styles
import { useTheme } from "./utils/useTheme";
import './styles/VariablesWarmTheme.css'
import './App.scss';
import CurrencyChart from './components/CurrencyCharts/CurrencyChart';

function App() {
  const theme = useTheme();
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCurrencyInfo())
      .then(() =>
        dispatch(fetchCurrencyRates())
          .then(() =>
            dispatch(fetchCurrencyTimeseries())))
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
          <CurrencyChart />
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default App;
