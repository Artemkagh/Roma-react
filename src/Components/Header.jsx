import React from 'react';
import '../index.css';
import {logo} from '../images'
import { Link } from 'react-router-dom';

function Header(){
    
    const openInNewTab = url => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

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
            <button onClick={() => openInNewTab('https://vk.com/fate_exe')}>ВК</button>
        </div>
        );
}


export default Header;