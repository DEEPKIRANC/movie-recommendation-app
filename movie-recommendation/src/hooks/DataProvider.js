import React,{useState,createContext} from 'react'
import requests from "../requests"; 
const DataContext=createContext(); 

function DataProvider(props) {
    const [selectedGenre,setSelectedGenre]=useState(requests.fetchTrending);
    const [theme,setTheme]=useState(false);
    return (
    <DataContext.Provider value={[selectedGenre,setSelectedGenre,theme,setTheme]}>
        {props.children}
    
    </DataContext.Provider>
        
            
        
    )
}

export {DataContext,DataProvider}
