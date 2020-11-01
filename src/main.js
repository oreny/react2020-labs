import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import VimeoPlayer from "./vimeo-player";
import StarwarsFilm from "./starwars-film";
import StarwarsCharacters from "./starwars-characters";

const App = () => {
    const [filmId, setFilmId] = useState("");
    const [characterId, setCharacterId] = useState("");

    return (
        <div>
          <div><VimeoPlayer initialVideoId={19231868}/></div>
          <div>
              <div>
                  <label>Character ID: <input onChange={(e) => setCharacterId(e.target.value)}/></label>
                  <StarwarsCharacters characterId={characterId} setFilmId={setFilmId}/></div>
              </div>
              <div>
                  <StarwarsFilm filmId={filmId} />
              </div>
        </div>
    );
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
