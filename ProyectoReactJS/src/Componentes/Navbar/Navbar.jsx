import React from 'react'
import "./Navbar.css"
import logo from '../../assets/img/logo.jpg';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <div>
            <img src={logo} alt="" />
            <nav className='Navbar'>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Menú</a></li>
                    <li><a href="#">Nosotros</a></li>
                    <li><a href="#">Reserva</a></li>
                    <li><a href="#">Take Away</a></li>
                </ul>
            </nav>
            <CartWidget/>
        </div>
    )
}

export default Navbar