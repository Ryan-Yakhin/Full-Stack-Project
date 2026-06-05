import react from 'react';
import reactDom from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import {Route, Routes} from 'react-router-dom';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Footer from './pages/Footer'
import Player from './pages/Player'
import Contact from './pages/Contact'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player" element={<Player />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
      <Footer />
  </StrictMode>
)
