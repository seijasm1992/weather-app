import { useWeatherContext } from "../Context/WeatherContext";
import Loading from "./Loading";

export default function WeatherDetails() {
    const { weather,loading } = useWeatherContext();
if(loading) return <Loading/>
    return (
        <div className="grid grid-cols-2 gap-4 mt-6">
            <div className="bg-[#25253F] p-4 rounded-md"    >
                <h2 className="text-white font-semibold">Feels Like</h2>
                <p className="text-white">{weather.current.feelslike_c.toFixed(0)}°C</p>
            </div>
            <div className="bg-[#25253F] p-4 rounded-md"    >
                <h2 className="text-white font-semibold">Humid</h2>
                <p className="text-white">{weather.current.humidity.toFixed(0)}%</p>
            </div>
            <div className="bg-[#25253F] p-4 rounded-md"    >
                <h2 className="text-white font-semibold">Wind</h2>
                <p className="text-white">{weather.current.wind_kph.toFixed(0)}km/h</p>
            </div>
            <div className="bg-[#25253F] p-4 rounded-md"    >
                <h2 className="text-white font-semibold">Precipitation</h2>
                <p className="text-white">{weather.current.precip_mm.toFixed(0)}mm</p>
            </div>
        </div>
    );
}