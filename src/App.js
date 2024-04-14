import React from 'react'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom';
//sections
import NavigationBar from './components/Header/NavigationBar';
import Home from './components/Home/Home';
import About from './components/About/About';
import TechStack from './components/TechStack/TechStack';
import CurrencyApi from './components/CurrencyApi/CurrencyApi';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Footer from './components/Footer/Footer';
import Alert from './components/Alert/Alert';
//styles
import { useTheme } from "./utils/useTheme";
import './styles/VariablesWarmTheme.css'
import './App.scss';

function App() {
  const theme = useTheme();

  return (
    // <div className={theme}>
    <HashRouter>
      <div className='main-container'>
        <NavigationBar />
        <Alert />
        <section className='data-section' style={{ width: '100%', height: '100%', flexGrow: 1 }}>
          <Routes basename="#">
            <Route path="/currency-converter/currencyapi" element={<CurrencyApi />} />
            <Route path="/currency-converter/techstack" element={<TechStack />} />
            <Route path="/currency-converter/about" element={<About />} />
            <Route path="/" element={<Home />} />
            <Route path="/currency-converter" element={<Home />} />
            <Route path="/currency-converter/*" element={<PageNotFound />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </section>
        <Footer />
      </div>
    </HashRouter>
    // </div>
  );
}

export default App;
