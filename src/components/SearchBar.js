import React, { useState } from "react";
import axios from "axios";

const API_KEY = "3ae72546c9c4e3d91fe5c1ce04a12581";

const WeatherSearch = ({ onSearch }) => {
  const [city, setCity] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const fetchCitySuggestions = async (query) => {
    try {
      const response = await axios.get(
        `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}`
      );
      const data = response.data;
      setSuggestions(data);
    } catch (error) {
      console.error("Error fetching city suggestions:", error);
    }
  };

  const handleInputChange = (e) => {
    const query = e.target.value;
    setCity(query);

    if (query.length >= 1) {
      fetchCitySuggestions(query);
    } else {
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    const cityName = `${suggestion.name}, ${suggestion.state ? suggestion.state + ", " : ""}${suggestion.country}`;
    setCity(cityName);
    onSearch(suggestion.name);
    setSuggestions([]);
  };

  return (
    <div className="flex flex-col items-center mt-10 w-full">
      <input
        type="text"
        placeholder="Enter city, state, or country"
        className="w-80 p-3 rounded-lg border focus:outline-none 
                  focus:ring-2 focus:ring-blue-500 bg-white text-gray-800 
                  dark:bg-gray-700 dark:text-gray-200 dark:placeholder-gray-400"
        value={city}
        onChange={handleInputChange}
      />
      {/* Suggestion box */}
      {suggestions.length > 0 && (
        <ul className="w-80 bg-white dark:bg-gray-800 shadow-lg rounded-lg max-h-60 overflow-auto mt-2">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="p-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200"
              onClick={() => handleSuggestionClick(suggestion)}
            >
              {suggestion.name}, {suggestion.state || ""}, {suggestion.country}
            </li>
          ))}
        </ul>
      )}
      <button
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        onClick={() => onSearch(city)}
      >
        Search
      </button>
    </div>
  );
};

export default WeatherSearch;
