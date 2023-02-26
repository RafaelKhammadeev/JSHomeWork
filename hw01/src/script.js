const FIRST_REFRESH_TIMEOUT = 0;
const DEFAULT_REFRESH_TIMEOUT = 1000;
let currentData = null;

function displayCurrentData(){
    currentData = new Date(Date.now());
    document.getElementById('current-data').innerHTML = currentData.toUTCString();
}

setInterval(
    () => displayCurrentData(),
    Object.is(currentData, null) ? FIRST_REFRESH_TIMEOUT : DEFAULT_REFRESH_TIMEOUT
);
