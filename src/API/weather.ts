const weatherApiKey = import.meta.env.VITE_WEATHER_API_KEY;

console.log('API Key:', weatherApiKey); // Vérifiez que la clé est correctement affichée ici

export const getCurrentWeatherByCity = async (city: string) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${weatherApiKey}&q=${city}&lang=fr`;

  try {
    console.log(`Fetching current weather for city: ${city}`);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    console.log('Current weather data:', result);
    return result;
  } catch (error) {
    console.error('Error fetching current weather data:', error);
    throw error;
  }
};

export const getWeeklyForecastByCity = async (city: string) => {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${city}&days=7&lang=fr`;

  try {
    console.log(`Fetching weekly forecast for city: ${city}`);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    console.log('Weekly forecast data:', result.forecast.forecastday);
    return result.forecast.forecastday;
  } catch (error) {
    console.error('Error fetching weekly forecast data:', error);
    throw error;
  }
};

export const getHourlyForecastByCity = async (city: string) => {
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${weatherApiKey}&q=${city}&hours=24&lang=fr`;

  try {
    console.log(`Fetching hourly forecast for city: ${city}`);
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    console.log('Hourly forecast data:', result);
    return result.forecast.forecastday[0].hour; // Retourner toutes les heures pour la première journée de prévisions
  } catch (error) {
    console.error('Error fetching hourly forecast data:', error);
    throw error;
  }
};
