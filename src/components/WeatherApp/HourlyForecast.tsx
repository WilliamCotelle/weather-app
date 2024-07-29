import React, { useEffect, useState } from 'react';
import { useCity } from '../../context/CityContext';
import { getHourlyForecastByCity } from '../../API/weather';
import styles from './WeatherApp.module.css';

const HourlyForecast = () => {
  const { city } = useCity();
  const [hourlyForecast, setHourlyForecast] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHourlyForecast = async () => {
      try {
        const forecastData = await getHourlyForecastByCity(city);
        const now = new Date();
        const currentHour = now.getHours();

        // Filtrer pour obtenir les 5 prochaines heures
        const upcomingHoursForecast = forecastData
          .filter((hour) => {
            const hourTime = new Date(hour.time).getHours();
            return hourTime > currentHour && hourTime <= currentHour + 5;
          })
          .slice(0, 5); // S'assurer de ne prendre que les 5 prochaines heures

        setHourlyForecast(upcomingHoursForecast);
      } catch (error) {
        console.error('Error fetching hourly forecast data:', error);
        setError('Erreur lors de la récupération des prévisions horaires');
      }
    };

    fetchHourlyForecast();
  }, [city]);

  if (error) {
    return <div>{error}</div>; // Afficher le message d'erreur en cas de problème
  }

  if (hourlyForecast.length === 0) {
    return <div>Loading...</div>; // Afficher un message de chargement pendant la récupération des données
  }

  return (
    <div className={styles.hourlyForecast}>
      <div className={styles.hourlyForecastCard}>
        <h3 className={styles.hourlyForecastTitle}>
          Prévisions heure par heure :
        </h3>
        <div className={styles.hourlyForecastList}>
          {hourlyForecast.map((forecast, index) => (
            <div key={index} className={styles.hourlyForecastItem}>
              <div className={styles.hourlyForecastTime}>
                {new Date(forecast.time).toLocaleTimeString('fr-FR', {
                  hour: '2-digit',
                  minute: '2-digit',
                })}
              </div>
              <img
                src={forecast.condition.icon}
                alt={`Weather at ${forecast.time}`}
                className={styles.hourlyForecastIcon}
              />
              <div className={styles.hourlyForecastTemp}>
                {Math.floor(forecast.temp_c)}°C
              </div>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae34f660a0576b0c8318f9dc112191f294a478b9c2d73742fe51a393ba5d4199"
                alt="Wind"
                className={styles.hourlyForecastWindIcon}
                style={{ transform: `rotate(${forecast.wind_degree}deg)` }} // Rotation pour indiquer la direction du vent
              />
              <div className={styles.hourlyForecastWindSpeed}>
                {Math.floor(forecast.wind_kph)} km/h
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
