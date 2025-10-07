import SeachResult from "./SeachResult";
import DisplayToday from "./DisplayToday";
import WeatherDetails from "./WeatherDetails";
import Forecast from "./Forecast";
import HourlyForecast from "./HourlyForecast";
export default function WeatherDisplay() {
    return (
        <div >
          <SeachResult /> 
          <DisplayToday />
          <WeatherDetails/>
          <Forecast/>
          <HourlyForecast/>
        </div>
    )
}