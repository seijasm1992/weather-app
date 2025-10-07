import { useWeatherContext } from "../Context/WeatherContext";
import Loading from "./Loading";

export default function DisplayToday() {
    const { weather, loading } = useWeatherContext();

    if (loading) {
        return <Loading />;
    }

    if (!weather) {
        return null; // O un mensaje de error si prefieres
    }

    const localDate = weather.location.localtime.split(" ")[0];
    const dateObj = new Date(localDate);
    const formattedDate = dateObj.toLocaleDateString("es-ES", {
        weekday: "long",
        month: "short",
        day: "numeric",
        year: "numeric",
    });

    return (
        <div className="relative mt-4">
            <img src="/images/bg-today-small.svg" alt="Weather background" className="w-full h-auto rounded-lg" />
            <div className="absolute inset-0 flex flex-col gap-1 p-4 text-white">
                <div className="flex flex-col items-center justify-center gap-2 h-full ">
                    <div className="flex flex-col  items-center">
                        <h2 className="text-bold text-2xl">{weather.location.name}, {weather.location.country}</h2>
                        <p className="text-xl font-normal">{formattedDate}</p>
                    </div>
                    <div className="flex items-center">
                    <img src="/images/icon-sunny.webp" alt="Sunny"  className="w-32 h-32"/>
                    <p className="font-bold text-6xl font-bricolage">{weather.current.temp_c.toFixed(0)}°C</p>
                    </div>
                </div>
            </div>
        </div>
    );
}