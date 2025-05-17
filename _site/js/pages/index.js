document.addEventListener("DOMContentLoaded", () => {
  const now = dayjs();
  const dashTime = now.format(`dddd, HH:mm`);
  const main = document.querySelector('main');
  main.innerHTML = main.innerHTML + createDashboardSite(dashTime);//adding the dashboard to the main page

  dataStore.list().forEach((currentCity) => { //using the data-store array to initiate the cities for the dashboard cards


    const dailyData = weatherData[currentCity.city + "_daily"].daily; 


    const dashMinTemp = dailyData.temperature_2m_min[0];
    const dashMaxTemp = dailyData.temperature_2m_max[0];

    //creating the weather image using the weather code 
    const dashWeatherImage = document.querySelectorAll("dashWeatherImage"); //queryselector did not work because of the for each loop I had to take querySelectorAll
    const dashWeatherCode = dailyData.weather_code[0];


    if (dashWeatherCode === 0) { 
      dashWeatherImage.src = "/images/sun.png";
    } else if (dashWeatherCode >= 1 && dashWeatherCode <= 3) {
      dashWeatherImage.src = "/images/partlycloudy.png";
    } else if (dashWeatherCode >= 45 && dashWeatherCode <= 48) {
      dashWeatherImage.src = "/images/fog.png";
    } else if (dashWeatherCode >= 51 && dashWeatherCode <= 55) {
      dashWeatherImage.src = "/images/drizzle.png";
    } else if (dashWeatherCode >= 56 && dashWeatherCode <= 57) {
      dashWeatherImage.src = "/images/freezingdrizzle.png";
    } else if (dashWeatherCode >= 61 && dashWeatherCode <= 65) {
      dashWeatherImage.src = "/images/rain.png";
    } else if (dashWeatherCode >= 66 && dashWeatherCode <= 67) {
      dashWeatherImage.src = "/images/freezingrain.png";
    } else if (dashWeatherCode >= 71 && dashWeatherCode <= 75) {
      dashWeatherImage.src = "/images/snow.png";
    } else if (dashWeatherCode >= 80 && dashWeatherCode <= 83) {
      dashWeatherImage.src = "/images/rainshower.png";
    } else if (dashWeatherCode >= 85 && dashWeatherCode <= 86) {
      dashWeatherImage.src = "/images/snowshower.png";
    } else if (dashWeatherCode === 95) {
      dashWeatherImage.src = "/images/thunderstorm.png";
    } else if (dashWeatherCode >= 96 && dashWeatherCode <= 99) {
      dashWeatherImage.src = "/images/hailstorm.png";
    }



    main.innerHTML = main.innerHTML + createDashCards(currentCity, dashWeatherImage, dashMinTemp, dashMaxTemp); //within the foor loop adding the dashcard so it will be automatically multiplied for each city.


  })


})


