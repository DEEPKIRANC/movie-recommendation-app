import React,{useState,createContext} from 'react'
import requests from "../requests"; 
const DataContext=createContext(); 

function DataProvider(props) {
    const [selectedGenre,setSelectedGenre]=useState(requests.fetchTrending);
    const [theme,setTheme]=useState(false);
    const [movieId,setMovieId]=useState("");
    return (
    <DataContext.Provider value={[selectedGenre,setSelectedGenre,theme,setTheme,movieId,setMovieId]}>
        {props.children}
    
    </DataContext.Provider>
        
            
        
    )
}

export {DataContext,DataProvider}
