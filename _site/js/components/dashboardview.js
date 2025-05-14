document.addEventListener("DOMContentLoaded", () => {
    
    const urlParams = new URLSearchParams(window.location.search);
    const currentCity = 'amsterdam'
    
    const dailyData = weatherData[currentCity + "_daily"];

    const dashboardTime = document.getElementById("dashboardTime");

    dashboardTime.innerHTML = dailyData.daily.time[0];

    const cities = [amsterdam, berlin, copenhagen, cork, waterford];



});
