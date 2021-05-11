import React,{useContext} from 'react'
import "../styles/navbar.css"
import {DataContext} from "../hooks/DataProvider"
import requests from "../requests"
function Navbar() {
    const [selectedGenre,setSelectedGenre]=useContext(DataContext);
    return (
        <div className="navbar__main">

            <h2 onClick={()=>setSelectedGenre(requests.fetchTrending)}>Trending</h2>
            <h2 onClick={()=>setSelectedGenre(requests.fetchTopRated)}>Top Rated</h2>
            <h2 onClick={()=>setSelectedGenre(requests.fetchComedyMovies)}>Comedy</h2>
            <h2 onClick={()=>setSelectedGenre(requests.fetchHorrorMovies)}>Horror</h2>
            <h2 onClick={()=>setSelectedGenre(requests.fetchActionMovies)}>Action</h2>
            <h2 onClick={()=>setSelectedGenre(requests.fetchSciFiMovies)}>Sci-Fi</h2>
            <h2 onClick={()=>setSelectedGenre(requests.fetchMysteryMovies)}>Mystery</h2>
            <h2 onClick={()=>setSelectedGenre(requests.fetchRomanceMovies)}>Romance</h2>
            
     
        </div>
    )
}

export default Navbar
