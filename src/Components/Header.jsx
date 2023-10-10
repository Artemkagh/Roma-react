import React from 'react';
import '../index.css';
import {logo} from '../images'
import { Link } from 'react-router-dom';

function Header(){

    return(
        <div className="header" >
            <Link to="/">
                <button>Главная</button>
            </Link>
            <Link to="/blog">
                <button>Блог</button>
            </Link>
            <img src={logo} alt="logo"/>
            <Link to="/historysuccess">
                <button>История успеха</button>
            </Link>
            <button>ВК</button>
        </div>
        );
}


export default Header;