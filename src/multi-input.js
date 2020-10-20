import React from "react";
import { useState } from "react";

export default function MultiInput(props) {
    const { count } = props;
    const [text, setText] = useState("");
    const onInputChange = (e) => { setText(e.target.value)};

    return (
      <div>
          { Array(count).fill(<div><input placeholder="type something..." value={text} onChange={onInputChange} /></div>) }
      </div>
    );
}

MultiInput.defaultProps = {
    count: 5
}
