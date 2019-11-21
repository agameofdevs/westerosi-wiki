// Create app namespace to hold all methods
const app = {};
app.URL = 'https://www.anapioficeandfire.com/api/houses/378';
app.Lord = 'https://www.anapioficeandfire.com/api/characters/1303'
app.founder = 'https://www.anapioficeandfire.com/api/characters/209'



// Collect user input
app.collectInfo = function () {

}

// Make AJAX request with user inputted data
//houseID is a parameter that will change based on the div clicked on the interactive map. The div will trigger the ID of the house found in the API. 
//Once triggered, and will get us the information we want to append to our website. 

app.getInfo = function () {
    $.when($.ajax({
                url: `${app.URL}`,
                method: 'GET',
                dataType: 'json',
            }),
            $.ajax({
                url: `${app.Lord}`,
                method: 'GET',
                dataType: 'json',
            }),
            $.ajax({
                url: `${app.founder}`,
                method: 'GET',
                dataType: 'json',
            })
        )
        .then(function (resultOne, resultTwo, resultThree) {
            app.displayInfo(resultOne, resultTwo, resultThree);
        }).fail((er1, er2, er3) => {
            // console.log(er1,er2,er3);
        })
}
// Display data on the page
//we will be displaying information gathered from the API data, we will also be appending them to the page
app.displayInfo = (houseInfo, lordInfo, founderInfo) => {
    console.log(houseInfo, lordInfo, founderInfo)

    $('.houseName').append(`<h3>${houseInfo[0].name}</h3>`);
    $('.region').append(`<h3>${houseInfo[0].region}</h3>`);
    $('.emblem').append(`<h3>${houseInfo[0].coatOfArms}</h3>`);
    $('.houseMotto').append(`<h3>${houseInfo[0].words}</h3>`);
    $('.lordTitles').append(`<h3>${houseInfo[0].titles}</h3>`);
    $('.founder').append(`<h3>${founderInfo[0].name}</h3>`);
    $('.currentLord').append(`<h3>${lordInfo[0].name}</h3>`);
    $('.founded').append(`<h3>${houseInfo[0].founded}</h3>`);
    
    console.log('house info', houseInfo);
    console.log('lord info', lordInfo)
    if (lordInfo.name === "") {
        $('.houseShitLordShit').append(`<h3>unknown</h3>`);
    }
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