import React,{useState,useEffect} from "react";

import './App.css';

function App() {

const [movies,setMovies]=useState([]);
const [loading,setLoading]=useState(true);
const [page,setPage]=useState(1);

const handleScroll=(e)=>{

  const {scrollTop, clientHeight, scrollHeight}=e.currentTarget;
  console.log("scrolltop : ",scrollTop, "clientheight: ",clientHeight," scrollheight: ",scrollHeight);
  if(scrollHeight - scrollTop === clientHeight)
  {
    setPage(prev=>prev+1);
  }
}
useEffect(()=>{
  const func=async()=>{
    setLoading(true);
    const result=await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&page=${page}&api_key=${process.env.REACT_APP_SECRET_KEY}`)
    const data=await result.json();
    console.log(data.results);
    setMovies((prev)=>[...prev,...data.results]);
    setLoading(false);
  }
  func();
},[page])
 
  return (
    <div className="App">
      <div className="parent" onScroll={(e)=>handleScroll(e)}>
      {movies?.map((movie,index)=>
      (
        <div key={index}>
          <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} className="poster" alt="No poster"/> 
        </div>
      )
      )
      }
      {loading && <div>Loading ....</div>}
      </div>    
    </div>
  );
}

export default App;
