import React,{useEffect} from 'react'
import { BrowserRouter as Router, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import './App.css';
import Scrolltotop from './pages/Scrolltotop';

function App() {
  const RedirectHandler = () => {
  const navigate = useNavigate();
    
  useEffect(() => {
    // Check if there's a redirect query parameter
    const params = new URLSearchParams(window.location.search);
    const redirectPath = params.get('redirect');
    if (redirectPath) {
      navigate(redirectPath, { replace: true });
    }
  }, [navigate]);

  return null;
};
  return (
    <div className='App'>
      <Router>
      <Scrolltotop />
        <Navbar />
        <RedirectHandler />
        <div className='maincontent'>
        <Routes>
          <Route path='/' element = {<Home />}></Route>
          <Route path='/contact' element = {<Contact />}></Route>
          <Route path="*" element={<Navigate to="/" replace />} />

        </Routes>
        </div>
        <Footer />
      </Router>
      
    </div>
  )
}
export default App
