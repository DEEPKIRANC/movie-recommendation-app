import React,{forwardRef} from 'react'
import "../styles/movietile.css"

const IMAGE_PATH="https://image.tmdb.org/t/p/original/";

const MovieTile=forwardRef((props,ref)=> {
    
    
   // console.log(props.movie.backdrop_path);
    
    return (
        <div ref={ref} className="movie__card">
            <img className="movie__bg" src={`${IMAGE_PATH}${props.movie.backdrop_path || props.movie.poster_path}`} />

        </div>
    )
}
)
export default MovieTile
