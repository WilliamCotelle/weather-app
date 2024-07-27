import React from 'react';
import styles from './WeatherApp.module.css';
import SearchBar from './SearchBar';
import CurrentWeather from './CurrentWeather';
import WeatherDetails from './WeatherDetails';
import WeeklyForecast from './WeeklyForecast';
import HourlyForecast from './HourlyForecast';

const WeatherApp = () => {
  return (
    <div className={styles.container}>
      <SearchBar />
      <main className={styles.mainContent}>
        <div className={styles.weatherInfo}>
          <CurrentWeather />
          <WeatherDetails />
        </div>
        <div className={styles.forecastSection}>
          <div className={styles.forecastContainer}>
            <WeeklyForecast />
            <HourlyForecast />
          </div>
        </div>
      </main>
    </div>
  );
};

export default WeatherApp;
