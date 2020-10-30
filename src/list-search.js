import React, { useState } from "react";
import "./style.css";

function SearchBox({ setSearchString }) {
    return (
        <div style={{marginBottom: "10px"}}>
            <label style={{fontSize: "24px"}}>Search:
                <input className="search-box" onChange={(e) => setSearchString(e.target.value)}/>
            </label>
        </div>
    )
}

 function List({ listItems, searchString }) {
    const items = listItems.filter(s => s.toLowerCase().indexOf(searchString.toLowerCase()) >= 0);

    return (
        <div>
            <select size = "15" className="search-list">
                {items.map(item => <option value={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default function ListSearch({ listItems }) {
    const [ searchString, setSearchString ] = useState("")

    return (
        <div style = {{width: "300px"}}>
            <SearchBox setSearchString={setSearchString}/>
            <List listItems={listItems} searchString={searchString} />
        </div>
    );
}
