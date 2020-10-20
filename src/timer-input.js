import React from "react";
import { useState } from "react";

export default function TimerInput() {
    const [timeSec, setTimeSec] = useState(0);
    const onInputChange = (e) => setTimeSec(Number(e.target.value) * e.target.name);

    return (
      <div>
          { [1, 60, 3600].map( x => <div><input value={Math.floor((timeSec * 1000 / x))/1000} name={x} onChange={onInputChange} /></div>) }
      </div>
    );
}


