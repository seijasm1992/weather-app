import Button from "./Button";
import { useWeatherContext } from "../Context/WeatherContext";

export default function Seach({ children }) {
    const { seachCity, setSearch, search, setCity } = useWeatherContext();

    const handleSearch = (e) => {
        e.preventDefault();
        const city = e.target.city.value;
        seachCity(city);
    };

    const handleInputChange = (e) => {
        const city = e.target.value;
        setSearch(city);
        if (city.trim()) {
            seachCity(city);
        } else {
            setCity([]); // Limpia los resultados si el input está vacío
        }
    };

    return (
      <div className="mt-8">
        <form onSubmit={handleSearch}>         
          <div className="relative w-full">
            <img 
              src="/images/icon-search.svg" 
              alt="search icon" 
              className="absolute w-5 h-5 left-4 top-1/2 -translate-y-1/2 pointer-events-none"
            />
            <input
              type="text"
              name="city"
              placeholder="Search for a place"
              value={search}
              onChange={handleInputChange}
              className="
                w-full h-12 pl-12 pr-4 rounded-lg bg-[#25253F] text-white
                outline-none
                focus:ring-2 focus:ring-[#5BC0BE] focus:border-transparent
                placeholder:text-gray-400
              "
            />
          </div>
          {children }
        </form>
      </div>
    );
}