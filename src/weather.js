const weather = document.querySelector(".js-weather");

const CODES = "coords";
const API_KEY = "8eb7c766c2a456a590cf65c1b9380ff0"; //openweather의 API

function getWeather(lat, lon) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(function (response) {
        return response.json();
    })
        .then(function (json) {
            const temperature = json.main.temp;
            const place = json.name;
            weather.innerText = `${temperature} @ ${place}`
        });
}

function saveCodes(codesObj) {
    localStorage.setItem(CODES, JSON.stringify(codesObj));
}

//좌표 가져오는데 성공했을 때
function handleGeoSuccess(position) {
    const latitude = position.CODES.latitude; //위도
    const longitude = position.CODES.longitude; //경도
    const codesObj = {
        latitude,
        longitude
    };
    saveCodes(codesObj);
    getWeather(latitude, longitude);
}

function handleGeoError(position) {
    console.log("Can't access geo location");
}

function askForCodes() {
    navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function loadCodes() {
    const loadedCodes = localStorage.getItem(CODES);
    if (loadedCodes === null) {
        askForCodes();
    } else {
        const parsedCodes = JSON.parse(loadedCodes);
        getWeather(parsedCodes.latitude, parsedCodes.longitude);
    }
}


function init() {
    loadCodes();
}

init();