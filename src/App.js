import React, { useState } from "react";
import WeatherSearch from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ThemeSwitch from "./components/ThemeSwitch";
import backgroundImage from "./assests/background.jpg"; // Import your background image

const API_KEY = "3ae72546c9c4e3d91fe5c1ce04a12581";

const App = () => {
  const [weather, setWeather] = useState(null);

  const fetchWeather = async (city) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
      );
      const data = await response.json();
      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert("City not found");
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <div
      className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-500"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full flex justify-between items-center px-6 py-4 bg-gray-50 dark:bg-gray-800 bg-opacity-60 dark:bg-opacity-60 border-b border-gray-200 dark:border-gray-700 z-10">
        <h1 className="text-2xl font-bold">Weather Search</h1>
        <ThemeSwitch />
      </header>

      {/* Main Content */}
      <div className="pt-20 flex flex-col items-center">
        <WeatherSearch onSearch={fetchWeather} />
        <WeatherCard weather={weather} />
      </div>
    </div>
  );
};

export default App;
