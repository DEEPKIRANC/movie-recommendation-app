import React,{useEffect,useContext} from 'react'
import {DataContext} from "../hooks/DataProvider";
import requests from "../requests";
import axios from "../axios";
function MovieDetail() {
    const [,,,,movieId,setMovieId]=useContext(DataContext);
   
    useEffect(()=>{
      const checkMovie=async()=>
      {
          if(movieId)
          {
              const res=await axios(`/movie/${movieId}`);
              console.log(res.data);
          }
      }
      checkMovie();
    },[])
    return (
        <div>
                        
        </div>
    )
}

export default MovieDetail
