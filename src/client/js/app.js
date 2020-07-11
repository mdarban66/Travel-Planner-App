/** -----------------------------------Defining Functions-------------------------------------------- */

//Function: runs when the generate button is clicked
function clicked(event) {

    // event.preventDefault();
    console.log('clicked in app.js.......................................');

    let d = new Date();
    let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
    const apiKey = '&APPID=51154c16346f0637717951cefd7aa3d7';

    const baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';


    // const zip = document.getElementById('zip').value;
    // const feelings = document.getElementById('feelings').value;

    // Client.getData(`${baseURL}${zip}${apiKey}`)
    //     .then(function(data) {
    // Client.postData('/add', { temperature: data.main.temp, date: newDate, user_response: feelings });
    // Client.updateUI();
    // })

}



// document.getElementById('generate').addEventListener('click', clicked);
export { clicked }