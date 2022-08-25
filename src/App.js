import './styles/VariablesWarmTheme.css'
import './App.scss';
import Converter from './Converter/Converter';
import NavigationBar from './Header/NavigationBar';
import Header from './Header/Header'
import { useTheme } from "./utils/useTheme";
import React, { useEffect, useState } from 'react'

function App() {
  const theme = useTheme();

  return (
    <div className={theme}>
      <div className='nav-header-full-width'></div>
      <section className='body-section'>
        <div className='main-container'>
          <NavigationBar />
          <Header />
          <Converter />
          <div className='data-container text-container'>
            <div className='text'>
              <strong>Beyond the Wall of Sleep
                <br /><br />By H. P. Lovecraft</strong>
              <br /><br />I have frequently wondered if the majority of mankind ever pause to reflect upon the occasionally titanic significance of dreams, and of the obscure world to which they belong. Whilst the greater number of our nocturnal visions are perhaps no more than faint and fantastic reflections of our waking experiences—Freud to the contrary with his puerile symbolism—there are still a certain remainder whose immundane and ethereal character permits of no ordinary interpretation, and whose vaguely exciting and disquieting effect suggests possible minute glimpses into a sphere of mental existence no less important than physical life, yet separated from that life by an all but impassable barrier. From my experience I cannot doubt but that man, when lost to terrestrial consciousness, is indeed sojourning in another and uncorporeal life of far different nature from the life we know; and of which only the slightest and most indistinct memories linger after waking. From those blurred and fragmentary memories we may infer much, yet prove little. We may guess that in dreams life, matter, and vitality, as the earth knows such things, are not necessarily constant; and that time and space do not exist as our waking selves comprehend them. Sometimes I believe that this less material life is our truer life, and that our vain presence on the terraqueous globe is itself the secondary or merely virtual phenomenon.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
