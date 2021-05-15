import React,{useEffect,useContext} from 'react'
import {DataContext} from "../hooks/DataProvider";

function MyPlayList() {
    const [myMovies,setMyMovies]=useContext(DataContext);
    useEffect(()=>{
        const movieList=JSON.parse(localStorage.getItem("myMovies"));
        if(movieList)
        {
            setMyMovies(movieList);
        }
    },[])
    return (
        <div>
            <h1>Hello Hello 123....</h1>
        </div>
    )
}

export default MyPlayList
