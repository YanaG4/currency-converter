import React, { useEffect } from 'react'
//sections
import NavigationBar from './components/Header/NavigationBar';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
//styles
import { useTheme } from "./utils/useTheme";
import './styles/VariablesWarmTheme.css'
import './App.scss';

function App() {
  const theme = useTheme();

  return (
    <div className={theme}>
      <div className='nav-header-full-width'></div>
      <section className='body-section'>
        <div className='main-container'>
          <NavigationBar />
          <Home />
          <Footer />
        </div>
      </section>
    </div>
  );
}

export default App;
