function display_refresh_data(){
    let refresh = 1000;// Refresh rate in milliseconds
    mytime = setTimeout('display_current_data()', refresh)
}

function display_current_data(){
    let current_data = new Date(Date.now())
    document.getElementById('current-data').innerHTML = current_data;
    display_refresh_data()
}

display_current_data()
