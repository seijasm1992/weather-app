import { useWeatherContext } from "../Context/WeatherContext";
import Loading from "./Loading";
export default function Forecast() {
    const { weather, loading, getDayName } = useWeatherContext();
    if (loading) return <Loading />
    return (
        <div>
            <h2 className="text-white font-semibold mt-8">Dealy Forecast</h2>

            <div className="grid grid-cols-2 gap-4 mt-2 overflow-x-auto  ">
                {weather.forecast.forecastday.map((day, index) => (
                    <div key={index} className="bg-[#25253F] p-4 rounded-md px-4">
                        <h2 className="text-white text-center">{getDayName(day.date)}</h2>
                        <img src={day.day.condition.icon} alt="" className="w-16 h-16 mx-auto" />
                        <div className="flex justify-between">
                            <p className="text-white">{day.day.mintemp_c}°</p>
                            <p className="text-white">{day.day.maxtemp_c}°</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}