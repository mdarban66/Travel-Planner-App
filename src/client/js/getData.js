//Function: for routing & getting data from server
const getData = async function(url) {
    const res = await fetch(url);
    try {
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log('error', error);
    }
}
export { getData }