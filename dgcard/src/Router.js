import React from 'react';
import About from './About';
import Contact from './Contact';
import Home from './Home';
import { Route,Routes } from 'react-router-dom';

export default function Mycomp() {
    return (
    <>
     <Routes>     
        <Route  path='/'  element={<Home />}/>
        <Route  path='/about' element={<About />} />
        <Route  path='/contact' element={<Contact />} />       
    </Routes>
    </>
    )
}
