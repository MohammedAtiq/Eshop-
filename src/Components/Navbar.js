import React, { useState } from 'react'

import './Navbar.css'
import { FaShoppingBag,  FaRegTimesCircle } from "react-icons/fa";
import { Link, NavLink } from 'react-router-dom'
import { useCart } from 'react-use-cart';
import { IoIosList } from "react-icons/io";


const Navbar = () => {
    const [addClass, setAddClass] = useState(true)

    const {
        isEmpty,
        totalItems,
    } = useCart()

    return (
        <>
            <div className="header">
                <Link to="/" className="logo">E<span>shop</span></Link>
                <div>
                    <ul className={addClass ? 'nav2' : 'nav2 active'}>
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/Product">Categorie</NavLink></li>
                        <li><NavLink to="/Contact">Contact</NavLink></li>
                        <li><NavLink to="/LogIn">Log In</NavLink></li>
                        <Link to="/ShopCart"><li className="beg"><FaShoppingBag /></li></Link>{!isEmpty && <span style={{fontSize:'15px',color:'black'}}>({totalItems})</span>}
                        <i className="close" onClick={() => setAddClass(true)}><FaRegTimesCircle /></i>
                    </ul>
                </div>
                <div className="mobile">
                    <Link to="/ShopCart"><i><FaShoppingBag /></i></Link>{!isEmpty && <span style={{fontSize:'15px',color:'black'}}>({totalItems})</span>}
                    <i className="bar" onClick={() => setAddClass(false)}><IoIosList /></i>
                </div>
            </div>

        </>
    )
}

export default Navbar
