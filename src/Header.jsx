import React from 'react';
import './Header.css';

function Header(){
    return(
        <>
        
        <div className="head">
            <ul className="nav">
                <li > 
                    <a href="/"> 
                    <img src='https://upload.wikimedia.org/wikipedia/en/thumb/4/42/GLA_University_logo.png/180px-GLA_University_logo.png' alt='Your Library Name' style={{ width: '100px', height: '100px' }}/>
                    </a> 
                </li>
                <li> 
                    <a href="/">Home</a> 
                </li>
                <li> 
                    <a href="/Issue">Issue Book</a> 
                </li>
                <li> 
                    <a href="/Mission">Our Mission</a> 
                </li>
                <li className="cta"> 
                    <a href="/signin">Sign In</a> 
                </li>
            </ul>
        </div>
        </>
        
    );
}

export default Header;
