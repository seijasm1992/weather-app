import React from 'react'
import { useWeatherContext } from '../Context/WeatherContext'

export default function SeachItem() {
    const { city, fetchWeather, setCity, setSearch } = useWeatherContext();

    const handleSelectCity = (e, cityName) => {
        e.preventDefault();
        fetchWeather(cityName);
        setSearch("");
        setCity([]);
    };

    return (
        <ul>
            {city.map((item) => (
                <li className="p-2 cursor-pointer hover:bg-current rounded-md" key={item.id}>
                    <a href="#" onClick={(e) => handleSelectCity(e, item.name)}>
                        {item.name}, {item.country}
                    </a>
                </li>
            ))}
        </ul>
    );
}