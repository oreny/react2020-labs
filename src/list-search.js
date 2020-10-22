import React from "react";
import  { useState } from "react";


function SearchBox(props) {
    const { setSearchString } = props;

    return (
        <div style={{marginBottom: "10px"}}>
            <label style={{fontSize: "24px"}}>
                Search:
                <input style= {{fontSize: "24px", marginLeft: "5px", width: "70%"}} onChange={(e) => setSearchString(e.target.value)}/>
            </label>
        </div>
    )
}

 function List(props) {
    const { listItems, searchString } = props;

    const searchStr = searchString.toLowerCase();
    const items = searchString.length === 0 ? listItems : listItems.map(s => s.toLowerCase()).filter(x => x.indexOf(searchStr) >= 0)

    return (
        <div>
            <select size = "15" style={{fontSize: "18px", width: "100%"}}>
                {items.map(item => <option value={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default function ListSearch(props) {
    const { listItems } = props;
    const [ searchString, setSearchString ] = useState("")

    return (
        <div style = {{width: "300px"}}>
            <SearchBox setSearchString={setSearchString}/>
            <List listItems={listItems} searchString={searchString} />
        </div>
    )
}
