import axios from "axios";
import "./DadJokes.css"
import { useState, useEffect } from "react";

const Joke = () => {
const [joke, setJoke] = useState(null);
const apiLink = "https://icanhazdadjoke.com/";

const fetchData = async () => {
    const res = await axios.get(`${apiLink}`, { headers: { Accept: "application/json" } });
    const cleanJoke = [res.data.joke];
    setJoke(cleanJoke);
}
//Mounted component API call
useEffect(() => {
    fetchData();
}, []);

    return(
        <div className="DivJoke__background">
            <button onClick={()=> fetchData()} className="btn-success btn-lg border-light">Get a Dad Joke</button>
            <h1>{joke}</h1>
        </div>
    )
}

export default Joke