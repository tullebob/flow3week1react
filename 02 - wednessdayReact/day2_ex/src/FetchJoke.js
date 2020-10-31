import React, { useState, useEffect } from 'react';
const URL = "https://api.chucknorris.io/jokes/random";
const URL2 = "https://icanhazdadjoke.com/";


export function FetchJoke() {
    const [joke, setJoke] = useState('Chuck Joke');
    const [dadJoke, setDadJoke] = useState('Dad joke');

    function getChuckJoke() {
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setJoke(data.value)
            });
    }

    function getJokeSec() {
        fetch(URL2, { headers: { 'Accept': 'application/json'}})
            .then(res => res.json())
            .then(data => {
                setDadJoke(data.joke)
                console.log(dadJoke)

            });
    }

    useEffect(
        () => {
            const interval = setInterval(() => {
                getJokeSec()
            }, 10000)
            return () => {
                clearInterval(interval)
            }
        }, []
    )

    return (
        <div>
            <button onClick={getChuckJoke}>Load Chuck Norris joke</button>
            <p>{joke}</p>

            <p>{dadJoke}</p>
        </div>

    );
}

