function Metrics() {
    return (
        <div className="flex items-center gap-3 bg-[#25253F] h-12 px-4 rounded-lg">
            <div className="flex-shrink-0">
                <img src="/images/icon-units.svg" alt="metric" className="w-4 h-4"/>
            </div>
            <select 
                name="metrics" 
                className="bg-transparent text-white text-sm font-medium outline-none cursor-pointer pr-2 h-12"
            >
                <option value="metric" className="bg-[#25253F]">Celsius</option>
                <option value="imperial" className="bg-[#25253F]">Fahrenheit</option>
            </select>
        </div>
    )
}   

export default Metrics