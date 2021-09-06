const weatherApi = {
    key : "f25c88523adc6daff404470640eb00dd",
    baseUrl  : "https://api.openweathermap.org/data/2.5/weather"
}

const searchInput = document.getElementById("input-box");

searchInput.addEventListener("keypress", (event)=> {

    if (event.keyCode == 13)
    {
        getWeatherReport(searchInput.value);
        document.querySelector(".weather-body").style.display = "block";
        searchInput.value = "";
    }

});

function getWeatherReport(city) {

    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
    .then((res) => {
        return res.json();
    }).then(showWeatherReport)
    .catch((err) => {
        console.log(err);
    });

}

function showWeatherReport(res) {

    let city = document.getElementById("city");
    city.innerText = `${res.name}, ${res.sys.country}`;
    let temp = document.getElementById("temp");
    temp.innerHTML = `${Math.round(res.main.temp)}&deg;C`;
    let minMax = document.getElementById("min-max");
    minMax.innerHTML = `${Math.floor(res.main.temp_min)}&deg;C (min)/ ${Math.ceil(res.main.temp_max)}&deg;C (max)`;
    let weather = document.getElementById("weather");
    weather.innerHTML = `${res.weather[0].main}`;
    let img = document.getElementById("img");
    let date = document.getElementById("date");
    let todayDate = new Date();
    date.innerText = dateManage(todayDate);

    if (weather.innerHTML == "Clear")
    {document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')";
    img.innerHTML = "<i class='fas fa-cloud-sun fa-3x'></i>"}
    else if (weather.innerHTML == "Clouds")
    {document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1612464610724-dc07bb0b775d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80')";
    img.innerHTML = "<i class='fas fa-cloud fa-3x'></i>"}
    else if (weather.innerHTML == "Rain")
    {document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmFpbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')";
    img.innerHTML = "<i class='fas fa-cloud-showers-heavy fa-3x'></i>"}
    else if (weather.innerHTML == "Snow")
    {document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1551582045-6ec9c11d8697?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80')";
    img.innerHTML = "<i class='fas fa-snowflake fa-3x'></i>"}
    else if (weather.innerHTML == "Thunderstorm")
    {document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1613820070607-ef1d3ccc07f9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80')";
    img.innerHTML = "<i class='fas fa-bolt fa-3x'></i>"}
    else if (weather.innerHTML == "Haze")
    {document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1518727269976-133995b9a4b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80')";
    img.innerHTML = "<i class='fas fa-smog fa-3x'></i>"}

}

function dateManage(dateArg) {

    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let year = dateArg.getFullYear();
    let month = months[dateArg.getMonth()];
    let date = dateArg.getDate();
    let day = days[dateArg.getDay()];

    return `${date} ${month} (${day}), ${year}`;

}



















// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// f25c88523adc6daff404470640eb00dd