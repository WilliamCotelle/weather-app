const apiKey = import.meta.env.VITE_RAPIDAPI_KEY;
const apiHost = 'open-weather13.p.rapidapi.com';

export const getWeatherByCity = async (
  city: string,
  country: string = 'EN'
) => {
  const url = `https://${apiHost}/city/${city}/${country}`;
  const options = {
    method: 'GET',
    headers: {
      'x-rapidapi-key': apiKey,
      'x-rapidapi-host': apiHost,
    },
  };

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    throw error;
  }
};
