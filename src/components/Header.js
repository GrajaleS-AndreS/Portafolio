import { NavLink } from "react-router-dom";
import '../styles/Header.css';

function Logo() {
    return (
        <div className='logo'>
            <img src='logoBlanco.png' alt='LOGO'/>
        </div>
    );
}

function Navbar() {
    return (
        <nav className="Navbar">
            <ul className="nav_items">
                <li><NavLink to='/'> Inicio </NavLink></li>
                <li><NavLink to='/function'> Funciones </NavLink></li>
                <li><NavLink to='/api'> API </NavLink></li>
            </ul>
        </nav>
    );
}

export default function Header() {
    return (
        <header className='Header'>
            <Logo/>
            <Navbar />
        </header>
    );
}
