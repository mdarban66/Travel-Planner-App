//Function: for routing & posting data to the server
const postData = async function(url, data) {
    console.log('postData data is: ' + data)
    const res = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)

    });
    try {
        const newData = await res.json();
        return newData;
    } catch (error) {
        console.log('error', error);
    }
}
export { postData }