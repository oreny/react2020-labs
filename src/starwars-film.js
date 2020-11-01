import React, {useState} from "react";
import $ from "jquery";
import UrlDataFetcher from "./UrlDataFetcher";

export default function StarwarsFilm({filmId}) {
    const [data, setData] = useState(null);
    const getFilmUrl = (filmId) => `https://swapi.dev/api/films/${filmId}/`;

    function filmDataView() {
        return (
            <>
                <h3>{data.title}</h3>
                <p>{data.opening_crawl}</p>
            </>
        );
    }

    return (
        <>
            <UrlDataFetcher url={getFilmUrl(filmId)} setData={setData}/>
            {data ? filmDataView() : filmId ? <h3>"Loading..."</h3> : ""}
        </>
    );
}