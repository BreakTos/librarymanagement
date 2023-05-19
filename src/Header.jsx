import React from 'react';
import './Header.css';

function Header(){
    return(
        <>
        
        <div className="head">
            <ul className="nav">
            <li> 
    <a href="/" style={{marginRight: '600px', marginLeft:'40px'}}> 
        <img src='https://upload.wikimedia.org/wikipedia/en/thumb/4/42/GLA_University_logo.png/180px-GLA_University_logo.png' alt='Your Library Name' style={{width: '60px', height: '70px'}}/>
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
                    <a href="/Login">Sign In</a> 
                </li>
            </ul>
        </div>
        </>
        
    );
}

export default Header;
