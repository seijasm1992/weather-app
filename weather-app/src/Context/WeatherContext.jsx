import {createContext, useContext, useEffect, useState} from "react";

// Crear el contexto
export const WeatherContext = createContext();

// Custom hook para usar el contexto
export const useWeatherContext = () => {
    const context = useContext(WeatherContext);
    if (!context) {
        throw new Error("useWeatherContext debe usarse dentro de WeatherProvider");
    }
    return context;
};




// Componente Provider
export const WeatherProvider = ({ children }) => {
   const [weather, setWeather] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);
   const [search, setSearch] = useState("");
   const [city, setCity] = useState([]);
   const [day, setDay] = useState(0);
   const apiKey = "880634d8d3fd46268b0200007250110";
   function getDayName(dateString) {
    const date = new Date(dateString);
    const options = { weekday: 'long' };
    return date.toLocaleDateString('en-US', options);
  }
   // Función fetchWeather disponible en todo el componente
   const fetchWeather = async (city,days=7,lang="en") => {
       setLoading(true);
       try {
        const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${encodeURIComponent(
            city
          )}&days=${days}&lang=${lang}&aqi=no&alerts=no`;
           const response = await fetch(url);
           const data = await response.json();
           setWeather(data);
console.log(data);
       } catch (error) {
           setError(error);
       } finally {
           setLoading(false);
       }
   };

   useEffect(() => {
       fetchWeather("miami");
   }, []);

const  seachCity =async (city) => {
    setLoading(true)
    try{
        const url=`https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${city}` 
        const response = await fetch(url);
        const data = await response.json();
        setCity(data || []);
        console.log(data.forecast);
        console.log(data);
    }catch(error){
        setError(error)
    }finally{
        setLoading(false)
    }       
}





   return (
       <WeatherContext.Provider value={{ weather, loading, error, fetchWeather, seachCity, city, setCity, search, setSearch ,getDayName,day,setDay}}>
           {children}
       </WeatherContext.Provider>
   );
};      