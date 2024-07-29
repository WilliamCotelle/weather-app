import React, { useEffect, useState } from 'react';
import { useCity } from '../../context/CityContext';
import { getWeeklyForecastByCity } from '../../API/weather';
import styles from './WeatherApp.module.css';

const WeeklyForecast = () => {
  const { city } = useCity();
  const [forecast, setForecast] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchForecast = async () => {
      try {
        const forecastData = await getWeeklyForecastByCity(city);
        console.log('Raw forecast data:', forecastData); // Affichez les données brutes
        setForecast(forecastData.slice(1, 6)); // Exclure le jour actuel et limiter à 5 jours
      } catch (error) {
        console.error('Error fetching weekly forecast data:', error);
        setError('Erreur lors de la récupération des prévisions météo');
      }
    };

    fetchForecast();
  }, [city]);

  if (error) {
    return <div>{error}</div>; // Afficher le message d'erreur en cas de problème
  }

  if (forecast.length === 0) {
    return <div>Loading...</div>; // Afficher un message de chargement pendant la récupération des données
  }

  return (
    <div className={styles.weeklyForecast}>
      <div className={styles.weeklyForecastCard}>
        <h3 className={styles.weeklyForecastTitle}>Prochaine prévision</h3>
        <div className={styles.weeklyForecastList}>
          {forecast.map((day, index) => (
            <div key={index} className={styles.weeklyForecastItem}>
              <img
                src={day.day.condition.icon}
                alt={day.day.condition.text}
                className={styles.weeklyForecastIcon}
              />
              <div className={styles.weeklyForecastDayName}>
                {new Date(day.date).toLocaleDateString('fr-FR', {
                  weekday: 'long',
                })}
              </div>
              <div className={styles.weeklyForecastTemp}>
                {Math.floor(day.day.maxtemp_c)}°C
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyForecast;
