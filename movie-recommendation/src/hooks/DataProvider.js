import React,{useState,createContext} from 'react'
import requests from "../requests"; 
const DataContext=createContext(); 

function DataProvider(props) {
    const [selectedGenre,setSelectedGenre]=useState(requests.fetchTrending);
    return (
    <DataContext.Provider value={[selectedGenre,setSelectedGenre]}>
        {props.children}
    
    </DataContext.Provider>
        
            
        
    )
}

export {DataContext,DataProvider}
