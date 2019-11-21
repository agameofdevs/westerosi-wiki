// Create app namespace to hold all methods
const app = {};
app.URL = 'https://www.anapioficeandfire.com/api/houses/';
app.Lord = 'https://www.anapioficeandfire.com/api/characters/'
app.founder = 'https://www.anapioficeandfire.com/api/characters/'



// Collect user input
app.collectInfo = function () {

    let houseID;
    let lordID;
    let founderID;

    ('.targaryan').on('click', function () {
        houseID = 378;
        lordID = 1303;
        founderID = "";

    });

    ('.stark').on('click', function () {
        houseID = 362;
        lordID = "";
        founderID = 209;

    });

    ('.lannister').on('click', function () {
        houseID = 229;
        lordID = 238;
        founderID = 615;
    });

    ('.arryn').on('click', function () {
        houseID = 7;
        lordID = 894;
        founderID = 144;
    });

    ('.tully').on('click', function () {
        houseID = 395;
        lordID = "";
        founderID = "";
    });

    ('.greyjoy').on('click', function () {
        houseID = 169;
        lordID = 385;
        founderID = "";
    });

    ('.baratheon').on('click', function () {
        houseID = 17;
        lordID = 1029;
        founderID = 797;
    });

    ('.tyrell').on('click', function () {
        houseID = 398;
        lordID = 691;
        founderID = 75;
    });

    ('.martell').on('click', function () {
        houseID = 285;
        lordID = 326;
        founderID = 1718;
    });


}

// Make AJAX request with user inputted data
//houseID is a parameter that will change based on the div clicked on the interactive map. The div will trigger the ID of the house found in the API. 
//Once triggered, and will get us the information we want to append to our website. 

app.getInfo = function () {
    $.when($.ajax({
        url: `${app.URL}${houseID}`,
        method: 'GET',
        dataType: 'json',
    }),
        $.ajax({
            url: `${app.Lord}${lordID}`,
            method: 'GET',
            dataType: 'json',
        }),
        $.ajax({
            url: `${app.founder}${founderID}`,
            method: 'GET',
            dataType: 'json',
        })
    )
        .then(function (resultOne, resultTwo, resultThree) {
            app.displayInfo(resultOne, resultTwo, resultThree);
        }).fail((er1, er2, er3) => {
            // console.log(er1,er2,er3);
        });
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
    console.log('lord info', lordInfo);
    if (lordInfo.name === "") {
        $('.houseShitLordShit').append(`<h3>unknown</h3>`);
    }
}

// Start app
//put all the functions we need in here
app.init = function () {
    app.getInfo();
    app.collectInfo;
    app.displayInfo;
}

$(function () {
    app.init();
});