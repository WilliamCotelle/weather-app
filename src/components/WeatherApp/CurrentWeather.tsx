import React, { useEffect, useState } from 'react';
import { useCity } from '../../context/CityContext';
import { getCurrentWeatherByCity } from '../../API/weather';
import styles from './WeatherApp.module.css';

const CurrentWeather = () => {
  const { city } = useCity(); // Utilisation du contexte pour accéder à la ville sélectionnée
  const [currentWeather, setCurrentWeather] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const weatherData = await getCurrentWeatherByCity(city); // Récupérer les données météo actuelles
        setCurrentWeather(weatherData); // Stocker les données dans l'état
      } catch (error) {
        setError('Erreur lors de la récupération des données météo'); // Gérer les erreurs
      }
    };

    fetchWeather(); // Appeler la fonction pour récupérer les données météo
  }, [city]);

  if (error) {
    return <div>{error}</div>; // Afficher le message d'erreur en cas de problème
  }

  if (!currentWeather) {
    return <div>Loading...</div>; // Afficher un message de chargement pendant la récupération des données
  }

  // Récupérer le décalage horaire depuis les données actuelles
  const timezoneOffset = currentWeather.location.tz_id;

  // Créer une date en utilisant le décalage horaire de la ville
  const now = new Date();
  const localTime = new Date(
    now.toLocaleString('en-US', { timeZone: timezoneOffset })
  );

  // Formater l'heure locale et la date locale
  const currentTime = localTime.toLocaleTimeString('fr-FR', {
    hour: '2-digit',
    minute: '2-digit',
  });
  const currentDate = localTime.toLocaleDateString('fr-FR', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  const current = currentWeather.current;
  const location = currentWeather.location;

  return (
    <div className={styles.currentWeather}>
      <div className={styles.currentWeatherCard}>
        <div className={styles.currentWeatherInfo}>
          <h2 className={styles.cityName}>{location.name}</h2>
          <div className={styles.currentTime}>{currentTime}</div>
          <div className={styles.currentDate}>{currentDate}</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
