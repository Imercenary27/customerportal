
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NavbarStyle } from './Landing';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavbarStyle/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
