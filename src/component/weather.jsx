import React, { useState } from "react";
const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const fetchWeather = async () => {
    if (!city) return;
    try {
      const response = await fetch(
        `https://wttr.in/${city}?format=%C+%t`
      );
      if (!response.ok) {
        throw new Error("City not found");
      }
      const data = await response.text();
      setWeather(data);
      setError(null);
    } catch (err) {
      setWeather(null);
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Weather App</h1>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full p-2 border rounded mb-4"
        />
        <button
          onClick={fetchWeather}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
        > Get Weather
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
        {weather && (
          <div className="mt-4 text-center">
            <h2 className="text-xl font-semibold">{city}</h2>
            <p className="text-2xl font-bold">{weather}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeatherApp;
