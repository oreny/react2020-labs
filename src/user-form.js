import React from "react";
import { useState } from "react";

function AuthPage(props) {
    const {setUsername, setPassword} = props;
    return (
        <div style={{padding: "30px"}}>
            <div><label style={{fontSize: "32px", marginTop: "25px"}}>User Name:
                <input style={{fontSize: "24px", marginLeft: "10px"}} onChange={(e) => setUsername(e.target.value)}/>
            </label></div>
            <div><label style={{fontSize: "32px", marginTop: "25px"}}>Password:
                <input style={{fontSize: "24px", marginLeft: "10px"}} onChange={(e) => setPassword(e.target.value)}/>
            </label></div>
        </div>
    );
}

function CountryPage(props) {
    const {country, setCountry} = props;

    return (
        <div>
            <label style={{fontSize: "32px", marginTop: "25px"}}>Country
                <select style={{fontSize: "24px"}} onChange={(e) => setCountry(e.target.value)}>
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
            <div><label style={{fontSize: "32px", marginTop: "25px"}}>User Name: {username}</label></div>
            <div><label style={{fontSize: "32px", marginTop: "25px"}}>Password: {password}</label></div>
            <div><label style={{fontSize: "32px", marginTop: "25px"}}>Country: {country}</label></div>
        </div>
    );
}


export default function UserForm(props) {
    const {title} = props;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [country, setCountry] = useState("");
    const [active, setActive] = useState(0)

    function activePageIndex() {
        return pages.map((page, i) => page.props.style.display === "block" ? i : -1).reduce((a, b) => a > b ? a : b);
    }

    function onButtonClick(direction) {
        const index = activePageIndex();
        const newActivePage = direction === 1 ? (index + 1) % pages.length :
            index === 0 ? pages.length - 1 : index - 1;
        debugger;
        pages[index] = <div style={{display: "none"}}>{pages[index].props.children}</div>
        pages[newActivePage] = <div style={{display: "block"}}>{pages[newActivePage].props.children}</div>
        setPages([...pages]);
    }

    return (
      <div>
        <div style={{ borderBottom: "ridge", borderColor: "lightgray", marginTop: "15px", paddingBottom: "15px", textAlign: "center"}}>
            <button disabled={active === 0} style={{fontSize: "24px", borderStyle: "none" }} onClick={() => setActive(x => x === 0 ? 2 : x - 1)}>&lt;&lt;</button>
            <label style={{fontSize: "24px", marginLeft: "15px", marginRight: "15px"}}>{title}</label>
            <button disabled={active === 2} style={{fontSize: "24px", borderStyle: "none"}} onClick={() => setActive(x => (x + 1) % 3)}>&gt;&gt;</button>
        </div>
        <div>
            <div style={{ display: active === 0 ? "block" : "none"}}><AuthPage setUsername={setUsername} setPassword={setPassword}/></div>,
            <div style={{ display: active === 1 ? "block" : "none" }}><CountryPage setCountry={setCountry}/></div>,
            <div style={{ display: active === 2 ? "block" : "none" }}><SummaryPage username={username} password={password} country={country} /></div>
        </div>
      </div>
    );
}

UserForm.defaultProps = {
    title: ""
}