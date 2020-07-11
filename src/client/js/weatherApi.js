export const getWeather = async function(lat, lng, city, country, zip, url, key) {
    // sample: https://api.weatherbit.io/v2.0/forecast/daily?city=Raleigh,NC&key=0a2095c586ae43179a6a6ea070dc8b03&days=14 (maximum 16 days)
    //units=[M/I/S] -- M: Celcius, I: Fahrenheit
    const res = await fetch(`${url}?lat=${lat}&lon=${lng}&postal_code=${zip}&city=${city}&units=I&key=${key}`);
    try {
        const data_weather = await res.json();
        console.log(data_weather);
        return data_weather;
    } catch (error) {
        console.log('error', error);
    }

}