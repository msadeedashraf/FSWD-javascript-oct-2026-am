const apiKey = "e6371e622ecf5ce41a555eb7a5dd5d94";

// let latitude = 43.219466489363825;
// let longitude = -79.92168941124035;      

let latitude = "";
let longitude = "";

let apiUrl = ""
//let city = 'london';


document.addEventListener("DOMContentLoaded", () => {

    navigator.geolocation.getCurrentPosition(
        (position) => {
            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            console.log("Latitude:", latitude);
            console.log("Longitude:", longitude);

            
            // Call your function once location is available
            createURL(latitude, longitude);
        },
        (error) => {
            console.error("Location Error:", error.message);
        }
    );
    
});

 function createURL(lat, lon) {

    return apiUrl= `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=en&appid=${apiKey}`
    

 }


    
    
//apiUrl= `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&lang=en&appid=${apiKey}`


console.log(apiUrl)

document.getElementById("apikey").innerHTML = apiUrl
