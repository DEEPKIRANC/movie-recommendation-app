import React,{useState,useEffect,useContext} from 'react'
import {DataContext} from "../hooks/DataProvider";
import "../styles/moviedetail.css"; 
import StarRateIcon from '@material-ui/icons/StarRate';

const API_KEY=process.env.REACT_APP_SECRET_KEY;
const FETCH_URL='https://api.themoviedb.org/3/movie/';

const IMAGE_PATH="https://image.tmdb.org/t/p/original/";
function MovieDetail() {
    const [,,,,movieId,setMovieId,genreList,]=useContext(DataContext);
    const [movie,setMovie]=useState("");
    const [cast,setCast]=useState([]);
    useEffect(()=>{
      const getMovieDetails=async()=>{
          const res=await fetch(`${FETCH_URL}${movieId}?api_key=${API_KEY}`);
          const data=await res.json();
          
          console.log(data);
          setMovie(data);  
        }
      const getCastDetails=async()=>{
          const res_cast=await fetch(`${FETCH_URL}${movieId}/credits?api_key=${API_KEY}`);
          const res_data=await res_cast.json();
          console.log(res_data.cast);
          setCast(res_data.cast);
      }  
      getMovieDetails();
      getCastDetails();
    },[movieId])
    return (<div>
        <div className="header__section">
            <div className="backdrop">
              <img src={`${IMAGE_PATH}${movie?.poster_path}`} alt="No Poster"/>          
            </div>
            <div className="header__info">
                <div className="top__section">

                    <h2>{`${movie?.original_title}(${movie?.release_date?.substring(0,4)})`}</h2>
                    <span>
                        <span><StarRateIcon style={{color:"#f9d71c",display:"inline-block",verticalAlign:"middle"}} /></span>
                        <span style={{color:"var(--secondary-text-color)",display:"inline-block",verticalAlign:"middle",fontSize:"1.2rem"}}>{`${movie?.vote_average}/10`}</span>
                    </span>    
                </div>

                <div className="mid__section">
                    
                    <span>{`${movie?.release_date} | ${movie?.runtime} mins | `}</span>{movie?.genres?.map(genre=>(<span style={{marginLeft:"10px"}} key={genre.id}>{genre.name}</span>))}
                    <h4>Synopsis</h4>
                    <p>{movie?.overview}</p>
                </div>
                    
            </div>
                
           
        </div>
        <h3 style={{color:"var(--secondary-text-color)",textAlign:"center",marginTop:"1rem"}}>CAST</h3>
        <div className="cast__details">
            {cast?.filter(cas=>cas.order<9).map(ca=>(
                <div className="cast__card">
                    <img src={`${IMAGE_PATH}${ca.profile_path}`} alt="No Poster"/>
                    <h4>{ca?.original_name}</h4>
                    <h5>{ca?.character}</h5>
                </div>    
            ))}
        </div>
     </div>    
    )
}

export default MovieDetail
