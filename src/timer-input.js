import React from "react";
import { useState } from "react";

export default function TimerInput() {
    const [timeSec, setTimeSec] = useState(0);
    const onInputChange = (e, factor) => setTimeSec(Number(e.target.value) * factor);

    return (
      <div>
          { [1, 60, 3600].map( x => <div><input value={Math.floor((timeSec * 1000 / x))/1000} onChange={(e) => onInputChange(e, x)} /></div>) }
      </div>
    );
}


