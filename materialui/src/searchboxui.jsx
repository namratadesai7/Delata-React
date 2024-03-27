
import { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
export default function Searchbox(){
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="58b0df2574ef9cace486b35621e31ce4";
    
    //api call is asynchronus
    let getWeatherInfo =async () =>{
       let response= await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
       let jsonResponse = await response.json();
       console.log(jsonResponse);
       let result ={
        temp:jsonResponse.main.temp,
        tempMin:jsonResponse.main.temp_min,
        tempMax:jsonResponse.main.temp_max,
        humidity:jsonResponse.main.humidity,
        feelsLike:jsonResponse.main.feels_like,
        weather:jsonResponse.weather[0].description
       };
       console.log(result);
    };


    let[city, setCity]= useState("");

    let handleChange= (event) =>{
        setCity(event.target.value);
    };
    let handleSubmit =(evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        getWeatherInfo();
    };
    return (
      <div className='searchbox'>
        <h3>Search for the weather</h3>
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" onChange={handleChange}  required />
            <br /><br />
            <Button variant="contained" type="submit">Search</Button>

        </form>
      </div>
    )
}