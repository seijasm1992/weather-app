import NavBar from "./Components/NavBar";
import Metrics from "./Components/Metrics";
import Hero from "./Components/Hero";
import { WeatherProvider } from "./Context/WeatherContext";
import Seach from "./Components/Seach";
import Button from "./Components/Button";
import WeatherDisplay from "./Components/WeatherDisplay";
function App() {

  return (
    <WeatherProvider>
            <div className="min-h-screen bg-[#02012B] container mx-auto font-bricolage px-4">
        <NavBar children={<Metrics />} />
        <Hero title={"How's the sky looking today?"} />
        <Seach children={<Button name="Search" />} />
        <WeatherDisplay />
      </div>
    </WeatherProvider>
  )
}

export default App
