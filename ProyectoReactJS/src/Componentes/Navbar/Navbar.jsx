import React from 'react'
import "./Navbar.css"
import logo from '../../assets/img/logo.jpg';
import CartWidget from '../CartWidget/CartWidget';
import {Link, NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <div className='Encabezado'>
            <img src={logo} alt="" />
            <nav className='Navbar'>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/categoria/Coffee">Coffee</Link></li>
                    <li><Link to="/categoria/Dulces">Dulces</Link></li>
                    <li><Link to="/categoria/Salados">Salados</Link></li>
                </ul>
            </nav>
            <CartWidget/>
        </div>
    )
}

export default Navbar