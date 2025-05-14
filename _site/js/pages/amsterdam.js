document.addEventListener("DOMContentLoaded", () => {

    const urlParams = new URLSearchParams(window.location.search);
    const currentCity = urlParams.get('city');

    const dailyData = weatherData[currentCity + "_daily"].daily;
    const hourlyData = weatherData[currentCity + "_hourly"].hourly;
    const time = document.getElementById("time");
    const maxWind = document.getElementById("maxWind");
    const maxTemp = document.getElementById("maxTemp");

    const now = dayjs(); // create a new date object that represents this time
    const currentHour = now.hour(); // 0 - 23 as

    const currentTime = document.getElementById('currentTime');
    currentTime.innerHTML = now.hour();

    currentCity.innerHTML = document.getElementById('city');
    time.innerHTML = dailyData.time[0];
    maxTemp.innerHTML = dailyData.temperature_2m_max[0];
    maxWind.innerHTML = dailyData.wind_speed_10m_max[0];

    const hourlyTemp = document.getElementById('hourlyTemp');
    const hourlyMaxWind = document.getElementById('hourlyMaxWind');

    hourlyTemp.innerHTML = hourlyData.temperature_2m[currentHour];
    hourlyMaxWind.innerHTML = hourlyData.wind_speed_10m[currentHour];


    
    const dailyWeatherCode = document.getElementById('dailyWeatherCode');
    dailyWeatherCode.innerHTML = dailyData.weather_code[0];
    const weatherImage = document.getElementById('weatherImage');

    if (dailyWeatherCode === 0) {
        weatherImage.src = "/images/sun.png";
    } else if (dailyWeatherCode >= 1 && dailyWeatherCode <= 3) {
        weatherImage.src = "/images/sun.png";
    } else if (dailyWeatherCode >= 45 && dailyWeatherCode <= 48) {
        weatherImage.src = "/images/fog.png";
    } else if (dailyWeatherCode >= 51 && dailyWeatherCode <= 55) {
        weatherImage.src = "/images/drizzle.png";
    } else if (dailyWeatherCode <= 56 && dailyWeatherCode <= 57) {
        weatherImage.src = "/images/freezingdrizzle.png";
    } else if (dailyWeatherCode <= 61 && dailyWeatherCode <= 65) {
        weatherImage.src = "/images/rain.png";
    } else if (dailyWeatherCode <= 66 && dailyWeatherCode <= 67) {
        weatherImage.src = "/images/freezingrain.png";
    }




});

