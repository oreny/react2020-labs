import React, {useState, useRef, useEffect} from "react";
import Player from '@vimeo/player';

export default function VimeoPlayer({initialVideoId}) {
    const [videoId, setVideoId] = useState(initialVideoId);
    const [isPlayingVideo, setIsPlayingVideo] = useState(false);
    const playerDiv = useRef();
    const vimeoPlayer = useRef();

    useEffect(() => {
        vimeoPlayer.current = new Player(playerDiv.current, {
            id: videoId,
            width: 640
        });
    }, []);

    useEffect(() => {
        vimeoPlayer.current.loadVideo(videoId);
        setIsPlayingVideo(false);
    }, [videoId]);

    useEffect(() => {
        isPlayingVideo ? vimeoPlayer.current.play() : vimeoPlayer.current.pause();
    }, [isPlayingVideo]);

    return (
      <div>
          <label>Video ID:
              <input value={videoId} onChange={(e) => setVideoId(e.target.value)}/>
          </label>
          <div ref={playerDiv}/>
          <button onClick={() => setIsPlayingVideo(!isPlayingVideo)}>{isPlayingVideo ? "Pause" : "Play"}</button>
      </div>
    );
}