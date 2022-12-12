

import React, {useContext, useState} from 'react'
import { GlobalState } from '../../GlobalState'
import Menu from '../headers/icon/bars-solid.svg'
import Cart from '../headers/icon/shopping-cart.svg'
import  close from '../headers/icon/circle-xmark-solid.svg'
import  admin from '../headers/icon/lock-solid.svg'
import { Link } from 'react-router-dom'
import axios from 'axios'


function Header() {
    const states = useContext(GlobalState)
    console.log(states)
   
    const [isLogged]= states.UserAPI.isLogged
    const [isAdmin]= states.UserAPI.isAdmin
    const [cart] = states.UserAPI.Cart
    const [menu, setMenu] = useState(false)


    const logoutUser = async () =>{
        await axios.get('/user/logout')
        
        localStorage.removeItem('firstLogin')
        
        window.location.href = "/";
    }

    const adminRouter = () =>{
        return(
            <>
                <li><Link to="/create_product">Create Product</Link></li>
                <li><Link to="/category">Categories</Link></li>
            </>
        )
    }

    const loggedRouter = () =>{
        return(
            <>
                <li><Link to="/history">History</Link></li>
                <li><Link to="/" onClick={logoutUser}>Logout</Link></li>
            </>
        )
    }


    const styleMenu = {
        left: menu ? 0 : "-100%"
    }

    return (
        <header>
            <div className="menu" onClick={() => setMenu(!menu)}>
                <img src={Menu} alt="" width="30" />
            </div>

            <div className="logo">
                <h1>
                    <Link to="/">{isAdmin ? 'Admin' : 'DevAT Shop'}</Link>
                </h1>
            </div>

            <ul style={styleMenu}>
                <li><Link to="/">{isAdmin ? 'Products' : 'Shop'}</Link></li>

                {isAdmin && adminRouter()}

                {
                    isLogged ? loggedRouter() : <li><Link to="/login">Login ✥ Register</Link></li>
                }

                <li onClick={() => setMenu(!menu)}>
                    <img src={close} alt="" width="30" className="menu" />
                </li>

            </ul>

            {
                isAdmin ? '' 
                :<div className="cart-icon">
                    <span>{cart.length}</span>
                    <Link to="/cart">
                        <img src={Cart} alt="" width="30" />
                    </Link>
                </div>
            }
            
        </header>
    )
}

export default Header