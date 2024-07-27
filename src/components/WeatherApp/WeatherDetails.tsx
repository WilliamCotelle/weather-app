import styles from './WeatherApp.module.css';

const WeatherDetails = () => {
  return (
    <div className={styles.weatherDetails}>
      <div className={styles.weatherDetailsCard}>
        <div className={styles.temperatureInfo}>
          <div className={styles.temperatureData}>
            <div className={styles.temperature}>24°C</div>
            <div className={styles.feelsLike}>
              <span className={styles.feelsLikeText}>Ressenti:</span>
              <span className={styles.feelsLikeTemp}>22°C</span>
            </div>
            <div className={styles.sunInfo}>
              <div className={styles.sunIcons}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/53f69fc4ff7a1cb1923801371b795556bbc9f693c4550682f0d49e13400f1ba8?apiKey=05838f7f259a426e89a3459802fa49d1&&apiKey=05838f7f259a426e89a3459802fa49d1"
                  alt="Sunrise"
                  className={styles.sunriseIcon}
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8befb32f61a04c7cf83f010e5f50a9daebea41f62df2e1eb933d5531969d60d3?apiKey=05838f7f259a426e89a3459802fa49d1&&apiKey=05838f7f259a426e89a3459802fa49d1"
                  alt="Sunset"
                  className={styles.sunsetIcon}
                />
              </div>
              <div className={styles.sunTimes}>
                <div className={styles.sunriseText}>Lever</div>
                <div className={styles.sunriseTime}>06:37</div>
                <div className={styles.sunsetText}>Coucher</div>
                <div className={styles.sunsetTime}>20:37</div>
              </div>
            </div>
          </div>
          <div className={styles.weatherIcon}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f32cc478ca6d70b4d683c67a3309f5edb6a564117641bedc57dceafd2399f5a7?apiKey=05838f7f259a426e89a3459802fa49d1&&apiKey=05838f7f259a426e89a3459802fa49d1"
              alt="Weather"
              className={styles.weatherIconImage}
            />
            <div className={styles.weatherDescription}>Soleil</div>
          </div>
          <div className={styles.containerDetails}>
            <div className={styles.additionalInfo}>
              <div className="one-detail">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b4b6eb7e84a513e58ad9d07599d3ea56a9b4c4216567f5959c27121cbc0f2dc?apiKey=05838f7f259a426e89a3459802fa49d1&&apiKey=05838f7f259a426e89a3459802fa49d1"
                  alt="Humidity"
                  className={styles.humidityIcon}
                />

                <div className={styles.humidityValue}>41%</div>

                <div className={styles.humidityLabel}>Humidité</div>
              </div>
              <div className="one-detail">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/859b6ec88aa5ee3a9dca4ca88d7cfbc3c52958da91d17fce2146c4a1ae99563a?apiKey=05838f7f259a426e89a3459802fa49d1&&apiKey=05838f7f259a426e89a3459802fa49d1"
                  alt="Pressure"
                  className={styles.pressureIcon}
                />
                <div className={styles.pressureValue}>997hPa</div>
                <div className={styles.pressureLabel}>Pression</div>
              </div>
            </div>
            <div className={styles.windInfo}>
              <div className="one-detail">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3e890efc131e12ec9694f9a9be82778550a584072cecd2f5e789a11b5a30ad09?apiKey=05838f7f259a426e89a3459802fa49d1&&apiKey=05838f7f259a426e89a3459802fa49d1"
                  alt="Wind"
                  className={styles.windIcon}
                />
                <div className={styles.windSpeed}>2km/h</div>
                <div className={styles.windLabel}>Vent</div>
              </div>
              <div className="one-detail">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/705b6aebb6da4db3280d10afeb97ec30a4874ebf1fb1684183f1678682439537?apiKey=05838f7f259a426e89a3459802fa49d1&&apiKey=05838f7f259a426e89a3459802fa49d1"
                  alt="UV"
                  className={styles.uvIcon}
                />
                <div className={styles.uvIndex}>8</div>
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
