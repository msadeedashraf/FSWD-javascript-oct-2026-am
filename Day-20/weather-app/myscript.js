


const apiKey = "e6371e622ecf5ce41a555eb7a5dd5d94";
      //const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
      //const apiUrl = "https://api.openweathermap.org/data/4.0/onecall/current?";

      // https://api.openweathermap.org/data/4.0/onecall/current?lat={lat}&lon={lon}&appid={API key}

      const apiUrl = ""

      const searchBox = document.querySelector('.search input');
      const searchBtn = document.querySelector('.search button');
      const weatherBox = document.querySelector('.weather');
      const errorBox = document.querySelector('.error');
      const weatherIcon = document.querySelector('#weather-icon');
      
      let city = 'london';
      
      
      let latitude = 43.219466489363825;
      let longitude = -79.92168941124035;      
      console.log(searchBox.value)
      
      apiUrl= `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=en&appid=${apiKey}`


alert("This is a test")

console.log("myname is sadeed")






/*
document.addEventListener("DOMContentLoaded", () => {

    navigator.geolocation.getCurrentPosition(
        (position) => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            console.log("Latitude:", latitude);
            console.log("Longitude:", longitude);

            // Call your function once location is available
            loadData(latitude, longitude);
        },
        (error) => {
            console.error("Location Error:", error.message);
        }
    );

});

function loadData(lat, lon) {
    console.log("Loading data for:", lat, lon);

    // Use coordinates for API calls, maps, weather, etc.
}

*/

/*

      

      searchBtn.addEventListener('click', () => {
        checkWeather(searchBox.value);
      })

      async function checkWeather(city){
        // const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const response = await fetch(apiUrl);

        if(response.status == 404){
          errorBox.style.display = "block";
          weatherBox.style.display = "none";
        }else{
          errorBox.style.display = "none";
          weatherBox.style.display = "block";

          var data = await response.json();

          console.log(data);

          document.querySelector('.city').innerHTML = data.name;
          document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
          document.querySelector('.humidity').innerHTML = data.main.humidity + "%";
          document.querySelector('.wind').innerHTML = data.wind.speed + "km/h";

          
          if(data.weather[0].main == "Clouds"){
            weatherIcon.innerHTML = '<i class="ri-cloudy-2-fill"></i>';

          }else if(data.weather[0].main == "Clear"){
            weatherIcon.innerHTML = '<i class="ri-sun-fill"></i>';
          }else if(data.weather[0].main == "Rain"){
            weatherIcon.innerHTML = '<i class="ri-rainy-fill"></i>';
            console.log('cld')
          }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.innerHTML = '<i class="ri-drizzle-fill"></i>';
          }else if(data.weather[0].main == "Mist"){
            weatherIcon.innerHTML = '<i class="ri-mist-line"></i>';
          }
        }
      }


      checkWeather(city);
      */