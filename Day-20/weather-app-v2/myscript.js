
// const apiKey = "YOUR_API_KEY";
const apiKey = "e6371e622ecf5ce41a555eb7a5dd5d94";
const baseUrl =
  "https://api.openweathermap.org/data/2.5/weather";

const geoUrl =
  "https://api.openweathermap.org/geo/1.0";

let apiUrl = "";
let latitude = null;
let longitude = null;
let detectedCountry = "";
let selectedCountry = "";
let city = "";

let searchVersion = 0;

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const countrySelect = document.querySelector("#countrySelect");
const locationResults = document.querySelector("#locationResults");

const weatherBox = document.querySelector(".weather");
const errorBox = document.querySelector(".error");
const weatherIcon = document.querySelector("#weather-icon");


// ==========================================
// COUNTRY DROPDOWN
// ==========================================

// Browser-supported ISO country names
const countryNames = new Intl.DisplayNames(
  ["en"],
  { type: "region" }
);

function loadCountries() {

  const regionCodes = [];

  // ISO 3166-1 alpha-2 codes
  for (let a = 65; a <= 90; a++) {
    for (let b = 65; b <= 90; b++) {

      const code =
        String.fromCharCode(a, b);

      const name = countryNames.of(code);

      if (name && name !== code) {
        regionCodes.push({ code, name });
      }
    }
  }

  regionCodes.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  countrySelect.innerHTML =
    '<option value="">All countries</option>';

  regionCodes.forEach(country => {

    const option = document.createElement("option");

    option.value = country.code;
    option.textContent = country.name;

    countrySelect.appendChild(option);
  });
}


// ==========================================
// DETECT USER LOCATION
// ==========================================


function detectLocation() {

    if (!navigator.geolocation) {
        console.error("Geolocation is not supported");

        // Default coordinates: Hamilton, Ontario
        createLocationURL(latitude, longitude);
        return;
    }

    navigator.geolocation.getCurrentPosition(

        async (position) => {

            latitude = position.coords.latitude;
            longitude = position.coords.longitude;

            console.log("Latitude:", latitude);
            console.log("Longitude:", longitude);

            // Load weather immediately
            // Don't wait for reverse geocoding
            if (searchVersion === 0) {
                createLocationURL(latitude, longitude);
            }

            // Detect country separately
            try {

                const url =
                    `${geoUrl}/reverse?lat=${latitude}` +
                    `&lon=${longitude}&limit=1&appid=${apiKey}`;

                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error(
                        `Country lookup failed: ${response.status}`
                    );
                }

                const locations = await response.json();

                if (locations.length > 0) {

                    detectedCountry = locations[0].country;

                    if (!selectedCountry) {
                        selectedCountry = detectedCountry;
                        countrySelect.value = detectedCountry;
                    }

                    console.log("Detected Country:", detectedCountry);
                }

            } catch (error) {
                console.error("Country detection:", error.message);
            }

        },

        (error) => {

            console.error("Location Error:", error.message);

            // Use your predefined coordinates as fallback
            if (searchVersion === 0) {
                createLocationURL(latitude, longitude);
            }

        },

        {
            enableHighAccuracy: false,
            timeout: 10000,
            maximumAge: 300000
        }
    );
}



// ==========================================
// CREATE URL USING COORDINATES
// ==========================================

async function createLocationURL(lat, lon) {

  apiUrl =
    `${baseUrl}?lat=${lat}&lon=${lon}` +
    `&units=metric&lang=en&appid=${apiKey}`;

  await checkWeather(apiUrl);
}


// ==========================================
// SEARCH CITY USING COUNTRY
// ==========================================


