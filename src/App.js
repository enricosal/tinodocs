import { BrowserRouter } from 'react-router-dom';

import { Routes } from './routes';

import './styles/global.css'
import Header from './Components/Header';


export const App = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes />
    </BrowserRouter>
  )
}