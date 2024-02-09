import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
    let [keyword, setKeyword] = useState("");

    function handleResponse(response) {
        console.log(response.data[0]);
    }

    function search(event) {
        event.preventDefault();
        alert (`Searching for the definition of ${keyword}`);
       /* let apiKey = "e7f44dtf8936b0ao9a003f375cfb3403"; */
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }


    function handleKeywordChange(event) {
    setKeyword(event.target.value);
    }

    return (
        <div className="Dictionary">
        <form onSubmit={search}>
            <input type="search" autoFocus={true} onChange={handleKeywordChange}/>
        </form>
        </div>
    );
}