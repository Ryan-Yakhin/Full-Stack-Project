import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import AppRoutes from './routes/AppRoutes.jsx'
import { StrictMode } from 'react'
import './index.css'

import {Toaster} from "react-hot-toast";

ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <AppRoutes />
      < Toaster position='top-right' reverseOrder={false} />
    </BrowserRouter>
  </StrictMode>,
)
