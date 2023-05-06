import React from "react";
import './Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
function Search(){
    return(
        <>
        <form className="searchBar">
             <input type="text" className="searchInput" placeholder="Search for Books,Novels and Journals" />
             <button type="submit" className="searchButton">
             <FontAwesomeIcon icon={faSearch} />

             </button>
        </form>
        </>
    );
}

export default Search;