import React,{forwardRef,useContext} from 'react'
import "../styles/movietile.css"
import StarRateIcon from '@material-ui/icons/StarRate';
import {DataContext} from "../hooks/DataProvider";
import {Link} from "react-router-dom";
const IMAGE_PATH="https://image.tmdb.org/t/p/original/";

const MovieTile=forwardRef((props,ref)=> {
    const [,,,,movieId,setMovieId]=useContext(DataContext);
    
   // console.log(props.movie.backdrop_path);
    
    return (
    <Link to="/moviedetail">
        <div ref={ref} className="movie__card" >
           
                <img className="movie__bg" src={`${IMAGE_PATH}${props.movie.backdrop_path || props.movie.poster_path}`} onClick={()=>setMovieId(props.movie.id)} />
           
            <div className="movie__info">
                <h3>{props.movie.original_title || props.movie.title}</h3>
                <span>
                    <span><StarRateIcon style={{color:"#f9d71c",display:"inline-block",verticalAlign:"middle"}} /></span>
                    <span className="rating">{props.movie.vote_average}</span>
                </span>
            </div>    
        </div>
    </Link>
    )
}
)
export default MovieTile
