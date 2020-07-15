import './styles/styles.scss'

import './images/travel11.jpg'
import './images/travel2.jpg'

import { getCityDetails } from './js/geoApi'
import { updateUI } from './js/update'
import { postData } from './js/post'
import { getWeather } from './js/weatherApi'
import { getData } from './js/getData'




const submitBtn = document.getElementById('submitTripBtn');
const resetBtn = document.getElementById('resetTripBtn');
const printBtn = document.querySelector('.printBtn');
const addBtn = document.getElementById('addTripBtn');
const tripInput = document.getElementById('tripInput');
const departingInput = document.getElementById('departingInput');
const returningInput = document.getElementById('returningInput');
const geoUrl = 'http://api.geonames.org/searchJSON?q=';
const geonames_username = 'mdarban';

// Ref: shttps://www.weatherbit.io/api/weather-forecast-16-day
const weatherUrl = 'https://api.weatherbit.io/v2.0/forecast/daily';
const weather_key = '0a2095c586ae43179a6a6ea070dc8b03';

const pixUrl = "https://pixabay.com/api/?key=";
const pixKey = "17413191-ded9a3b6a1bae92e49b946100"

let cityName = '';
let country = '';
let bagsCnt = 0;
let note = '';



window.addEventListener('load', () => {
    console.log("page's loaded successfully");

    submitBtn.addEventListener('click', function() {


        console.log('depating date vallue: ' + departingInput.value + 'returning date value: ' + returningInput.value);

        let tem = '';
        try {
            tem = testDateDiff(departingInput.value, returningInput.value);
        } catch {
            console.log('could not run testDate');
        }

        console.log('+++++++++++++++++++++++' + tem);


        const timestamp = (new Date(departingInput.value).getTime());
        const returnTimestamp = (new Date(returningInput.value).getTime());
        const timestampNow = Date.now();
        const remDays = Math.round((timestamp - timestampNow) / (1000 * 3600 * 24));
        const tripLength = Math.round((returnTimestamp - timestamp) / (1000 * 3600 * 24));
        if (remDays > 16) {
            alert('Weather prediction is available only for the next 16 days!')
        }

        console.log(document.querySelector('input[name="destination"]').value);

        const response = Client.getCityDetails(geoUrl, tripInput.value, geonames_username)
            .then(function(data_geo) {
                console.log(response);
                cityName = data_geo.geonames[0].name;
                country = data_geo.geonames[0].countryName;
                const destLat = data_geo.geonames[0].lat;
                const destLng = data_geo.geonames[0].lng;
                const pop = data_geo.geonames[0].population;
                const weather_res = Client.getWeather(destLat, destLng, cityName, country, tripInput.value, weatherUrl, weather_key);

                return weather_res;



            })
            .then(function(data_weather) {
                const currentTemp = data_weather.data[0].temp;
                const departureTemp = data_weather.data[remDays].temp;
                const wDetails = data_weather.data[0].weather.description;
                console.log('weather api results for the next ' + remDays + ' day(s) in ' + cityName + ' is: ' + departureTemp + '; current temperature is: ' + currentTemp + '. Your trip length is: ' + tripLength + ' days.');
                const postRes = Client.postData('http://localhost:8080/add', { city: cityName, country, zipcode: tripInput, date: departingInput.value, returnDate: returningInput.value, temp: currentTemp, futureTemp: departureTemp, daysToTrip: remDays, tripLength, details: wDetails })

                Client.updateUI();
            })
            .then(async function() {
                const res = await fetch(`${pixUrl}${pixKey}&q=${cityName}&image_type=photo`);
                try {
                    const imageLink = await res.json();
                    const imgUrl = "url('" + imageLink.hits[0].webformatURL + "')";
                    document.querySelector(".destImage").setAttribute('src', imageLink.hits[0].webformatURL);

                } catch (error) {
                    console.log('error', error);
                }
            })


    });


    resetBtn.addEventListener('click', function() {

        tripInput.value = "Enter Zipcode/City";
        departingInput.value = "mm/dd/yyyy";
        returningInput.value = "mm/dd/yyyy";
        localStorage.clear();

    })
    printBtn.addEventListener('click', function() {

        window.print();

    });
    const addTripEvList = addBtn.addEventListener('click', function(event) {
        event.preventDefault();
        document.querySelector('#summary').scrollIntoView({ behavior: 'smooth' });
    })


})

function testDateDiff(start, end) {
    console.log('welcome to test date');
    if (start <= end) {
        return true;
    } else {
        alert('Please select a return date after start date of your trip!');
        return false;
    }
}




export {
    getData,
    getCityDetails,
    updateUI,
    postData,
    getWeather,
    testDateDiff,

}