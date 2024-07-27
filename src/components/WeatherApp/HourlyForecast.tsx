import styles from './WeatherApp.module.css';

const hourlyForecastData = [
  {
    time: '12:00',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/eb63fd7975e8a35a816073ba5aa0bb9b536948b11f2fe2f822d4741d9bba5209?apiKey=05838f7f259a426e89a3459802fa49d1&&apiKey=05838f7f259a426e89a3459802fa49d1',
    temp: '26°C',
    windIcon:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/ae34f660a0576b0c8318f9dc112191f294a478b9c2d73742fe51a393ba5d4199?apiKey=05838f7f259a426e89a3459802fa49d1&&apiKey=05838f7f259a426e89a3459802fa49d1',
    windSpeed: '3km/h',
  },
  {
    time: '15:00',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/eb63fd7975e8a35a816073ba5aa0bb9b536948b11f2fe2f822d4741d9bba5209?apiKey=05838f7f259a426e89a3459802fa49d1&&apiKey=05838f7f259a426e89a3459802fa49d1',
    temp: '27°C',
    windIcon:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/ae34f660a0576b0c8318f9dc112191f294a478b9c2d73742fe51a393ba5d4199?apiKey=05838f7f259a426e89a3459802fa49d1&&apiKey=05838f7f259a426e89a3459802fa49d1',
    windSpeed: '2km/h',
  },
  {
    time: '18:00',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ac4a73394030d640a9e0179d0f929bd6d55b64e4623e809945eb64ce6fb6fd97?apiKey=05838f7f259a426e89a3459802fa49d1&&apiKey=05838f7f259a426e89a3459802fa49d1',
    temp: '27°C',
    windIcon:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/ae34f660a0576b0c8318f9dc112191f294a478b9c2d73742fe51a393ba5d4199?apiKey=05838f7f259a426e89a3459802fa49d1&&apiKey=05838f7f259a426e89a3459802fa49d1',
    windSpeed: '2km/h',
  },
  {
    time: '21:00',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ac4a73394030d640a9e0179d0f929bd6d55b64e4623e809945eb64ce6fb6fd97?apiKey=05838f7f259a426e89a3459802fa49d1&&apiKey=05838f7f259a426e89a3459802fa49d1',
    temp: '25°C',
    windIcon:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/ae34f660a0576b0c8318f9dc112191f294a478b9c2d73742fe51a393ba5d4199?apiKey=05838f7f259a426e89a3459802fa49d1&&apiKey=05838f7f259a426e89a3459802fa49d1',
    windSpeed: '3km/h',
  },
  {
    time: '00:00',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/eb63fd7975e8a35a816073ba5aa0bb9b536948b11f2fe2f822d4741d9bba5209?apiKey=05838f7f259a426e89a3459802fa49d1&&apiKey=05838f7f259a426e89a3459802fa49d1',
    temp: '22°C',
    windIcon:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/ae34f660a0576b0c8318f9dc112191f294a478b9c2d73742fe51a393ba5d4199?apiKey=05838f7f259a426e89a3459802fa49d1&&apiKey=05838f7f259a426e89a3459802fa49d1',
    windSpeed: '3km/h',
  },
];

const HourlyForecast = () => {
  return (
    <div className={styles.hourlyForecast}>
      <div className={styles.hourlyForecastCard}>
        <h3 className={styles.hourlyForecastTitle}>Prévisions heure :</h3>
        <div className={styles.hourlyForecastList}>
          {hourlyForecastData.map((forecast, index) => (
            <div key={index} className={styles.hourlyForecastItem}>
              <div className={styles.hourlyForecastTime}>{forecast.time}</div>
              <img
                src={forecast.icon}
                alt={`Weather at ${forecast.time}`}
                className={styles.hourlyForecastIcon}
              />
              <div className={styles.hourlyForecastTemp}>{forecast.temp}</div>
              <img
                src={forecast.windIcon}
                alt="Wind"
                className={styles.hourlyForecastWindIcon}
              />
              <div className={styles.hourlyForecastWindSpeed}>
                {forecast.windSpeed}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
