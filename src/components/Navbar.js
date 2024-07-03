import React,{useState,useEffect,useRef} from 'react';
import logomain from '../assets/logomain.jpg';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import { FaBars } from "react-icons/fa";

function Navbar() {

  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  const toggleButtonRef = useRef(null);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };
    const closeMenu = () => {
      setShowMenu(false);
    };
    
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (menuRef.current && 
          !menuRef.current.contains(event.target) && 
          toggleButtonRef.current && 
          !toggleButtonRef.current.contains(event.target)
        ) {
          closeMenu();
        }
      };
  
      if (showMenu) {
        document.addEventListener('click', handleClickOutside);
      } else {
        document.removeEventListener('click', handleClickOutside);
      }
  
      return () => {
        document.removeEventListener('click', handleClickOutside);
      };
    }, [showMenu]);

    useEffect(() => {
      const handleScroll = () =>{
        if (showMenu) {
          closeMenu();
        }
      };

      window.addEventListener('scroll',handleScroll);

      return() => {
        window.removeEventListener('scroll',handleScroll);
      };
    }, [showMenu]);

    
  return (
      <div className='navbar'>
      <div className='leftside'>
        <Link to = "/">
          <img src= {logomain} alt='Logo'></img>
        </Link>
      </div>
      
       <div ref={toggleButtonRef} className='menuitem' onClick={toggleMenu}><FaBars /></div>
      
       <div ref={menuRef} className={`rightside ${showMenu ? 'active' : ''}`}>
        <Link  to='/' onClick={closeMenu}>Home</Link>
        
        <Link to= '/contact' className='contact' onClick={closeMenu}>Contact us</Link>
      </div>
    </div>
  )
}

export default Navbar;