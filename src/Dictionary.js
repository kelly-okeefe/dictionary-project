import React, { useState } from "react";
import Results from "./Results";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary(props) {
    let [keyword, setKeyword] = useState(props.defaultKeyword);
    let [results, setResults] = useState (null);
    let [loaded, setLoaded] = useState (false);

    function handleResponse(response) {
        // console.log(response.data[0].meanings[0].definitions[0].definition);//
        setResults(response.data[0]);
    }

    function search() {
        // documentation: https://dictionaryapi.dev/ 
        let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
        axios.get(apiUrl).then(handleResponse);
    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleKeywordChange(event) {
    setKeyword(event.target.value);
    }

    function load() {
        setLoaded(true);
        search();
    }

    if (loaded) {
    return (
        <div className="Dictionary">
            <section>
                <h1>What word do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
            <input type="search" autoFocus={true} onChange={handleKeywordChange} defaultValue={props.defaultKeyword}/>
        </form>
        <div className="Hint">
            Suggested words: puppies, sunflowers, pizza...
        </div>
        </section>
        <Results results={results}/>
        </div>
    );
} else {
    load();
    return "Loading...";
}
}