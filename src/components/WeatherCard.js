import React from "react";
import sunny from "../assests/clear.png";
import cloudy from "../assests/cloudy.png";
import rainy from "../assests/rainy.png";
import snowy from "../assests/snow.png";
import thunderstorm from "../assests/thunderstorm.png";

const WeatherCard = ({ weather, aqi }) => {
  if (!weather) return null;

  const { name, main, weather: weatherDetails } = weather;
  const weatherCondition = weatherDetails[0].main.toLowerCase();
  const iconUrl = `http://openweathermap.org/img/wn/${weatherDetails[0].icon}@2x.png`;

  // Choose background image based on weather condition
  let backgroundImage;
  switch (weatherCondition) {
    case "clear":
      backgroundImage = sunny;
      break;
    case "clouds":
      backgroundImage = cloudy;
      break;
    case "rain":
      backgroundImage = rainy;
      break;
    case "snow":
      backgroundImage = snowy;
      break;
    case "thunderstorm":
      backgroundImage = thunderstorm;
      break;
    default:
      backgroundImage = cloudy; // Default image
  }

  // AQI descriptions based on AQI value
  const aqiDescription = (aqi) => {
    switch (aqi) {
      case 1:
        return "Good";
      case 2:
        return "Fair";
      case 3:
        return "Moderate";
      case 4:
        return "Poor";
      case 5:
        return "Very Poor";
      default:
        return "Unknown";
    }
  };

  return (
    <div
      className="p-6 rounded-lg shadow-lg max-w-md mx-auto mt-10 text-center transition-colors duration-300
                 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "multiply",
      }}
    >
      <h2 className="text-3xl font-bold mb-4">{name}</h2>
      <img
        src={iconUrl}
        alt={weatherDetails[0].description}
        className="mx-auto w-20 h-20"
      />
      <p className="text-xl capitalize">{weatherDetails[0].description}</p>
      <p className="text-2xl font-semibold">{main.temp}°C</p>
      <div className="flex justify-between mt-4">
        <p>Humidity: {main.humidity}%</p>
        <p>Wind Speed: {main.temp} m/s</p>
      </div>
      {/* AQI Display */}
      {aqi && (
        <div className="mt-4 p-2 rounded bg-white dark:bg-gray-700">
          <h3 className="text-lg font-semibold">Air Quality Index (AQI): {aqi}</h3>
          <p className="text-sm">{aqiDescription(aqi)}</p>
        </div>
      )}
    </div>
  );
};

export default WeatherCard;
