import "./App.css";
import { getMoviesList,  cariMovies} from "./Api";
import { useEffect,useState } from "react";
const App = () => {

  const [listMovies,setListMovies] = useState([]);

  useEffect(()=>{
    getMoviesList().then((result)=>{
      setListMovies(result)
    })
  },[])


  const searchMovies = async(q)=>{
    if(q.length>3){
      let getMovie = await cariMovies(q);
      if(getMovie.results.poster_path === null) return;
      setListMovies(getMovie.results)
    }
  }

  const ShowListMovies = ()=>{
     return listMovies.map((movie,index)=>{
      return (
       <div className="Movie-wrapper" key={index}>
            <div className="Movie-title">{movie.title}</div>
            <img  className="Movie-image" src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt="poster"/>
            <div className="Movie-release">{movie.release_date}</div>
            <div className="Movie-rating">{movie.vote_average}</div>
          </div>
      )
     }
     )
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cinewatch 🎬</h1>
        <input type="text" placeholder="Search your fav movie ..." className="Movie-search" onChange={({target})=>searchMovies(target.value)}  />
        <div className="Movie-container">
         <ShowListMovies />
        </div>
      </header>
    </div>
  );
}

export default App;
