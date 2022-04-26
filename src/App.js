import { useState, useEffect} from 'react';
import './App.css';
import MovieList from './components/MovieList';
import Searchbar from './components/Searchbar';
import Rightside from './components/Rightside';

function App() {

  const [movies, setMovies] = useState([]);
  const [entries, setEntries] = useState();
  const [searchVal, setSearchval] = useState("");
  const [currentview, setCurrentView] = useState();


  const getMovieRequest = async (searchVal) => {
    const url =  `http://www.omdbapi.com/?s=${searchVal}&apikey=fc42ed47`;

    const response = await fetch(url);
    const responsejson = await response.json();
    
    if (responsejson.Search) {
      setMovies(responsejson.Search);
      setEntries(responsejson.totalResults);
      setCurrentView(responsejson.Search[0].imdbID);
    }
    
  }
  useEffect(() => {
    getMovieRequest(searchVal);
  }, [searchVal])

  

  return (
    <div className="App">
      
      <Searchbar searchVal={searchVal} setSearchval={setSearchval}></Searchbar>
      <div className="row">
        <div className="leftside">
          <p id="leftentries">{entries} RESULTS</p>
          <MovieList movies={movies} setCurrentView={setCurrentView}/>
        </div>
        <div className="rightside">
          {searchVal ? <Rightside data={currentview}/> : null}
          
        </div>
      </div>
    </div>
  );
}

export default App;
