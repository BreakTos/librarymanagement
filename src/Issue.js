import React from "react";
import './Issue.css';
import './Search';
import Search from "./Search";
import './Form';
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