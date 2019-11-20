// Create app namespace to hold all methods
const app = {};
app.URL = 'https://www.anapioficeandfire.com/api/houses/378';



// Collect user input
app.collectInfo = function () {

}

// Make AJAX request with user inputted data
//houseID is a parameter that will change based on the div clicked on the interactive map. The div will trigger the ID of the house found in the API. 
//Once triggered, and will get us the information we want to append to our website. 

app.getInfo = function () {
    return $.ajax({
        url: `${app.URL}`,
        method: 'GET',
        dataType: 'json',
    }).then(function (result) {
        // app.displayInfo(result)
        console.log(result)
    })
}

// Display data on the page
//we will be displaying information gathered from the API data, we will also be appending them to the page
app.displayInfo =  (houseInfo) => {
    houseInfo.forEach((houseObject) => {
        // $('.houseShit')
            // .append(`<h2>${houseObject.name}</h2>`);
        console.log(houseObject.name);
    })
}

// Start app
//put all the functions we need in here
app.init = function () {
    app.getInfo();
    app.displayInfo;
}

$(function () {
    app.init();
});