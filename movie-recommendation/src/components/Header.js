import React from 'react'
import "../styles/header.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="main__div">
           <span> MovieVerse </span>
           <form>
              
               <input type="text" id="search_input" placeholder="Search for movies using keywords...."/>
           </form>  
           <div className="header__icons">  
                <Brightness4Icon  style={{color:"white",cursor:"pointer"}}/>
                <AccountCircleIcon style={{color:"white",marginLeft:"15px",cursor:"pointer"}}/>
           </div>
        </div>
    )
}

export default Header
