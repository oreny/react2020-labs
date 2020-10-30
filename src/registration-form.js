import React,{ useState, useRef } from "react";

export default function RegistrationForm() {
    const [userName, password, verifyPassword] = [useRef(), useRef(), useRef()];

    function register() {
        if (password.current.value === verifyPassword.current.value) {
            alert ("Registration successful!")
        } else {
            alert ("Password and password verification do not match");
        }
    }

    return (
        <div>
            <label>User Name:
                <input ref={userName} />
            </label><br/>
            <label>Password:
                <input ref={password} />
            </label><br/>
            <label>Verify Password:
                <input ref={verifyPassword} />
            </label><br/>
            <button onClick={register}>Register</button>
        </div>
    )
}

