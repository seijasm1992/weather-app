import { useWeatherContext } from "../Context/WeatherContext";
import Loading from "./Loading";
export default function HourlyForecast() {
    const { weather, loading, getDayName, setDay, day } = useWeatherContext();
    if (loading) return <Loading />
    return (
        <div className="bg-[#25253F] p-4 rounded-md mt-8">
            <div className="flex justify-between">
                <h2 className="text-white font-semibold">Hourly Forecast</h2>
                <select name="" id="" onChange={(e) => setDay(e.target.value)}>
                    {weather.forecast.forecastday.map((day, index) => (
                        <option className="text-white rounded-md" key={index} value={index}>{getDayName(day.date)}</option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-1 gap-12 mt-2 overflow-x-auto">
                {weather.forecast.forecastday[day].hour.map((hour, index) => (
                    <div key={index} className="flex  items-center justify-between bg-[#2F2F49] p-4 rounded-md">
                        <div className="flex items-center gap-2">
                            <img src={hour.condition.icon} alt="" />
                            <p className="text-white">{hour.time.split(" ")[1]}</p>
                        </div>
                        <p className="text-white">{hour.temp_c}°C</p>
                    </div>
                ))}
            </div>
        </div>
    )
}