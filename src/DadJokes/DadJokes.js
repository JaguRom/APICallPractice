import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const Joke = () => {
const [joke, setJoke] = useState(null);
const apiLink = "https://icanhazdadjoke.com/";

const fetchData = async () => {
    const res = await axios.get(`${apiLink}`, { headers: { Accept: "application/json" } });
    console.log(res.data)
    console.log(res.data.joke)
    const cleanJoke = [res.data.joke];
    setJoke(cleanJoke);
}

useEffect(() => {
    fetchData();
}, []);

    return(
        <div>
            <button onClick={()=> fetchData()}>Get a Dad Joke</button>
            <h1>{joke}</h1>
        </div>
    )
}

export default Joke