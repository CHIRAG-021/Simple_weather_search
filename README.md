# Weather Search App

A modern, responsive weather application built with React that provides real-time weather information for cities worldwide. Features a clean interface with dark/light mode support and dynamic weather backgrounds.

## 🌟 Features

- **Real-time Weather Data**: Get current weather conditions for any city
- **City Search with Autocomplete**: Smart suggestions as you type
- **Dynamic Weather Backgrounds**: Background images change based on weather conditions
- **Dark/Light Mode**: Toggle between themes with persistent preference
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Detailed Weather Information**: Temperature, humidity, wind speed, and weather descriptions
- **Visual Weather Icons**: Custom weather condition icons





## 🛠️ Tech Stack

- **Frontend**: React 18.3.1
- **Styling**: Tailwind CSS
- **API**: OpenWeatherMap API
- **HTTP Client**: Axios
- **Build Tool**: Create React App
- **Icons**: Custom weather icons

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/weather-search-app.git
   cd weather-search-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your OpenWeatherMap API key**
   - Visit [OpenWeatherMap](https://openweathermap.org/api)
   - Sign up for a free account
   - Get your API key from the dashboard

4. **Configure the API key**
   - Replace the placeholder API key in `src/App.js` and `src/components/SearchBar.js`
   ```javascript
   const API_KEY = "your-actual-api-key-here";
   ```

5. **Start the development server**
   ```bash
   npm start
   ```

6. **Open your browser**
   - Navigate to `http://localhost:3000`

## 🎯 Usage

1. **Search for a city**: Type any city name in the search bar
2. **Select from suggestions**: Choose from the autocomplete suggestions
3. **View weather details**: See current temperature, weather conditions, humidity, and wind speed
4. **Toggle theme**: Click the theme switch button to toggle between dark and light modes
5. **Enjoy dynamic backgrounds**: Watch the background change based on current weather conditions

## 🏗️ Project Structure

```
weather-search-app/
├── public/
│   ├── index.html
│   └── ... (public assets)
├── src/
│   ├── components/
│   │   ├── SearchBar.js      # City search with autocomplete
│   │   ├── WeatherCard.js    # Weather display component
│   │   ├── ThemeSwitch.js    # Dark/light mode toggle
│   │   └── Navbar.js         # App header
│   ├── assests/
│   │   ├── background.jpg    # Main background
│   │   ├── clear.png         # Sunny weather background
│   │   ├── cloudy.png        # Cloudy weather background
│   │   ├── rainy.png         # Rainy weather background
│   │   ├── snow.png          # Snowy weather background
│   │   └── thunderstorm.png  # Stormy weather background
│   ├── App.js               # Main application component
│   ├── App.css              # Application styles
│   └── index.js             # Application entry point
├── package.json
├── tailwind.config.js       # Tailwind CSS configuration
└── README.md
```

## 🎨 Components Overview

### SearchBar Component
- **Purpose**: Handles city search with real-time suggestions
- **Features**:
  - Autocomplete functionality
  - Debounced API calls
  - Error handling for invalid cities

### WeatherCard Component
- **Purpose**: Displays weather information
- **Features**:
  - Dynamic background based on weather
  - Weather condition icons
  - Temperature, humidity, and wind speed display

### ThemeSwitch Component
- **Purpose**: Manages dark/light mode
- **Features**:
  - Persistent theme preference
  - Smooth transitions
  - System preference detection

## 🌐 API Reference

### OpenWeatherMap API Endpoints Used

1. **Current Weather Data**
   ```
   GET https://api.openweathermap.org/data/2.5/weather
   Parameters:
   - q: City name
   - units: metric
   - appid: API key
   ```

2. **Geocoding API (for autocomplete)**
   ```
   GET http://api.openweathermap.org/geo/1.0/direct
   Parameters:
   - q: Search query
   - limit: 5
   - appid: API key
   ```

## 🚀 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🧪 Testing

```bash
# Run tests
npm test

# Run tests in watch mode
npm test -- --watch
```

## 📱 Responsive Design

The application is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones (iOS and Android)

## 🎨 Customization

### Adding New Weather Backgrounds
1. Add new image to `src/assests/`
2. Import the image in `WeatherCard.js`
3. Add new case in the switch statement for weather conditions

### Modifying Themes
- Update Tailwind CSS classes in components
- Modify color schemes in `tailwind.config.js`

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather API
- [React](https://reactjs.org/) for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Create React App](https://create-react-app.dev/) for the excellent development setup

## 📞 Support

If you have any questions or need help, please open an issue or contact the maintainers.

---

**Happy coding!** ⛅🌦️🌤️
