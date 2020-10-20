import React from "react";
import { useState } from "react";

export default function TimeInput(props) {
    const [timeSec, setTimeSec] = useState(0);
    const onInputChange = (e) => setTimeSec(Number(e.target.value) * e.target.name));

    return (
      <div>
          <div><input value={text} name={1} onChange={onInputChange} /></div>
          <div><input value={text * 60} name={60} onChange={onInputChange} /></div>
          <div><input value={text * 60} name={3600} onChange={onInputChange} /></div>
      </div>
    );
}


