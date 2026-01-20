import { Link } from 'react-router-dom';
import styles from '../styles/Navbar.module.css';
import { Menu, X } from 'lucide-react';
import {useState} from 'react';
function Navbar () {
    const [isOpen, setIsOpen] = useState (false);
    function toggle() {
        setIsOpen(!isOpen);
    }
    return (
        <>
        <nav className={styles.navbar}>
            <Link to='/'> <p className= "display"> Our Blooms</p> </Link>
            <ul className = {styles.ul}>
                
                <li className= "caption1"><Link to='/gallery'> GALLERY </Link>  </li>
                <li className= "caption1"> <Link to='/about'> ABOUT</Link> </li>
                <li className= "caption1"> <a href="mailto:penafieldp8@gmail.com"> CONTACT</a> </li>
            </ul>
        </nav>
        <nav className={styles.mobile_navbar}>
            <Link to='/'> <p className= "display"> O.B.</p> </Link>
            {isOpen? <X onClick={toggle}/> : <Menu onClick={toggle} />}

        </nav>
        {/* This is a classical and gate example. Both parts need to be true to work*/}
        {isOpen && (
            <div> 
                <ul className = {styles.mobile_ul}>
                <li className= "caption1" onClick="toggle"><Link to='/gallery'> GALLERY </Link>  </li>
                <li className= "caption1" onClick="toggle"> <Link to='/about'> ABOUT</Link> </li>
                <li className= "caption1" onClick="toggle"> <a href="mailto:penafieldp8@gmail.com"> CONTACT</a> </li>
                </ul>
            </div>)}
        


        <hr className='divider'/>
        </>
    );
}

export default Navbar;