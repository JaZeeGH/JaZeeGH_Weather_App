document.addEventListener("DOMContentLoaded", () => {
    
    const dailyData = weatherData[currentCity + "_daily"];

    const dashboardTime = document.getElementById("dashboardTime");

    dashboardTime.innerHTML = dailyData.daily.time[0];

    const dashMinTemp = document.getElementById("dashMinTemp");
    const dashMaxTemp = document.getElementById("dashMaxTemp");

    dashMinTemp.innerHTML = dailyData.temperature_2m_min[0];
    dashMaxTemp.innerHTML = dailyData.temperature_2m_max[0];

    const cities = ['amsterdam','berlin','copenhagen','cork','paris','waterford'];

    cities.forEach((currentCity) => {
        const dailyData = weatherData[currentCity + "_daily"].daily;
        main.innerHTML = main.innerHTML + wetherweather.components.createDashCards(currentCity,dailyData);
        

    }) 



});
