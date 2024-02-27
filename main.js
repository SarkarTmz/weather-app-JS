// const apiKey = "3d5f467fc9acd971f7e4820111c647f7";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?unit=metric&q=kathmandu";


// async function checkWeather(){
//     const response = await fetch(apiUrl = `&appid=${apiKey}`);
//     var data = await response.json();

//     console.log(data);
// }

// checkWeather();



const apiKey = "3d5f467fc9acd971f7e4820111c647f7";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=kathmandu&appid=${apiKey}`;
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    try {
        const response = await fetch(apiUrl + city );
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            document.querySelector(".city").innerHTML = data.name;
            document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
            document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
            document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
        } else {
            console.error("Failed to fetch weather data.");
        }
    } catch (error) {
        console.error("An error occurred:", error);
    }

}
searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

checkWeather();
