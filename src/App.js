import Home from './pages/Home'
import Tours from './pages/Tours'
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';



function App() {
  return (
    <div>
    <Header/>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/tours" element={<Tours/>}/>
        <Route path="/tours/:selected_country" element={<Tours/>}/>
      </Routes>
    </BrowserRouter>
    </div> 
  );
}

export default App;
