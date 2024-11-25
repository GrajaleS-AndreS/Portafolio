import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Function from './pages/Function';
import Api from './pages/Api';

import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'

export default function App(){
  return <div className='App'>
    <Header/>
    <main className='main'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Function' element={<Function/>}/>
        <Route path='/Api' element={<Api/>}/>
      </Routes>
    </main>
    <Footer/>
  </div>
}
