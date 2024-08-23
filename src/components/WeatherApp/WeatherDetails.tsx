import React, { useEffect, useState } from 'react';
import { useCity } from '../../context/CityContext';
import {
  getCurrentWeatherByCity,
  getWeeklyForecastByCity,
} from '../../API/weather';
import styles from './WeatherApp.module.css';

const WeatherDetails = () => {
  const { city } = useCity();
  const [weather, setWeather] = useState<any>(null);
  const [forecast, setForecast] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const weatherData = await getCurrentWeatherByCity(city);
        setWeather(weatherData);
        const forecastData = await getWeeklyForecastByCity(city);
        setForecast(forecastData[0]); // Premier jour de prévision
      } catch (error) {
        console.error('Error fetching weather data:', error);
        setError('Erreur lors de la récupération des données météo');
      }
    };

    fetchWeather();
  }, [city]);

  if (error) {
    return <div>{error}</div>;
  }

  if (!weather || !forecast) {
    return <div>Loading...</div>;
  }

  const current = weather.current;
  const location = weather.location;

  const weatherIconUrl = current.condition.icon;

  // Fonction pour convertir les heures de lever et coucher du soleil au format 24 heures
  const convertTo24HourFormat = (time12h: string) => {
    const [time, modifier] = time12h.split(' ');
    let [hours, minutes] = time.split(':');

    if (hours === '12') {
      hours = '00';
    }
    if (modifier === 'PM') {
      hours = (parseInt(hours, 10) + 12).toString();
    }

    return `${hours}:${minutes}`;
  };

  // Fonction pour formater les heures de lever et coucher du soleil au format approprié
  const formatTime = (time: string) => {
    try {
      const time24h = convertTo24HourFormat(time);
      // console.log(`Converting time: ${time} to 24-hour format: ${time24h}`);
      const date = new Date(`1970-01-01T${time24h}:00`);
      // console.log(`Formatted date: ${date}`);
      return date.toLocaleTimeString('fr-FR', {
        hour: '2-digit',
        minute: '2-digit',
      });
    } catch (error) {
      console.error('Error formatting time:', error);
      return 'Invalid date';
    }
  };

  return (
    <div className={styles.weatherDetails}>
      <div className={styles.weatherDetailsCard}>
        <div className={styles.temperatureInfo}>
          <div className={styles.temperatureData}>
            <div className={styles.temperature}>
              {Math.floor(current.temp_c)}°C
            </div>
            <div className={styles.feelsLike}>
              <span className={styles.feelsLikeText}>Ressenti:</span>
              <span className={styles.feelsLikeTemp}>
                {Math.floor(current.feelslike_c)}°C
              </span>
            </div>
            <div className={styles.sunInfo}>
              <div className={styles.sunIcons}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/53f69fc4ff7a1cb1923801371b795556bbc9f693c4550682f0d49e13400f1ba8"
                  alt="Sunrise"
                  className={styles.sunriseIcon}
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8befb32f61a04c7cf83f010e5f50a9daebea41f62df2e1eb933d5531969d60d3"
                  alt="Sunset"
                  className={styles.sunsetIcon}
                />
              </div>
              <div className={styles.sunTimes}>
                <div className={styles.sunriseText}>Lever</div>
                <div className={styles.sunriseTime}>
                  {formatTime(forecast.astro.sunrise)}
                </div>
                <div className={styles.sunsetText}>Coucher</div>
                <div className={styles.sunsetTime}>
                  {formatTime(forecast.astro.sunset)}
                </div>
              </div>
            </div>
          </div>
          <div className={styles.weatherIcon}>
            <img
              src={weatherIconUrl}
              alt="Weather"
              className={styles.weatherIconImage}
            />
            <div className={styles.weatherDescription}>
              {current.condition.text}
            </div>
          </div>
          <div className={styles.containerDetails}>
            <div className={styles.additionalInfo}>
              <div className="one-detail">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b4b6eb7e84a513e58ad9d07599d3ea56a9b4c4216567f5959c27121cbc0f2dc"
                  alt="Humidity"
                  className={styles.humidityIcon}
                />
                <div className={styles.humidityValue}>{current.humidity}%</div>
                <div className={styles.humidityLabel}>Humidité</div>
              </div>
              <div className="one-detail">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/859b6ec88aa5ee3a9dca4ca88d7cfbc3c52958da91d17fce2146c4a1ae99563a"
                  alt="Pressure"
                  className={styles.pressureIcon}
                />
                <div className={styles.pressureValue}>
                  {current.pressure_mb} hPa
                </div>
                <div className={styles.pressureLabel}>Pression</div>
              </div>
            </div>
            <div className={styles.windInfo}>
              <div className="one-detail">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e890efc131e12ec9694f9a9be82778550a584072cecd2f5e789a11b5a30ad09"
                  alt="Wind"
                  className={styles.windIcon}
                />
                <div className={styles.windSpeed}>
                  {Math.floor(current.wind_kph)} km/h
                </div>
                <div className={styles.windLabel}>Vent</div>
              </div>
              <div className="one-detail">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/705b6aebb6da4db3280d10afeb97ec30a4874ebf1fb1684183f1678682439537"
                  alt="UV"
                  className={styles.uvIcon}
                />
                <div className={styles.uvIndex}>{Math.round(current.uv)}</div>
                <div className={styles.uvLabel}>UV</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
