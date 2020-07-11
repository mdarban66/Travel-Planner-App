//Function: for updating DOM with the last entry, that is retrieved from the app
const updateUI = async function() {

    const resp = await fetch('/all');
    try {
        const data = await resp.json();
        const i = data.length - 1;

        console.log(`Date of updated data is: ${data[i].city}`);
        document.getElementById('city').innerHTML = data[i].city;
        document.getElementById('temp').innerHTML = data[i].temp;
        document.getElementById('departing').innerHTML = data[i].date;
        document.getElementById('returning').innerHTML = data[i].returnDate;
        document.getElementById('futureTemp').innerHTML = data[i].futureTemp;
        document.getElementById('dayss').innerHTML = data[i].daysToTrip;
        document.getElementById('country').innerHTML = data[i].country;
        document.getElementById('sDetails').innerHTML = data[i].details;
        document.getElementById('length').innerHTML = data[i].length;

        document.getElementById("content").scrollIntoView({ behavior: "smooth" });

    } catch (error) {
        console.log('error', error);
    }
}
export { updateUI }