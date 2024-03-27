import { useEffect, useState } from "react";

export default function Joker(){
    let[Joke,setJoke]=useState({});
    let URL="https://official-joke-api.appspot.com/random_joke";
    const getNewJoke=async() =>{
    
        let response=await fetch(URL);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
       
       setJoke({setup:jsonResponse.setup, punchline: jsonResponse.punchline});
    }
    //to show the joke for the first time that is first rebdering we use useEffect  because when i
    //if i use getnewjoke int he useSTate((getNewJoke)) to return json response i get promise in the state  
    useEffect(() =>{async function getFirstJoke(){

        let response=await fetch(URL);
        let jsonResponse=await response.json();
        console.log(jsonResponse);
        setJoke({setup:jsonResponse.setup, punchline: jsonResponse.punchline});
    }
    getFirstJoke();
    } ,[]);

  
   
    return(
        <div>
            <h3>Joker!</h3>
            <h2>{Joke.setup}</h2>
            <h2>{Joke.punchline}</h2>
            <button onClick={getNewJoke}>New Joke</button>
        </div>
    )
}