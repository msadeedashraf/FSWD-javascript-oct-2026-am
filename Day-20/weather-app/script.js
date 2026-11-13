const apiKey = "e6371e622ecf5ce41a555eb7a5dd5d94";


let apiUrl = "";

const searchBox = document.querySelector('.search input');
const searchBtn = document.querySelector('.search button');
const weatherBox = document.querySelector('.weather');
const errorBox = document.querySelector('.error');
const weatherIcon = document.querySelector('#weather-icon');

let city = 'london';

let latitude = 43.219466489363825;
let longitude = -79.92168941124035;


// ======================================
// METHOD 1: CREATE URL USING CITY
// ======================================

function createCityURL(city) {

    apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${encodeURIComponent(city)}&appid=${apiKey}`;

    console.log("City API URL:", apiUrl);

    checkWeather();
}


// ======================================
// METHOD 2: CREATE URL USING LOCATION
// ======================================

function createLocationURL(lat, lon) {

    apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=en&appid=${apiKey}`;

    console.log("Location API URL:", apiUrl);

    checkWeather();
}


// ======================================
// SEARCH BUTTON - SEARCH BY CITY
// ======================================

searchBtn.addEventListener('click', () => {

    city = searchBox.value.trim();

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    createCityURL(city);

});


// ======================================
// FETCH WEATHER DATA
// ======================================

async function checkWeather() {

    try {

        const response = await fetch(apiUrl);

        if (!response.ok) {

            errorBox.style.display = "block";
            weatherBox.style.display = "none";
            return;
        }

        const data = await response.json();

        console.log("Weather Data:", data);

        errorBox.style.display = "none";
        weatherBox.style.display = "block";

        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.temp').innerHTML =
            Math.round(data.main.temp) + "°C";

        document.querySelector('.humidity').innerHTML =
            data.main.humidity + "%";

        document.querySelector('.wind').innerHTML =
            (data.wind.speed * 3.6).toFixed(1) + " km/h";


        if (data.weather[0].main == "Clouds") {

            weatherIcon.innerHTML =
                '<i class="ri-cloudy-2-fill"></i>';

        } else if (data.weather[0].main == "Clear") {

            weatherIcon.innerHTML =
                '<i class="ri-sun-fill"></i>';

        } else if (data.weather[0].main == "Rain") {

            weatherIcon.innerHTML =
                '<i class="ri-rainy-fill"></i>';

        } else if (data.weather[0].main == "Drizzle") {

            weatherIcon.innerHTML =
                '<i class="ri-drizzle-fill"></i>';

        } else if (data.weather[0].main == "Mist") {

            weatherIcon.innerHTML =
                '<i class="ri-mist-line"></i>';

        } else {

            weatherIcon.innerHTML =
                '<i class="ri-cloud-line"></i>';
        }

    } catch (error) {

        console.error("API Error:", error.message);

        errorBox.style.display = "block";
        weatherBox.style.display = "none";
    }
}


// ======================================
// INITIAL PAGE LOAD - GET USER LOCATION
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(

            (position) => {

                latitude = position.coords.latitude;
                longitude = position.coords.longitude;

                console.log("Latitude:", latitude);
                console.log("Longitude:", longitude);

                createLocationURL(latitude, longitude);

            },

            (error) => {

                console.error("Location Error:", error.message);

                // Use default coordinates
                createLocationURL(latitude, longitude);
            }
        );

    } else {

        createLocationURL(latitude, longitude);
    }

});
