import React,{useContext} from 'react'
import "../styles/header.css"
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import SearchIcon from '@material-ui/icons/Search';

import {DataContext} from "../hooks/DataProvider";

function Header() {
    const [,,theme,setTheme]=useContext(DataContext);

    const changeTheme=()=>{
        if(!theme)
        {
            document.documentElement.style.setProperty('--primary-background-color','#F9FAFB');
            document.documentElement.style.setProperty('--primary-text-color','#000');
            document.documentElement.style.setProperty('--secondary-text-color','#333');
            
        }
        else
        {
            document.documentElement.style.setProperty('--primary-background-color','#06202A');
            document.documentElement.style.setProperty('--primary-text-color','#FFFFFF');
            document.documentElement.style.setProperty('--secondary-text-color','#D1D5DB');

            
        }
        setTheme(prev=>!prev);
    }
    return (
        <div className="main__div">
           <span> MovieVerse </span>
           <form>
              
               <input type="text" id="search_input" placeholder="Search for movies using keywords...."/>
           </form>  
           <div className="header__icons">  
                {theme===false?<WbSunnyIcon onClick={changeTheme} />
                :
                <Brightness4Icon onClick={changeTheme} />}
                <AccountCircleIcon style={{marginLeft:"15px"}}/>
           </div>
        </div>
    )
}

export default Header
