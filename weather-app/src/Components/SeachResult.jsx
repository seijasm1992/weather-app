import React from 'react'
import { useWeatherContext } from '../Context/WeatherContext'
import Loading from './Loading';
import SeachItem from './SeachItem';

export default function SeachResult() {
    const { city, loading } = useWeatherContext();

    if (loading) return <Loading />;

    if (!city || city.length === 0) return null;

    return (
        <div className="bg-[#25253F] flex flex-col gap-1 p-2 rounded-lg dm-sans mt-4 text-white">
            <SeachItem />
        </div>
    );
}