async function searchCity() {

    city = searchBox.value.trim();

    if (!city) {
        showError("Please enter a city name");
        return;
    }

    const currentSearch = ++searchVersion;

    try {

        const query = selectedCountry
            ? `${city},${selectedCountry}`
            : city;

        const url =
            `${geoUrl}/direct?q=${encodeURIComponent(query)}` +
            `&limit=5&appid=${apiKey}`;

        console.log("Geocoding URL:", url);

        const response = await fetch(url);

        if (!response.ok) {

            const errorText = await response.text();

            console.error("API Response:", errorText);

            throw new Error(
                `City lookup failed: HTTP ${response.status}`
            );
        }

        const locations = await response.json();

        if (currentSearch !== searchVersion) return;

        const matches = selectedCountry
            ? locations.filter(
                location =>
                    location.country === selectedCountry
            )
            : locations;

        if (matches.length === 0) {
            showError("No matching city found");
            locationResults.innerHTML = "";
            return;
        }

        errorBox.style.display = "none";

        displayLocationResults(matches, currentSearch);

    } catch (error) {

        if (currentSearch === searchVersion) {
            console.error("Search Error:", error.message);
            showError(error.message);
        }
    }
}



// ==========================================
// DISPLAY MATCHING LOCATIONS
// ==========================================

function displayLocationResults(locations, version) {

  locationResults.innerHTML = "";

  locations.forEach(location => {

    const button = document.createElement("button");

    button.type = "button";
    button.className = "location-option";

    const countryName =
      countryNames.of(location.country);

    button.textContent = [
      location.name,
      location.state,
      countryName
    ].filter(Boolean).join(", ");

    button.addEventListener("click", async () => {

      if (version !== searchVersion) return;

      locationResults.innerHTML = "";

      city = location.name;

      await createLocationURL(
        location.lat,
        location.lon
      );

    });

    locationResults.appendChild(button);
  });
}


// ==========================================
// FETCH AND DISPLAY WEATHER
// ==========================================

async function checkWeather(url) {

  try {

    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Weather API: ${response.status}`);
    }

    const data = await response.json();

    console.log("Weather Data:", data);

    errorBox.style.display = "none";
    weatherBox.style.display = "block";

    document.querySelector(".city").textContent =
      data.name;

    document.querySelector(".temp").textContent =
      Math.round(data.main.temp) + "°C";

    document.querySelector(".humidity").textContent =
      data.main.humidity + "%";

    document.querySelector(".wind").textContent =
      (data.wind.speed * 3.6).toFixed(1) + " km/h";

    const condition = data.weather[0].main;

    if (condition === "Clouds") {
      weatherIcon.innerHTML =
        '<i class="ri-cloudy-2-fill"></i>';

    } else if (condition === "Clear") {
      weatherIcon.innerHTML =
        '<i class="ri-sun-fill"></i>';

    } else if (condition === "Rain") {
      weatherIcon.innerHTML =
        '<i class="ri-rainy-fill"></i>';

    } else if (condition === "Drizzle") {
      weatherIcon.innerHTML =
        '<i class="ri-drizzle-fill"></i>';

    } else if (condition === "Mist") {
      weatherIcon.innerHTML =
        '<i class="ri-mist-line"></i>';

    } else {
      weatherIcon.innerHTML =
        '<i class="ri-cloud-line"></i>';
    }

  } catch (error) {
    showError(error.message);
  }
}


// ==========================================
// ERROR DISPLAY
// ==========================================

function showError(message) {

  errorBox.textContent = message;
  errorBox.style.display = "block";
  weatherBox.style.display = "none";

}


// ==========================================
// EVENTS
// ==========================================

searchBtn.addEventListener("click", searchCity);

searchBox.addEventListener("keydown", (event) => {

  if (event.key === "Enter") {
    searchCity();
  }

});

countrySelect.addEventListener("change", () => {

  selectedCountry = countrySelect.value;

  // Invalidate earlier searches
  searchVersion++;

  locationResults.innerHTML = "";

  if (searchBox.value.trim()) {
    searchCity();
  }

});


// ==========================================
// INITIAL LOAD
// ==========================================

loadCountries();
detectLocation();
