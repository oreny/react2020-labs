import React, {useState} from "react";
import UrlDataFetcher from "./UrlDataFetcher";
import "./style.css";

export default function StarwarsCharacters({characterId, setFilmId}) {
    const [data, setData] = useState(null);

    const getCharacterDataUrl = (characterId) => `https://swapi.dev/api/people/${characterId}/`;

    function extractFilmId(filmUrl) {
        return filmUrl.match(/\/(\d+)\//)[1];
    }

    function filmDataView() {
        return (
            data &&
            <>
                <h3>{data.name}</h3>
                <p>Height: {data.height}cm  </p>
                <p>Weight: {data.mass}kg</p>
                <p>Films:
                    {data.films.map(filmUrl => extractFilmId(filmUrl))
                        .map(filmId => <a onClick={() => setFilmId(filmId)}> {filmId} </a>)}
                </p>
            </>
        );
    }

    return (
        <>
            <UrlDataFetcher url={getCharacterDataUrl(characterId)} setData={setData}/>
            {data ? filmDataView() : characterId ? <h3>"Loading..."</h3> : ""}
        </>
    );
}