import React,{useContext, useState,useRef} from 'react'
import "../styles/header.css"
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import ClearIcon from '@material-ui/icons/Clear';
import HomeIcon from '@material-ui/icons/Home';

import { Link } from "react-router-dom";

import {DataContext} from "../hooks/DataProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_KEY=process.env.REACT_APP_SECRET_KEY;
const FETCH_URL="https://api.themoviedb.org/3/";
const IMAGE_PATH="https://image.tmdb.org/t/p/original/";
function Header() {
    const [,,theme,setTheme,movieId,setMovieId]=useContext(DataContext);
    const [searchText,setSearchText]=useState("");
    const [searchResults,setSearchResults]=useState([]);
    const inputRef=useRef();
    const resultRef=useRef();

    
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

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(searchText.trim().length > 0)
        {
            
            const fetchResults=async()=>{
            const res=await fetch(`${FETCH_URL}search/movie?&query=${searchText}&api_key=${API_KEY}`);
            const data=await res.json();
            console.log(data.results);
            setSearchResults(data.results);
            inputRef.current.disabled="disabled";   
            resultRef.current.style.display="block"; 
        }
            fetchResults();
        }   
        else
        {
            toast.error("Please Enter atleast 1 character!");
        } 
       
         
    }

    const handleClick=()=>{
        resultRef.current.style.display="none";
        setSearchText("");
        inputRef.current.removeAttribute("disabled");
    }


    const setSearchMovieDetails=(id)=>{
            setMovieId(id);
            inputRef.current.removeAttribute("disabled");
            resultRef.current.style.display="none";
            setSearchText("");
    }
    return (
        <>
        <div className="main__div">
           <span> MovieVerse </span>
           <form onSubmit={handleSubmit}>
              
               <input ref={inputRef} type="text" id="search_input" value={searchText} onChange={(e)=>setSearchText(e.target.value)} placeholder="Search for movies using keywords...."/>
           </form>  
           <div  ref={resultRef} className="searchResults">
               {searchResults.length>0 && <ClearIcon onClick={handleClick} style={{color:"var(--secondary-text-color)",alignSelf:"flex-end",cursor:"pointer"}}/> }
               {searchResults?.map(res=>(
                   <Link style={{textDecoration:"none"}} to="/moviedetail">
                       <div onClick={()=>setSearchMovieDetails(res.id)} className="search__tile">
                            <img src={`${IMAGE_PATH}${res.backdrop_path || res.poster_path}`} alt="No Poster" />
                            <div className="details">
                                <h4>{res.original_title || res.title}</h4>
                                <h5>{res.release_date}</h5>
                            </div>    
                        </div>
                   </Link>
              ))}     
           </div>
           <div className="header__icons">  
                {theme===false?<WbSunnyIcon onClick={changeTheme} />
                :
                <Brightness4Icon onClick={changeTheme} />}
                <Link to="/myplaylist"><PlaylistPlayIcon style={{marginLeft:"15px"}}/></Link>
                <Link to="/">
                    <HomeIcon style={{marginLeft:"15px"}}/>
                </Link>
                
           </div>
        </div>
        <ToastContainer/>
        </>
    )
}

export default Header
