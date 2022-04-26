import React from "react";

const MovieList = (props) => {

    const handleclick = (text) => {
        //const url = `http://www.omdbapi.com/?i=${text}&apikey=fc42ed47`;
        //console.log(text);
        props.setCurrentView(text);

         //const response = await fetch(url);
         //const responsejson = await response.json();

        //console.log(responsejson);
    }
    return (
        <>
        {
            props.movies.map((movie, index) => (
                <>
                <li key={index} className="m-list" onClick={() => handleclick(movie.imdbID)}>
                    <div className="movielist"><img className="thumbnail" src={movie.Poster} alt ="movie"></img></div>
                    <div className="movieList">
                    {movie.Title}
                    <div className="lightgrey"><i>{movie.Year}</i></div>
                    </div>
                </li>
                <hr></hr>
                </>
            ))
        }
        </>
    )
}


export default MovieList;