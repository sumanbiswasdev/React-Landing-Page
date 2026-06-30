import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AllComponentes from './AllComponentes'



createRoot(document.getElementById('root')).render(

  <StrictMode>

   <AllComponentes></AllComponentes>

  </StrictMode>,
)
