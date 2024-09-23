import React from 'react'
import "./Navbar.css"
import logo from '../../assets/img/logo.jpg';
import CartWidget from '../CartWidget/CartWidget';
import {NavLink} from "react-router-dom"

const Navbar = () => {
    return (
        <div className='Encabezado'>
            <img src={logo} alt="" />
            <nav className='Navbar'>
                <ul>
                    <li><NavLink to="/" className="link" activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/categoria/Coffee" className="link" activeClassName="active">Coffee</NavLink></li>
                    <li><NavLink to="/categoria/Dulces" className="link" activeClassName="active">Dulces</NavLink></li>
                    <li><NavLink to="/categoria/Salados" className="link" activeClassName="active">Salados</NavLink></li>
                </ul>
            </nav>
            <CartWidget/>
        </div>
    )
}

export default Navbar