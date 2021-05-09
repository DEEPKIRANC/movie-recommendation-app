import React,{useState,useEffect} from "react";

import './App.css';

function App() {

const [movies,setMovies]=useState([]);  
useEffect(()=>{
  const func=async()=>{
    const result=await fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_SECRET_KEY}`)
    const data=await result.json();
    setMovies(data.results);
    console.log(data.results);
  }
  func();
},[])
 
  return (
    <div className="App">
      {movies.length>0 ? movies.map((movie,index)=>
      (
        <div key={index}>
        <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt="No poster"/>  
        <h1>{movie.original_title} : {movie.vote_average}</h1>
        </div>
      )
      )
:<div>Loading ....</div>}
    </div>
  );
}

export default App;
