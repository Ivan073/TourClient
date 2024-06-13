import Home from './pages/Home'
import Tours from './pages/Tours'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Header from "./components/Header";


function App() {
  return (
    <div>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
      <Routes>
        <Route path="/tours" element={<Tours/>}/>
      </Routes>
    </BrowserRouter>
    </div> 
  );
}

export default App;
