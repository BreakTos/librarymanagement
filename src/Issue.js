import React from "react";
import './Issue.css';
import './Search';
import Search from "./Search";
import './Form';
import { FaTelegram, FaDiscord,FaGoodreads } from 'react-icons/fa';
import Form from './Form';
function Issue(){
    return(
        <>
        <div className="Blocks">
            
            <div className="readOnline">
                <center className="text">
                    Search Online Database
                </center>
            <Search />
            <br/>
            <div className="boldTxt">
                    Join Gla Book Club
            </div>

            <div style={{marginLeft:"240px", fontSize:"20px"}}><FaTelegram/> <FaDiscord/> <FaGoodreads/></div>
            <br/><br/>
            <hr className="bold"></hr>

            "Books are no more threatened by Kindle than stairs by elevators." 
            <br/> <div className="atend" style={{marginLeft:'360px',fontFamily:"sans-serif"}}>- Stephen Fry </div>
            
            <hr className="bold"></hr>
            </div>
            <div className="takeHome">
            <center className="text">
                    Search Offline Library
                </center>
            <Search />    
            <Form />
            </div>
        </div>
        </>
    );
}
export default Issue;