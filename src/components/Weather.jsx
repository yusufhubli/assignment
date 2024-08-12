import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Weather = () => {
    const [weatherData, setWeatherData] = useState(null);
    const apiKey = "268e289f76d66a6971343bccab279805";
    console.log(apiKey)
    const city = 'Bangalore';

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
            .then(response => {
                setWeatherData(response.data);
                console.log(response.data)
            })
            .catch(error => {
                console.error("Error fetching the weather data", error);
            });
    }, []);

    if (!weatherData) {
        return <div className="text-center">Loading...</div>;
    }

    const { name, weather, main } = weatherData;
    const weatherIcon = `https://openweathermap.org/img/wn/${weather[0].icon}@2x.png`;

    return (
        <div className="w-[17rem] sm:w-[22rem]">
            <div className=' flex items-center gap-1 md:gap-2'>
                <img src={weatherIcon} alt="Weather Icon" className=" w-14 h-14" />
                <h1 className=" font-medium text-lg md:text-2xl">{name}</h1>
                <p className=" font-bold text-xl md:text-3xl">{main.temp}°C</p>
            </div>
            <p className="md:text-lg -mt-4 ml-3">{weather[0].description}</p>

        </div>
    );
};

export default Weather;