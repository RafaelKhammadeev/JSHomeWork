const refreshTimeout = 1000;
let currentData = null;

function displayCurrentData() {
    currentData = new Date(Date.now())
    document.getElementById('current-data').innerHTML = currentData;
}

setInterval(() => displayCurrentData(), currentData === null ? 0 : refreshTimeout);
