import React from 'react'
import './TechStack.css'

import JS from '../../assets/icons/technologies/JS_white.png'
import react from '../../assets/icons/technologies/React_white.png'
import css from '../../assets/icons/technologies/css_white.png'
import jsx from '../../assets/icons/technologies/jsx_white.png'
import redux from '../../assets/icons/technologies/Redux_white.png'
import axios from '../../assets/icons/technologies/Axios_white.png'
import mui from '../../assets/icons/technologies/MUI_white.png'
import swiper from '../../assets/icons/technologies/swiper_white.png'

export default function TechStack() {
    return (
        <div className='text-page tech-stack-page'>
            <h1>Tech Stack</h1>
            <h2>
                <div><img src={JS} alt="" className='logo' /></div>
                JS(ES6+)</h2>
            This whole project is written in JavaScript.
            <h2>
                <div><img src={react} alt="" className='logo' /></div>
                React</h2>
            I used React.js to create an interactive UI.
            I followed the best React development practices, such as:
            <ul>
                <li>Keeping the components small and specific;</li>
                <li>Making components as reusable as possible (DRY code);</li>
                <li>Actually, reusing those components;</li>
                <li>I kept the folder structure neat and clean and gave thoughtful names;</li>
                <li>I avoided redundancy in tags and comments, and in general, I aim to keep the code clean, readable and easy to maintain.</li>
            </ul>

            <div className='subheader-container'><span className='subheader'>React Router DOM</span></div>
            Multipage functionality implemented with React Router DOM.
            <div className='subheader-container'><span className='subheader'>React Hooks</span></div>
            This project utilizes UseState, useRef & useEffect.
            <div className='subheader-container'><span className='subheader'>Custom Hooks</span></div>
            I created my own hooks. For example, there is 'useWindowSize', which is frequently used inside components to determine which version of
            a page to render (mobile or desktop).
            All of the custom hooks are located inside the 'utils' folder.
            <div className='subheader-container'><span className='subheader'>use-dark-mode</span></div>
            It's a custom hook package that allows you to set up a dark mode on the website.

            <h2>
                <div><img src={css} alt="" className='logo' style={{ width: 'auto', height: '30px' }} /></div>
                CSS & SCSS & MUI theme</h2>
            For styling, I use mainly CSS and sometimes SCSS. And for the styling of MUI components, I used the custom MUI theme.
            Technologies used:

            <div className='subheader-container'><span className='subheader'>Media Queries</span></div>
            For making a screen adaptive design.
            <div className='subheader-container'><span className='subheader'>Animations</span></div>
            For responsiveness and design features.
            <div className='subheader-container'><span className='subheader'>Mixin</span></div>
            For code reusing (more precisely for color switching).
            <div className='subheader-container'><span className='subheader'>Variables</span></div>
            For making code clearer.
            <div className='subheader-container'><span className='subheader'>Custom MUI theme</span></div>
            For styling the MUI components.
            <h2>
                <div><img src={jsx} alt="" className='logo' /></div>
                HTML5 & JSX</h2>
            Inside the React app, the markup was written in JSX.

            <h2>
                <div><img src={redux} alt="" className='logo' /></div>
                Redux</h2>
            I used the Redux library for state management.

            <div className='subheader-container'><span className='subheader'>Redux Toolkit</span></div>
            Redux Toolkit makes it easier to use Redux.
            <div className='subheader-container'><span className='subheader'>Redux AsyncThunk</span></div>
            AsyncThunk is used in async operations such as data fetching.
            <div className='subheader-container'><span className='subheader'>Async Dispatch Chaining</span></div>
            Some of the dispatches in this project have a tightly-coupled sequence of calls. To make them work together properly, I used dispatch chaining.
            <div className='subheader-container'><span className='subheader'>Immutability</span></div>
            Immutability is essential in writing JS code, especially in React, but in this project, this concept shines inside the extra reducers' state management.

            <h2>
                <div><img src={axios} alt="" className='logo' /></div>
                Axios</h2>
            Axios is used for data fetching.
            <h2>
                <div><img src={mui} alt="" className='logo' /></div>
                MUI</h2>
            In this project, MUI helped me to create complex components easier and faster. Even though I tried to use it rarely here for learning purposes,
            sometimes avoiding MUI might be too inefficient. Thus I used the following components:

            <div className='subheader-container'><span className='subheader'>Autocomplete</span></div>
            I used it in the currency select dropdown.
            <div className='subheader-container'><span className='subheader'>Input Adornments</span></div>
            Used for displaying the flags
            <div className='subheader-container'><span className='subheader'>Skeleton</span></div>
            I was choosing between a circle progress bar and a skeleton. The latter is more user-friendly and is recommended by modern UX standards, so I decided to go with the MUI Skeleton.
            <div className='subheader-container'><span className='subheader'>ThemeProvider</span></div>
            For being able to customize MUI theme.

            <h2>
                <div><img src={swiper} alt="" className='logo' /></div>
                Swiper</h2>
            Swiper is an easy-to-use slider (carousel) library. I tried a lot of other libraries and even tried to write my own carousel, but eventually,
            I found that Swiper is the better choice in my case, not only because it's quite simple and beautiful out of the box, but it has fewer bugs
            than every other solution that I tried.
            <h2>
                <div><i className="fa fa-line-chart" aria-hidden="true"></i></div>
                Recharts</h2>
            Recharts library is used for chart drawing in this project. It's a pretty simple library with a bunch of powerful features that cover all of
            my needs and even more. Also, the charts created with this library are pretty and quite flexible. I used a LineChart for the quote currency
            to base currency rate fluctuation chart.
        </div>
    )
}
