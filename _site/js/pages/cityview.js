document.addEventListener("DOMContentLoaded", () => {
  const main = document.querySelector('main');
  const urlParams = new URLSearchParams(window.location.search);
  const currentCity = urlParams.get('city');

  const dailyData = weatherData[currentCity + "_daily"].daily;
  const hourlyData = weatherData[currentCity + "_hourly"].hourly;
  const time = document.getElementById("time");
  const maxWind = dailyData.wind_speed_10m_max[0];
  const maxTemp = dailyData.temperature_2m_max[0];

  const now = dayjs(); // create a new date object that represents this time
  const currentHour = now.hour(); // 0 - 23 as

  const currentTime = now.hour();;

  const dashTime = now.format(`dddd, HH:mm`);
  currentCity.innerHTML = document.getElementById('city');

  const hourlyTemp = hourlyData.temperature_2m[currentHour];
  const hourlyMaxWind = hourlyData.wind_speed_10m[currentHour];

  const hourlyWeatherCode = hourlyData.weather_code[0];
  const weatherImage = document.querySelectorAll('weatherImage');

  if (hourlyWeatherCode === 0) {
    weatherImage.src = "/images/sun.png";
  } else if (hourlyWeatherCode >= 1 && hourlyWeatherCode <= 3) {
    weatherImage.src = "/images/partlycloudy.png";
  } else if (hourlyWeatherCode >= 45 && hourlyWeatherCode <= 48) {
    weatherImage.src = "/images/fog.png";
  } else if (hourlyWeatherCode >= 51 && hourlyWeatherCode <= 55) {
    weatherImage.src = "/images/drizzle.png";
  } else if (hourlyWeatherCode >= 56 && hourlyWeatherCode <= 57) {
    weatherImage.src = "/images/freezingdrizzle.png";
  } else if (hourlyWeatherCode >= 61 && hourlyWeatherCode <= 65) {
    weatherImage.src = "/images/rain.png";
  } else if (hourlyWeatherCode >= 66 && hourlyWeatherCode <= 67) {
    weatherImage.src = "/images/freezingrain.png";
  } else if (hourlyWeatherCode >= 71 && hourlyWeatherCode <= 75) {
    weatherImage.src = "/images/snow.png";
  } else if (hourlyWeatherCode >= 80 && hourlyWeatherCode <= 83) {
    weatherImage.src = "/images/rainshower.png";
  } else if (hourlyWeatherCode >= 85 && hourlyWeatherCode <= 86) {
    weatherImage.src = "/images/snowshower.png";
  } else if (hourlyWeatherCode === 95) {
    weatherImage.src = "/images/thunderstorm.png";
  } else if (hourlyWeatherCode >= 96 && hourlyWeatherCode <= 99) {
    weatherImage.src = "/images/hailstorm.png";
  }


  main.innerHTML = main.innerHTML + createCityPoc (currentCity,dashTime,hourlyTemp,hourlyMaxWind,maxTemp,weatherImage,maxWind);


  for (let i = 0; i < 7; i++) {

    let now = dayjs();
    
    const cardTime = now.add(i, 'day');
    const formattedCardTime = cardTime.format('dddd');
    
    const cardMinTemp = dailyData.temperature_2m_min[i];
    const cardMaxTemp = dailyData.temperature_2m_max[i];


    const cardWeatherImage = document.querySelectorAll("cardWeatherImage"); //queryselector did not work because of the for each loop I had to take querySelectorAll
    const cardWeatherCode = dailyData.weather_code[i];


    if (cardWeatherCode === 0) {
      cardWeatherImage.src = "/images/sun.png";
    } else if (cardWeatherCode >= 1 && cardWeatherCode <= 3) {
      cardWeatherImage.src = "/images/partlycloudy.png";
    } else if (cardWeatherCode >= 45 && cardWeatherCode <= 48) {
      cardWeatherImage.src = "/images/fog.png";
    } else if (cardWeatherCode >= 51 && cardWeatherCode <= 55) {
      cardWeatherImage.src = "/images/drizzle.png";
    } else if (cardWeatherCode >= 56 && cardWeatherCode <= 57) {
      cardWeatherImage.src = "/images/freezingdrizzle.png";
    } else if (cardWeatherCode >= 61 && cardWeatherCode <= 65) {
      cardWeatherImage.src = "/images/rain.png";
    } else if (cardWeatherCode >= 66 && cardWeatherCode <= 67) {
      cardWeatherImage.src = "/images/freezingrain.png";
    } else if (cardWeatherCode >= 71 && cardWeatherCode <= 75) {
      cardWeatherImage.src = "/images/snow.png";
    } else if (cardWeatherCode >= 80 && cardWeatherCode <= 83) {
      cardWeatherImage.src = "/images/rainshower.png";
    } else if (cardWeatherCode >= 85 && cardWeatherCode <= 86) {
      cardWeatherImage.src = "/images/snowshower.png";
    } else if (cardWeatherCode === 95) {
      cardWeatherImage.src = "/images/thunderstorm.png";
    } else if (cardWeatherCode >= 96 && cardWeatherCode <= 99) {
      cardWeatherImage.src = "/images/hailstorm.png";
    }



    main.innerHTML = main.innerHTML + createDayCards(formattedCardTime, cardWeatherImage,cardMinTemp,cardMaxTemp);
  }




});

