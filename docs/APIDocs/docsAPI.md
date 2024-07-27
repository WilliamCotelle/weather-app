```jsx
import React from 'react';
import './style.css';

export const WeatherDashboard = () => {
  return (
    <div className="weather-dashboard">
      <div className="div">
        <div className="hourly-forecast">
          <div className="group">
            <div className="overlap-group">
              <div className="wind">
                <div className="text-wrapper">3km/h</div>
                <img
                  className="navigation"
                  alt="Navigation"
                  src="navigation-1-5.png"
                />
              </div>
              <div className="overlap">
                <div className="temperature">
                  <div className="text-wrapper-2">22°C</div>
                  <img className="img" alt="Clear" src="clear-3-2.png" />
                </div>
                <div className="hour">00:00</div>
              </div>
            </div>
          </div>
          <div className="overlap-wrapper">
            <div className="overlap-group">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <div className="text-wrapper-3">3km/h</div>
                  <img
                    className="navigation-2"
                    alt="Navigation"
                    src="navigation-1-4.png"
                  />
                </div>
              </div>
              <div className="temperature-2">
                <div className="text-wrapper-4">25°C</div>
                <img className="img" alt="Clouds" src="image.png" />
              </div>
              <div className="hour-2">21:00</div>
            </div>
          </div>
          <div className="div-wrapper">
            <div className="overlap-group">
              <div className="wind-2">
                <div className="text-wrapper">2km/h</div>
                <img
                  className="navigation-3"
                  alt="Navigation"
                  src="navigation-1-3.png"
                />
              </div>
              <div className="overlap-group-3">
                <div className="temperature">
                  <div className="text-wrapper-5">27°C</div>
                  <img className="img" alt="Clouds" src="clouds-2.png" />
                </div>
                <div className="hour-3">18:00</div>
              </div>
            </div>
          </div>
          <div className="group-2">
            <div className="overlap-group">
              <div className="wind-3">
                <div className="overlap-group-4">
                  <div className="text-wrapper-6">2km/h</div>
                  <img
                    className="navigation-2"
                    alt="Navigation"
                    src="navigation-1-2.png"
                  />
                </div>
              </div>
              <div className="temperature-2">
                <div className="text-wrapper-4">27°C</div>
                <img className="img" alt="Clear" src="clear-4.png" />
              </div>
              <div className="hour-2">15:00</div>
            </div>
          </div>
          <div className="group-3">
            <div className="overlap-group">
              <div className="wind">
                <div className="text-wrapper">3km/h</div>
                <img
                  className="navigation-4"
                  alt="Navigation"
                  src="navigation-1.png"
                />
              </div>
              <div className="overlap-group-5">
                <div className="temperature-3">
                  <div className="text-wrapper-7">26°C</div>
                  <img className="img" alt="Clear" src="clear-3.png" />
                </div>
                <div className="hour-3">12:00</div>
              </div>
            </div>
          </div>
          <div className="title">Prévisions heure :</div>
        </div>
        <img
          className="element-forecast"
          alt="Element forecast"
          src="5days-forecast.png"
        />
        <div className="weather-details">
          <div className="extra-details">
            <div className="UV">
              <div className="text-time">
                <div className="text-wrapper-8">UV</div>
                <div className="text-wrapper-9">8</div>
              </div>
              <img className="uv-white" alt="Uv white" src="uv-white-1.png" />
            </div>
            <div className="pressure">
              <div className="text-time-2">
                <div className="text-wrapper-10">Pression</div>
                <div className="text-wrapper-11">997hPa</div>
              </div>
              <img
                className="pressure-white"
                alt="Pressure white"
                src="pressure-white-1.png"
              />
            </div>
            <div className="wind-speed">
              <div className="text-time-3">
                <div className="text-wrapper-8">Vent</div>
                <div className="text-wrapper-9">2km/h</div>
              </div>
              <img className="wind-4" alt="Wind" src="wind-1.png" />
            </div>
            <div className="humidity">
              <div className="text-time-4">
                <div className="text-wrapper-10">Humidité</div>
                <div className="text-wrapper-11">41%</div>
              </div>
              <img className="humidity-2" alt="Humidity" src="humidity-1.png" />
            </div>
          </div>
          <div className="icon-weather">
            <div className="overlap-group-6">
              <div className="type-of-weather">Soleil</div>
              <img className="clear" alt="Clear" src="clear-1.png" />
            </div>
          </div>
          <div className="main-details">
            <div className="text-wrapper-12">24°C</div>
            <div className="feels-like">
              <p className="element-c">
                <span className="span">22</span>
                <span className="text-wrapper-13">°C</span>
              </p>
              <div className="text-wrapper-14">Ressenti :</div>
            </div>
            <div className="sunset">
              <div className="text-time-5">
                <div className="sunset-2">Coucher</div>
                <div className="text-wrapper-15">20:37</div>
              </div>
              <img
                className="sunset-white"
                alt="Sunset white"
                src="sunset-white-1.png"
              />
            </div>
            <div className="sunrise">
              <div className="text-time-5">
                <div className="text-wrapper-16">Lever</div>
                <div className="text-wrapper-15">06:37</div>
              </div>
              <img
                className="sunrise-white"
                alt="Sunrise white"
                src="sunrise-white-1.png"
              />
            </div>
          </div>
        </div>
        <img
          className="location-time-date"
          alt="Location time date"
          src="location-time-date.png"
        />
        <div className="current-location">
          <div className="overlap-2">
            <div className="text-wrapper-17">Se localiser</div>
            <img
              className="current-location-2"
              alt="Current location"
              src="current-location-icon.png"
            />
          </div>
        </div>
        <div className="search-bar">
          <div className="overlap-3">
            <div className="text-wrapper-18">Recherchez votre ville</div>
            <img className="search" alt="Search" src="search-1.png" />
          </div>
        </div>
      </div>
    </div>
  );
};
```

