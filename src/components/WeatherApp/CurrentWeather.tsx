import styles from './WeatherApp.module.css';

const CurrentWeather = () => {
  return (
    <div className={styles.currentWeather}>
      <div className={styles.currentWeatherCard}>
        <div className={styles.currentWeatherInfo}>
          <h2 className={styles.cityName}>ville</h2>
          <div className={styles.currentTime}>09:03</div>
          <div className={styles.currentDate}>Lundi, 31 Aout</div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
