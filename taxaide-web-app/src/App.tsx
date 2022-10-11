import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Individual from './views/Individual/Individual';
import Business from './views/Business/Business';

const App  = () => {
  return (

    <>
    
      <BrowserRouter >
        <NavBar />
        <Routes>
              <Route path="/" element={<Individual />} />
              <Route path="business" element={<Business />} />
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
