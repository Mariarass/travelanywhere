import React, {useEffect} from 'react';

import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import About from "./components/About/About";
import Tour from "./components/Tour/Tour";
import Header from "./components/UI/Header/Header";
import Ticket from "./components/Ticket/Ticket";
import Footer from "./components/UI/Footer/Footer";
import PageItemTour from "./components/PageItemTour/PageItemTour";

export const PATH = {
    ABOUT: '/about',
    TOUR: '/tour',
    TICKET: '/ticket',
    CARD: '/card',
}

function App() {
    useEffect(() => {

    })
    useEffect(() => {
        console.log(document.documentElement.clientHeight)
        window.addEventListener('scroll', e => {
            document.documentElement.style.setProperty('--scrollTop', `${window.scrollY}px`) // Update method
        })

    },)
    return (

        <div>
            <Header/>


            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.ABOUT}/>}/>
                <Route path={PATH.ABOUT} element={<About/>}/>
                <Route path={PATH.TOUR} element={<Tour/>}/>
                <Route path={PATH.TICKET} element={<Ticket/>}/>
                <Route path={PATH.CARD} element={<PageItemTour/>}/>


            </Routes>
            <Footer/>

        </div>


    );
}

export default App;
