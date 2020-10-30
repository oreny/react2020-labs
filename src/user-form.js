import React from "react";
import { useState } from "react";

const applyChange = (event, func) => func(event.target.value);

function AuthPage({setUsername, setPassword}) {
    return (
        <div className="auth-page-div">
            <div><label className="auth-label">User Name:
                <input className="auth-input" onChange={e => applyChange(e, setUsername)}/>
            </label></div>
            <div><label className="auth-label">Password:
                <input className="auth-input" onChange={e => applyChange(e, setPassword)}/>
            </label></div>
        </div>
    );
}

function CountryPage({country, setCountry}) {
    return (
        <div>
            <label style={{fontSize: "32px", marginTop: "25px"}}>Country
                <select style={{fontSize: "24px"}} onChange={e => applyChange(e, setCountry)}>
                    {["US", "UK", "Israel", "Other"].map(x => <option>{x}</option>)}
                </select>
            </label>
        </div>
    );
}

function SummaryPage(props) {
    const {username, password, country} = props;
    return (
        <div style={{padding: "30px"}}>
            <div><label className="auth-label">User Name: {username}</label></div>
            <div><label className="auth-label">Password: {password}</label></div>
            <div><label className="auth-label">Country: {country}</label></div>
        </div>
    );
}


export default function UserForm({title}) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [country, setCountry] = useState("");
    const [activePageIndex, setActivePageIndex] = useState(0);

    const pages = [
        <AuthPage setUsername={setUsername} setPassword={setPassword}/>,
        <CountryPage setCountry={setCountry}/>,
        <SummaryPage username={username} password={password} country={country} />
        ];

    function moveActivePage(delta) {
        let newIndex = activePageIndex + delta;
        newIndex = activePageIndex < 0 ? 0 : Math.min(newIndex, pages.length - 1);
        setActivePageIndex(newIndex);
    }

    return (
      <div>
        <div className="nav">
            <button disabled={activePageIndex === 0} className="nav-button" onClick={() => moveActivePage(-1)}>{'<<'}</button>
            <label className="nav-title-lable">{title}</label>
            <button disabled={activePageIndex === pages.length - 1} className="nav-button" onClick={() => moveActivePage(1)}>{'>>'}</button>
        </div>
        <div>
            {pages.map((page, i) => <div style={{display: activePageIndex === i ? "block" : "none"}}>{page}</div>)}
        </div>
      </div>
    );
}

UserForm.defaultProps = {
    title: ""
}