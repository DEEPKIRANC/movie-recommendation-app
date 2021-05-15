import React,{useState,useEffect,useContext} from 'react'
import {DataContext} from "../hooks/DataProvider";
import VisibilityIcon from '@material-ui/icons/Visibility';
import DeleteIcon from '@material-ui/icons/Delete';
import DoneIcon from '@material-ui/icons/Done';
import "../styles/playlist.css";
const IMAGE_PATH="https://image.tmdb.org/t/p/original/";
function MyPlayList() {
    const [,
        ,
        ,
        ,
        ,
        ,
        myMovies,
        setMyMovies]=useContext(DataContext);
    const [toggleStatus,setToggleStatus]=useState(true);
    useEffect(()=>{
        const movieList=JSON.parse(localStorage.getItem("myMovies") || "[]");
        console.log(movieList);
        if(movieList.length>0)
        {
            setMyMovies(movieList);
        }
    },[])


    const deleteItem=(id)=>{
          let ans=window.confirm("Do You want to delete this movie from playlist..?");
          if(ans)
          {
          const filteredMovieList=myMovies.filter(m=>m.id!==id);
          setMyMovies(filteredMovieList);
          localStorage.setItem("myMovies",JSON.stringify(filteredMovieList));
          } 
        }

    const updateStatus=(id)=>{
        const updatedMovieList=myMovies.map(m=>{
            if(m.id===id)
            {
                return {
                    ...m,watch_status:"Completed"
                }
            }
            else
            {
                return m;
            }
        })
        setMyMovies(updatedMovieList);
        localStorage.setItem("myMovies",JSON.stringify(updatedMovieList));
    }    
    return (
        <div className="parent__div">
            <h3>My Playlist</h3>
            <div className="watchstatus" >
                <span onClick={()=>setToggleStatus(true)}>To Watch</span>
                <span onClick={()=>setToggleStatus(false)}>Watched</span>
            </div>
            <div className="movies__div">
            {toggleStatus && myMovies.length>0 && myMovies.filter(ml=>ml.watch_status==="Queued").map(m=>(
                <div className="movies__card">
                     <img src={`${IMAGE_PATH}${m.poster}`} alt="No Poster" />
                     <h3>{m.title}</h3>
                     <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"1rem",width:"100%"}}>
                     <VisibilityIcon onClick={()=>updateStatus(m.id)} style={{color:"var(--secondary-text-color)",cursor:"pointer"}}/>
                     <DeleteIcon onClick={()=>deleteItem(m.id)} style={{color:"var(--secondary-text-color)",cursor:"pointer"}}/>   
                     </div>
                </div>
            ))
            
            }  
            {!toggleStatus && myMovies.length>0 && myMovies.filter(ml=>ml.watch_status==="Completed").map(m=>(
                <div className="movies__card">
                     <img style={{filter:"contrast(30%)"}} src={`${IMAGE_PATH}${m.poster}`} alt="No Poster" />
                     <h3>{m.title}</h3>
                     <div style={{display:"flex",justifyContent:"space-evenly",marginTop:"1rem",width:"100%"}}>
                        <DoneIcon style={{color:"var(--secondary-text-color)",cursor:"pointer"}}/>
                     <DeleteIcon onClick={()=>deleteItem(m.id)} style={{cursor:"pointer",color:"var(--secondary-text-color)"}}/>   
                    </div>
                </div>
            ))
            }
            {myMovies.length===0 && <h2>There are no movies in your playlist ! Start adding..</h2>}
            </div>
        </div>
    )
}

export default MyPlayList
