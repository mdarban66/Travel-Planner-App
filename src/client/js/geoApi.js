export const getCityDetails = async(geoUrl, destination, username) => {

    // http://api.geonames.org/searchJSON?q=45220&maxRows=10&username=mdarban
    const res = await fetch(`${geoUrl}${destination}&maxRows=10&username=${username}`);
    console.log("in api.js: " + geoUrl + destination + '&maxRows=10&username=' + username);
    try {
        const data_geo = await res.json();
        console.log(data_geo);
        return data_geo;
    } catch (error) {
        console.log("error", error);
    }
};