import React,{useState,useEffect,useContext} from 'react'
import axios from "../axios";
import MovieTile from "./MovieTile";
import {DataContext} from "../hooks/DataProvider";
import FlipMove from "react-flip-move";
import "../styles/home.css";

function HomePage() {
    const [movies,setMovies]=useState([]);
    const [selectedGenre,setSelectedGenre]=useContext(DataContext);
    useEffect(()=>{
        const getData=async()=>{
            const response=await axios.get(selectedGenre);
            console.log(response.data);
            setMovies(response.data.results);
        }
        getData();
    },[selectedGenre])

    return (
        <div className="results">
            <FlipMove>
            {movies.length>0 && movies.map(movie=>(
                <MovieTile movie={movie}/>
            ))}
            </FlipMove>
        </div>
    )
}

export default HomePage
