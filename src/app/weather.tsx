"use client";
import { fetchWeatherApi } from 'openmeteo';
import React from 'react';
import { useEffect, useState } from 'react';

interface iWeatherData {
    current: {
        time: Date;
        temperature2m: string;
        weatherCode: number;
        relativeHumidity2m: number;
    };
    daily: {
        time: Date[];
        weatherCode: Float32Array;
        temperature2mMax: Float32Array;
        temperature2mMin: Float32Array;
        uvIndexMax: Float32Array;
        windSpeed10mMax: Float32Array;
    };
}

const params = {
    "latitude": 46.7649345,
    "longitude": 17.2613775,
    "current": ["temperature_2m", "weather_code", "relative_humidity_2m"],
    "daily": ["weather_code", "temperature_2m_max", "temperature_2m_min", "sunrise", "sunset", "uv_index_max", "wind_speed_10m_max"],
    "timezone": "Europe/Berlin",
    "wind_speed_unit": "kn", // csomó
};

const url = "https://api.open-meteo.com/v1/forecast";

const range = (start: number, stop: number, step: number) =>
    Array.from({ length: (stop - start) / step }, (_, i) => start + i * step);

const months = [
    "Jan", "Feb", "Már", "Ápr", "Máj", "Jún",
    "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"
];

const uv = [
    "", "Alacsony", "Alacsony", "Közepes", "Közepes", "Közepes",
    "Magas", "Magas", "Nagyon Magas", "Nagyon Magas", "Nagyon Magas", "Extrém"
];


const Weather = React.memo(function Weather(props) {
    const [weatherData, setWeather] = useState<iWeatherData>();

    useEffect(() => {
        fetchWeatherApi(url, params)
            .then(responses => {
                const utcOffsetSeconds = responses[0].utcOffsetSeconds();
                const current = responses[0].current()!;
                const daily = responses[0].daily()!;

                const weather = {
                    current: {
                        time: new Date((Number(current.time()) + utcOffsetSeconds) * 1000),
                        temperature2m: current.variables(0)!.value().toFixed(0),
                        weatherCode: current.variables(1)!.value(),
                        relativeHumidity2m: current.variables(2)!.value(),
                    },
                    daily: {
                        time: range(Number(daily.time()), Number(daily.timeEnd()), daily.interval()).map(
                            (t) => new Date((t + utcOffsetSeconds) * 1000)
                        ),
                        weatherCode: daily.variables(0)!.valuesArray()!,
                        temperature2mMax: daily.variables(1)!.valuesArray()!,
                        temperature2mMin: daily.variables(2)!.valuesArray()!,
                        uvIndexMax: daily.variables(5)!.valuesArray()!,
                        windSpeed10mMax: daily.variables(6)!.valuesArray()!,
                    },
                };
                setWeather(weather);
            });
    }, []);

    return (
        weatherData?.current && (
            <div className="flex flex-col items-center justify-center w-full text-gray-700 px-0 py-10 my-10 bg-gradient-to-br from-pink-200 via-purple-200 to-indigo-200 ">
                <div className="w-full max-w-screen-sm bg-white p-10 rounded-xl ring-8 ring-white ring-opacity-40">
                    <div className="flex justify-between">
                        <div className="flex flex-col">
                            <span className="text-6xl font-bold">{weatherData.current.temperature2m}°C</span>
                            <span className="font-semibold mt-1 text-gray-500">Keszthely, Zala</span>
                        </div>
                        <div className="flex flex-col">
                            <span className="font-semibold mt-1 ">Szél: {weatherData.daily.windSpeed10mMax[0].toFixed(0)} csomó</span>
                            <span className="font-semibold mt-1 ">UV max: {uv[+weatherData.daily.uvIndexMax[0].toFixed(0)]}</span>
                            <span className="font-semibold mt-1 ">Páratartalom: {weatherData.current.relativeHumidity2m}%</span>
                        </div>
                        <svg className="h-24 w-24 fill-current text-yellow-400" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
                            <path d="M0 0h24v24H0V0z" fill="none" />
                            <path d="M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79zM1 10.5h3v2H1zM11 .55h2V3.5h-2zm8.04 2.495l1.408 1.407-1.79 1.79-1.407-1.408zm-1.8 15.115l1.79 1.8 1.41-1.41-1.8-1.79zM20 10.5h3v2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm-1 4h2v2.95h-2zm-7.45-.96l1.41 1.41 1.79-1.8-1.41-1.41z" />
                        </svg>
                    </div>
                    <div className="flex justify-between mt-12">
                        {weatherData.daily.time.map((time, index) => (
                            <div key={index} className="flex flex-col items-center">
                                <span className="font-semibold text-lg">{months[(time.getUTCMonth())] + "-" + time.getUTCDate()}</span>
                                <span className="font-semibold text-lg"></span>
                                <img src='/weather_sun.svg' className='w-10 h-10 m-3 opacity-60'></img>
                                <span className="font-semibold mt-1 text-sm">{weatherData.daily.temperature2mMax[index].toFixed(0)}°C</span>
                                <span className="text-xs font-semibold text-gray-400">{weatherData.daily.temperature2mMin[index].toFixed(0)}°C</span>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        )
    );
});

export default Weather;