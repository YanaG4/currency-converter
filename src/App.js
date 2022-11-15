import React from 'react'
import {
  BrowserRouter,
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
//styles
import { useTheme } from "./utils/useTheme";
import './styles/VariablesWarmTheme.css'
import './App.scss';

function App() {
  const theme = useTheme();

  return (
    <div className={theme}>
      <BrowserRouter>
        <div className='main-container'>
          <NavigationBar />
          <section className='data-section' style={{ width: '100%', height: '100%', flexGrow: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/currencyapi" element={<CurrencyApi />} />
              <Route path="/techstack" element={<TechStack />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </section>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
