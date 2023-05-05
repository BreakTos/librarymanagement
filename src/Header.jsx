import React from 'react';
import './Header.css';
function Header(){
    return(
        <div className="head">
            <ul className="nav">
                <li> Home </li>
                <li> About </li>
                <li> Our Mission </li>
            </ul>
        </div>
    );
}
export default Header;