```css
.weather-dashboard {
  background-color: rgba(255, 255, 255, 1);
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
}

.weather-dashboard .div {
  background: linear-gradient(
    180deg,
    rgb(19, 78, 94) 0.02%,
    rgb(113, 178, 128) 100%
  );
  background-color: rgba(255, 255, 255, 1);
  height: 982px;
  position: relative;
  width: 1512px;
}

.weather-dashboard .hourly-forecast {
  background-color: #44444429;
  border-radius: 30px;
  box-shadow: 10px 10px 4px #00000080;
  height: 366px;
  left: 555px;
  position: absolute;
  top: 553px;
  width: 870px;
}

.weather-dashboard .group {
  height: 270px;
  left: 660px;
  position: absolute;
  top: 80px;
  width: 132px;
}

.weather-dashboard .overlap-group {
  background-color: #37363680;
  border-radius: 40px;
  height: 270px;
  position: relative;
  width: 130px;
}

.weather-dashboard .wind {
  height: 95px;
  left: 33px;
  position: absolute;
  top: 157px;
  width: 71px;
}

.weather-dashboard .text-wrapper {
  color: #ffffff;
  font-family: 'Poppins-Bold', Helvetica;
  font-size: 20px;
  font-weight: 700;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 65px;
}

.weather-dashboard .navigation {
  height: 55px;
  left: 4px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 55px;
}

.weather-dashboard .overlap {
  height: 140px;
  left: 28px;
  position: absolute;
  top: 13px;
  width: 82px;
}

.weather-dashboard .temperature {
  height: 111px;
  left: 0;
  position: absolute;
  top: 29px;
  width: 82px;
}

.weather-dashboard .text-wrapper-2 {
  color: #ffffff;
  font-family: 'Poppins-Bold', Helvetica;
  font-size: 20px;
  font-weight: 700;
  left: 12px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 81px;
}

.weather-dashboard .img {
  height: 80px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 80px;
}

.weather-dashboard .hour {
  color: #ffffff;
  font-family: 'Poppins-Bold', Helvetica;
  font-size: 24px;
  font-weight: 700;
  left: 3px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
}

.weather-dashboard .overlap-wrapper {
  height: 270px;
  left: 515px;
  position: absolute;
  top: 80px;
  width: 132px;
}

.weather-dashboard .overlap-group-wrapper {
  height: 105px;
  left: 30px;
  position: absolute;
  top: 147px;
  width: 77px;
}

.weather-dashboard .overlap-group-2 {
  height: 105px;
  position: relative;
  width: 75px;
}

.weather-dashboard .text-wrapper-3 {
  color: #ffffff;
  font-family: 'Poppins-Bold', Helvetica;
  font-size: 20px;
  font-weight: 700;
  left: 3px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 75px;
}

.weather-dashboard .navigation-2 {
  height: 75px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 75px;
}

.weather-dashboard .temperature-2 {
  height: 111px;
  left: 25px;
  position: absolute;
  top: 42px;
  width: 82px;
}

.weather-dashboard .text-wrapper-4 {
  color: #ffffff;
  font-family: 'Poppins-Bold', Helvetica;
  font-size: 20px;
  font-weight: 700;
  left: 15px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 81px;
}

.weather-dashboard .hour-2 {
  color: #ffffff;
  font-family: 'Poppins-Bold', Helvetica;
  font-size: 24px;
  font-weight: 700;
  left: 31px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 13px;
}

.weather-dashboard .div-wrapper {
  height: 270px;
  left: 370px;
  position: absolute;
  top: 80px;
  width: 132px;
}

.weather-dashboard .wind-2 {
  height: 95px;
  left: 34px;
  position: absolute;
  top: 157px;
  width: 70px;
}

.weather-dashboard .navigation-3 {
  height: 55px;
  left: 3px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 55px;
}

.weather-dashboard .overlap-group-3 {
  height: 140px;
  left: 25px;
  position: absolute;
  top: 13px;
  width: 82px;
}

.weather-dashboard .text-wrapper-5 {
  color: #ffffff;
  font-family: 'Poppins-Bold', Helvetica;
  font-size: 20px;
  font-weight: 700;
  left: 16px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 81px;
}

.weather-dashboard .hour-3 {
  color: #ffffff;
  font-family: 'Poppins-Bold', Helvetica;
  font-size: 24px;
  font-weight: 700;
  left: 6px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
}

.weather-dashboard .group-2 {
  height: 270px;
  left: 225px;
  position: absolute;
  top: 80px;
  width: 132px;
}

.weather-dashboard .wind-3 {
  height: 105px;
  left: 18px;
  position: absolute;
  top: 147px;
  width: 85px;
}

.weather-dashboard .overlap-group-4 {
  height: 105px;
  position: relative;
  width: 83px;
}

.weather-dashboard .text-wrapper-6 {
  color: #ffffff;
  font-family: 'Poppins-Bold', Helvetica;
  font-size: 20px;
  font-weight: 700;
  left: 15px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 75px;
}

.weather-dashboard .group-3 {
  height: 270px;
  left: 80px;
  position: absolute;
  top: 80px;
  width: 132px;
}

.weather-dashboard .navigation-4 {
  height: 55px;
  left: 5px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 55px;
}

.weather-dashboard .overlap-group-5 {
  height: 139px;
  left: 25px;
  position: absolute;
  top: 13px;
  width: 82px;
}

.weather-dashboard .temperature-3 {
  height: 110px;
  left: 0;
  position: absolute;
  top: 29px;
  width: 82px;
}

.weather-dashboard .text-wrapper-7 {
  color: #ffffff;
  font-family: 'Poppins-Bold', Helvetica;
  font-size: 20px;
  font-weight: 700;
  left: 15px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 80px;
}

.weather-dashboard .title {
  color: #ffffff;
  font-family: 'Poppins-Bold', Helvetica;
  font-size: 32px;
  font-weight: 700;
  left: 306px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 12px;
}

.weather-dashboard .element-forecast {
  height: 382px;
  left: 80px;
  position: absolute;
  top: 553px;
  width: 428px;
}

.weather-dashboard .weather-details {
  background-color: #44444429;
  border-radius: 30px;
  box-shadow: 10px 10px 4px #00000080;
  height: 330px;
  left: 645px;
  position: absolute;
  top: 174px;
  width: 780px;
}

.weather-dashboard .extra-details {
  height: 328px;
  left: 533px;
  position: absolute;
  top: 0;
  width: 247px;
}

.weather-dashboard .UV {
  height: 139px;
  left: 131px;
  position: absolute;
  top: 172px;
  width: 107px;
}

.weather-dashboard .text-time {
  height: 73px;
  left: 0;
  position: absolute;
  top: 66px;
  width: 111px;
}

.weather-dashboard .text-wrapper-8 {
  color: #ffffff;
  font-family: 'Poppins-Medium', Helvetica;
  font-size: 16px;
  font-weight: 500;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 41px;
  width: 107px;
}

.weather-dashboard .text-wrapper-9 {
  color: #ffffff;
  font-family: 'Poppins-SemiBold', Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 2px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 0;
  width: 105px;
}

.weather-dashboard .uv-white {
  height: 58px;
  left: 26px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 58px;
}

.weather-dashboard .pressure {
  height: 139px;
  left: 0;
  position: absolute;
  top: 172px;
  width: 114px;
}

.weather-dashboard .text-time-2 {
  height: 73px;
  left: 0;
  position: absolute;
  top: 66px;
  width: 118px;
}

.weather-dashboard .text-wrapper-10 {
  color: #ffffff;
  font-family: 'Poppins-Medium', Helvetica;
  font-size: 16px;
  font-weight: 500;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 41px;
  width: 113px;
}

.weather-dashboard .text-wrapper-11 {
  color: #ffffff;
  font-family: 'Poppins-SemiBold', Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 4px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 0;
  width: 110px;
}

.weather-dashboard .pressure-white {
  height: 58px;
  left: 28px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 58px;
}

.weather-dashboard .wind-speed {
  height: 138px;
  left: 131px;
  position: absolute;
  top: 21px;
  width: 107px;
}

.weather-dashboard .text-time-3 {
  height: 73px;
  left: 0;
  position: absolute;
  top: 65px;
  width: 111px;
}

.weather-dashboard .wind-4 {
  height: 59px;
  left: 25px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 60px;
}

.weather-dashboard .humidity {
  height: 133px;
  left: 0;
  position: absolute;
  top: 26px;
  width: 114px;
}

.weather-dashboard .text-time-4 {
  height: 73px;
  left: 0;
  position: absolute;
  top: 60px;
  width: 118px;
}

.weather-dashboard .humidity-2 {
  height: 50px;
  left: 29px;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 60px;
}

.weather-dashboard .icon-weather {
  height: 311px;
  left: 254px;
  position: absolute;
  top: -8px;
  width: 272px;
}

.weather-dashboard .overlap-group-6 {
  height: 311px;
  position: relative;
  width: 270px;
}

.weather-dashboard .type-of-weather {
  color: #ffffff;
  font-family: 'Poppins-SemiBold', Helvetica;
  font-size: 32px;
  font-weight: 600;
  height: 53px;
  left: 70px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 258px;
  width: 129px;
}

.weather-dashboard .clear {
  height: 270px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 270px;
}

.weather-dashboard .main-details {
  height: 285px;
  left: 24px;
  position: absolute;
  top: 15px;
  width: 206px;
}

.weather-dashboard .text-wrapper-12 {
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent;
  background: linear-gradient(
    180deg,
    rgb(255, 255, 255) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  background-clip: text;
  color: transparent;
  font-family: 'Poppins-Bold', Helvetica;
  font-size: 80px;
  font-weight: 700;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-fill-color: transparent;
  top: 0;
  white-space: nowrap;
  width: 204px;
}

.weather-dashboard .feels-like {
  height: 50px;
  left: 5px;
  opacity: 0.8;
  position: absolute;
  top: 89px;
  width: 190px;
}

.weather-dashboard .element-c {
  color: #ffffffcc;
  font-family: 'Poppins-SemiBold', Helvetica;
  font-size: 32px;
  font-weight: 400;
  left: 106px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 80px;
}

.weather-dashboard .span {
  font-weight: 600;
}

.weather-dashboard .text-wrapper-13 {
  font-family: 'Poppins-Bold', Helvetica;
  font-weight: 700;
}

.weather-dashboard .text-wrapper-14 {
  color: #ffffffcc;
  font-family: 'Poppins-SemiBold', Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 9px;
  width: 97px;
}

.weather-dashboard .sunset {
  height: 55px;
  left: 26px;
  position: absolute;
  top: 230px;
  width: 153px;
}

.weather-dashboard .text-time-5 {
  height: 55px;
  left: 59px;
  position: absolute;
  top: 0;
  width: 98px;
}

.weather-dashboard .sunset-2 {
  color: #ffffff;
  font-family: 'Poppins-SemiBold', Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
}

.weather-dashboard .text-wrapper-15 {
  color: #ffffff;
  font-family: 'Poppins-SemiBold', Helvetica;
  font-size: 16px;
  font-weight: 600;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 31px;
  width: 94px;
}

.weather-dashboard .sunset-white {
  height: 48px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 6px;
  width: 48px;
}

.weather-dashboard .sunrise {
  height: 55px;
  left: 26px;
  position: absolute;
  top: 165px;
  width: 153px;
}

.weather-dashboard .text-wrapper-16 {
  color: #ffffff;
  font-family: 'Poppins-SemiBold', Helvetica;
  font-size: 20px;
  font-weight: 600;
  left: 0;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 0;
  width: 92px;
}

.weather-dashboard .sunrise-white {
  height: 48px;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 4px;
  width: 48px;
}

.weather-dashboard .location-time-date {
  height: 344px;
  left: 80px;
  position: absolute;
  top: 174px;
  width: 524px;
}

.weather-dashboard .current-location {
  height: 62px;
  left: 1143px;
  position: absolute;
  top: 63px;
  width: 294px;
}

.weather-dashboard .overlap-2 {
  background-color: #3d951e;
  border-radius: 40px;
  box-shadow: 0px 4px 40px #00000040;
  height: 62px;
  position: relative;
  width: 292px;
}

.weather-dashboard .text-wrapper-17 {
  color: #ffffffcc;
  font-family: 'Poppins-ExtraBold', Helvetica;
  font-size: 22px;
  font-weight: 800;
  height: 62px;
  left: 64px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  text-align: center;
  top: 0;
  width: 200px;
}

.weather-dashboard .current-location-2 {
  height: 35px;
  left: 25px;
  object-fit: cover;
  position: absolute;
  top: 14px;
  width: 35px;
}

.weather-dashboard .search-bar {
  height: 62px;
  left: 259px;
  position: absolute;
  top: 63px;
  width: 805px;
}

.weather-dashboard .overlap-3 {
  background-color: #4444446e;
  border-radius: 40px;
  box-shadow: 0px 4px 40px #00000040;
  height: 62px;
  position: relative;
  width: 803px;
}

.weather-dashboard .text-wrapper-18 {
  color: #ffffff99;
  font-family: 'Poppins-Regular', Helvetica;
  font-size: 18px;
  font-weight: 400;
  left: 102px;
  letter-spacing: 0;
  line-height: normal;
  position: absolute;
  top: 20px;
  width: 621px;
}

.weather-dashboard .search {
  height: 46px;
  left: 33px;
  object-fit: cover;
  position: absolute;
  top: 8px;
  width: 40px;
}
```
