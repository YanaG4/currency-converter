import React from 'react'
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
//sections
import NavigationBar from './components/Header/NavigationBar';
import Home from './components/Home/Home';
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
