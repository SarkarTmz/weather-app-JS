const apiKey = "3d5f467fc9acd971f7e4820111c647f7";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=kathmandu";


async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

}

checkWeather();


