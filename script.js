// Create app namespace to hold all methods
const app = {};
app.URL = 'https://www.anapioficeandfire.com/api/houses/';
app.Lord = 'https://www.anapioficeandfire.com/api/characters/'
app.founder = 'https://www.anapioficeandfire.com/api/characters/'



let houseID;
let lordID;
let founderID;
// Collect user input



app.checkForEmptyValues = () => {
    if (lordID == "") {

        $('.currentLord').html(`<h3>Unknown</h3>`);

    } else if (founderID == "") {

        $('.founder').html(`<h3>Unknown</h3>`);
    }
}




app.collectInfo = function () {


    $('.targaryanSigil').on('click', function () {
        houseID = 378;
        lordID = 1303;
        founderID = "";
        app.getInfo();
    });

    $('.starkSigil').on('click', function () {
        houseID = 362;
        lordID = "";
        founderID = 209;
        app.getInfo();

    });

    $('.lannisterSigil').on('click', function () {
        houseID = 229;
        lordID = 238;
        founderID = 615;
        app.getInfo();
    });

    $('.arrynSigil').on('click', function () {
        houseID = 7;
        lordID = 894;
        founderID = 144;
        app.getInfo();
    });

    $('.tullySigil').on('click', function () {
        houseID = 395;
        lordID = "";
        founderID = "";
        app.getInfo();
    });

    $('.greyjoySigil').on('click', function () {
        houseID = 169;
        lordID = 385;
        founderID = "";
        app.getInfo();
    });

    $('.baratheonSigil').on('click', function () {
        houseID = 17;
        lordID = 1029;
        founderID = 797;
        app.getInfo();
    });

    $('.tyrellSigil').on('click', function () {
        houseID = 398;
        lordID = 691;
        founderID = 75;
        app.getInfo();
    });

    $('.martellSigil').on('click', function () {
        houseID = 285;
        lordID = 326;
        founderID = 1718;
        app.getInfo();
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

    // let emblemPath = "assets/emblem3"

    $('.houseName').html(`<h3>${houseInfo[0].name}</h3>`);
    $('.region').html(`<h3>${houseInfo[0].region}</h3>`);
    $('.emblem').html(`<h3>${houseInfo[0].coatOfArms}</h3>`);
    $('.houseMotto').html(`<h3>${houseInfo[0].words}</h3>`);
    $('.lordTitles').html(`<h3>${houseInfo[0].titles}</h3>`);
    $('.founder').html(`<h3>${founderInfo[0].name}</h3>`);
    $('.currentLord').html(`<h3>${lordInfo[0].name}</h3>`);
    $('.founded').html(`<h3>${houseInfo[0].founded}</h3>`);
    $('.emblem').html(`<img src="assets/emblem${houseID}.jpg" alt="image of house emblem">`);
    $('.currentLordImage').html(`<img src="assets/lord${houseID}.jpg" alt="image of current house lord">`);


    app.checkForEmptyValues();

    console.log('house info', houseInfo);
    console.log('lord info', lordInfo);

}

// Start app
//put all the functions we need in here
app.init = function () {
    app.collectInfo();
    app.getInfo();
    app.displayInfo;
}

$(function () {
    app.init();
});