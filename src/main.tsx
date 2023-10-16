import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './header/nav'
import './index.css'
import Body from "./body/body"
import Footer from"./footer/footer"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Header />
    <Body />
    <Footer/>
  </React.StrictMode>,
)
