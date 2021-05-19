import React,{useState,useEffect,useContext} from 'react'
import {DataContext} from "../hooks/DataProvider";
import { Link } from "react-router-dom";
import "../styles/moviedetail.css"; 
import StarRateIcon from '@material-ui/icons/StarRate';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const API_KEY=process.env.REACT_APP_SECRET_KEY;
const FETCH_URL='https://api.themoviedb.org/3/movie/';

const IMAGE_PATH="https://image.tmdb.org/t/p/original/";
function MovieDetail() {
    const [,,,,movieId,setMovieId,myMovies,setMyMovies]=useContext(DataContext);
    const [movie,setMovie]=useState("");
    const [cast,setCast]=useState([]);
    const [similarMovies,setSimilarMovies]=useState([]);
    useEffect(()=>{
        const mymovie=JSON.parse(localStorage.getItem("myMovies"));
        //console.log(mymovie);
        if(mymovie)
        {

          setMyMovies(mymovie);
        }
    },[])
    useEffect(()=>{
      const getMovieDetails=async()=>{
          const res=await fetch(`${FETCH_URL}${movieId}?api_key=${API_KEY}`);
          const data=await res.json();
          
         // console.log(data);
          setMovie(data);  
        }
      const getCastDetails=async()=>{
          const res_cast=await fetch(`${FETCH_URL}${movieId}/credits?api_key=${API_KEY}`);
          const res_data=await res_cast.json();
         // console.log(res_data.cast);
          setCast(res_data.cast);
      }  

      const getSimilarMovieDetails=async()=>{
        const res_similar=await fetch(`${FETCH_URL}${movieId}/recommendations?api_key=${API_KEY}`);
        const data=await res_similar.json();
        
        console.log(data);
        setSimilarMovies(data.results);  
      }

      getMovieDetails();
      getCastDetails();
      getSimilarMovieDetails();
    },[movieId])



    const setMovieDetails=(id)=>{
        setMovieId(id);
        window.scroll({
            top:0,
            behavior:'smooth'
        });
    }


    const addToPlayList=()=>{
        const movieObj={
            id:movieId,
            title:movie.original_title,
            poster:movie.poster_path,
            watch_status:"Queued"
        }
        console.log(movieObj);
        const fetchMovies=JSON.parse(localStorage.getItem("myMovies") || "[]");
        fetchMovies.push(movieObj);
        localStorage.setItem("myMovies",JSON.stringify(fetchMovies));
        setMyMovies(prev=>[...prev,movieObj]);
        
       toast.success("Movie Added to playlist!",{position:"top-right"});
    }

    if(!movie)
    {
        return <div>Loading....</div>
    }
    return (<>
    <div style={{userSelect:"none"}}>
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

                <div className="bottom__section" style={{marginTop:"2rem"}}>
                    {(myMovies?.some(m=>m.id===movieId)) ? 
                    <span style={{display:"block"}}>
                        <span style={{display:"inline-block",verticalAlign:"middle"}}><CheckBoxIcon/></span>
                        <span style={{display:"inline-block",verticalAlign:"middle",color:"var(--secondary-text-color)",fontSize:"1rem"}}>My List</span>
                    </span>    
                     : 
                     <button style={{display:"block",
                     padding:"0.5rem",
                     color:"var(--secondary-text-color)"
                     ,fontFamily:"Nunito",
                     borderColor:"var(--secondary-text-color)",
                     cursor:"pointer"}} onClick={addToPlayList} >
                         Add to Playlist
                     </button>
                     }
                    <span style={{marginTop:"1rem"}}>
                        <span style={{display:"inline-block",verticalAlign:"middle"}}><ArrowBackIcon/></span>
                        <span style={{display:"inline-block",verticalAlign:"middle",fontSize:"1rem"}}>
                            <Link style={{color:"var(--secondary-text-color)",textDecoration:"none"}} to="/">
                                    BACK TO HOME
                            </Link>
                        </span>
                    </span>
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
        <h3 style={{color:"var(--secondary-text-color)",textAlign:"center",marginTop:"2rem"}}>SIMILAR MOVIES</h3>
        <div className="similar__movies">
            {similarMovies.length>0?
                similarMovies.map(movie=>(
                    <div key={movie.id} onClick={()=>setMovieDetails(movie.id)} className="similar__movieCard">
                        <img src={`${IMAGE_PATH}${movie.backdrop_path ||movie.poster_path}`} alt="No Poster" />
                        <h4>{movie.original_title || movie.title}</h4>
                    </div>
                ))
               
                : <div>Loading........</div>

            }
                    
        </div>    
     </div>
     <ToastContainer/>
     </>    
    )
}

export default MovieDetail
