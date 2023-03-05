const DEFAULT_REFRESH_TIMEOUT = 1000;

// task 6
// first realization
const printNumberInterval = (from, to) => {
    const intervalId = setInterval(() => {
        document.getElementById('print-number').innerHTML = from;
        to > from ? from += 1 : clearInterval(intervalId)
    }, DEFAULT_REFRESH_TIMEOUT)
}
// printNumberInterval(2, 10)

// second realization
const printNumberRecursion = (from, to) => {
    const intervalId = setTimeout(() => {
        document.getElementById('print-number').innerHTML = from;
        to > from ? from += 1 : clearInterval(intervalId);
        printNumberRecursion(from, to);
    }, DEFAULT_REFRESH_TIMEOUT)
}

printNumberRecursion(2, 10)
// task 7
if (sessionStorage.getItem('text') !== null) {
    document.getElementById('textarea').value = sessionStorage.getItem('text');
}
document.addEventListener('keyup', function (e) {
    sessionStorage.setItem('text', document.getElementById('textarea').value);
});