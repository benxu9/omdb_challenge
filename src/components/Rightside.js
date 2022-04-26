import React, { useState, useEffect } from "react";

function Rightside(props) {
    const [t1, t2] = useState({});
    const [ratings, setRatings] = useState([]);

    useEffect(() => {
        getminfo(props);
    }, [props.data])

    async function getminfo(props) {
        const url = `http://www.omdbapi.com/?i=${props.data}&apikey=fc42ed47`;
                    const response = await fetch(url);
                    const responsejson = await response.json();
                    console.log(responsejson.Title);
                    if (responsejson.Title) {
                        t2(responsejson);
                        setRatings(responsejson.Ratings);
                    }
                    
                    console.log(t1);
                    console.log(ratings);
    }

    return (
        <>
        <div className="titletop">
            <img className="poster" src={t1.Poster} alt="poster"></img>
            <div id="info">
            <h2 id="infotitle">{t1.Title}</h2>
            <div className="rating"><span id = "rated">{t1.Rated}</span>
            <span id="italics"><em>{t1.year} {t1.Genre} {t1.Runtime}</em></span></div>
            <div id="actors">{t1.Actors}</div>
            </div>
        </div>
        <div id="summary">
            <div id="plotcentre">
            <p id= "plotsummary">{t1.Plot}</p>
            </div>
        </div>
        <div id="ratingval" className="row1">
            {ratings.map((ratings, index) => (
                <>
                <div className={`columnrating${index}`}><p className="ratingpos">{ratings.Value}<br></br> {ratings.Source}</p></div>
                </>
            ))}
        </div>
        </>
    )
}

export default Rightside;