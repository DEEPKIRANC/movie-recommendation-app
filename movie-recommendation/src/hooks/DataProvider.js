import React,{useState,createContext} from 'react'
import requests from "../requests"; 
const DataContext=createContext(); 



function DataProvider(props) {
    const [selectedGenre,setSelectedGenre]=useState(requests.fetchTrending);
    const [theme,setTheme]=useState(false);
    const [movieId,setMovieId]=useState(0);
    const [myMovies,setMyMovies]=useState([]);


    return (
    <DataContext.Provider value={[selectedGenre,
    setSelectedGenre,
    theme,
    setTheme,
    movieId,
    setMovieId,
    myMovies,
    setMyMovies]}>
        {props.children}
    
    </DataContext.Provider>
        
            
        
    )
}

export {DataContext,DataProvider}
