import styles from './WeatherApp.module.css';

const weeklyForecastData = [
  {
    day: 'Vendredi',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9f1f8bbd6fd6430a8c6c662cde19030ce6c080e18bb8be91b8ce472b546600a6?apiKey=05838f7f259a426e89a3459802fa49d1&&apiKey=05838f7f259a426e89a3459802fa49d1',
    temp: '20°C',
  },
  {
    day: 'Samedi',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/af1a315e1b88b0f3f9108b7f21e4f7d47d61f07d0b0b8496db60c385cc17c19d?apiKey=05838f7f259a426e89a3459802fa49d1&&apiKey=05838f7f259a426e89a3459802fa49d1',
    temp: '22°C',
  },
  {
    day: 'Dimanche',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/25deb69f0e6695945fb5e9110c810e060e1c2945a5b27c2b5a3f014116a89af7?apiKey=05838f7f259a426e89a3459802fa49d1&&apiKey=05838f7f259a426e89a3459802fa49d1',
    temp: '27°C',
  },
  {
    day: 'Lundi',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/6f11593a14a2032bc27e96bccb6f0a732c7f92b98a44b3adc0b4469454999c2e?apiKey=05838f7f259a426e89a3459802fa49d1&&apiKey=05838f7f259a426e89a3459802fa49d1',
    temp: '18°C',
  },
  {
    day: 'Mardi',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a74d21be5f0534659027b221e593b63e638025849e59be86c8939ff8bf010729?apiKey=05838f7f259a426e89a3459802fa49d1&&apiKey=05838f7f259a426e89a3459802fa49d1',
    temp: '16°C',
  },
];

const WeeklyForecast = () => {
  return (
    <div className={styles.weeklyForecast}>
      <div className={styles.weeklyForecastCard}>
        <h3 className={styles.weeklyForecastTitle}>Prochaine prévision</h3>
        <div className={styles.weeklyForecastList}>
          {weeklyForecastData.map((forecast, index) => (
            <div key={index} className={styles.weeklyForecastItem}>
              <div className={styles.weeklyForecastDay}>
                <div className={styles.weeklyForecastDayName}>
                  {forecast.day}
                </div>
                <img
                  src={forecast.icon}
                  alt={forecast.day}
                  className={styles.weeklyForecastIcon}
                />
                <div className={styles.weeklyForecastTemp}>{forecast.temp}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WeeklyForecast;
