// Create app namespace to hold all methods
const app = {};
app.URL = 'https://www.anapioficeandfire.com/api/houses/378';
app.Lord = 'https://www.anapioficeandfire.com/api/characters/1303'



// Collect user input
app.collectInfo = function () {

}

// Make AJAX request with user inputted data
//houseID is a parameter that will change based on the div clicked on the interactive map. The div will trigger the ID of the house found in the API. 
//Once triggered, and will get us the information we want to append to our website. 

app.getInfo = function () {
    $.ajax({
        url: `${app.URL}`,
        method: 'GET',
        dataType: 'json',
    }).then(function () {
        // app.displayInfo(result)
        $.ajax({
            url: `${app.URL}`,
            method: 'GET',
            dataType: 'json',
        }).then(function (resultOne, resultTwo) {
            app.displayInfo(resultOne, resultTwo);
            // console.log(result)
        });
    })
}
// Display data on the page
//we will be displaying information gathered from the API data, we will also be appending them to the page
app.displayInfo = (houseInfo, lordInfo) => {

    $('.houseShit').append(`<h3>${houseInfo.name}</h3>`)
    $('.houseShit').append(`<h3>${houseInfo.region}</h3>`)
    $('.houseShit').append(`<h3>${houseInfo.coatOfArms}</h3>`)
    $('.houseShit').append(`<h3>${houseInfo.words}</h3>`)
    $('.houseShit').append(`<h3>${houseInfo.titles}</h3>`)
    $('.houseShit').append(`<h3>${houseInfo.founder}</h3>`)
    $('.houseShit').append(`<h3>${lordInfo.name}</h3>`)
    $('.houseShit').append(`<h3>${houseInfo.name}</h3>`)

    console.log(houseInfo.name);
    console.log()

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