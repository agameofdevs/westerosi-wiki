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
        $('.currentLordName').html('Unknown');
    }

    if (founderID == "") {
        $('.founder').html('Unknown');
    }
}

app.collectInfo = function () {

    $('.targaryanSigil').on('click', function () {
        houseID = 378;
        lordID = 1303;
        founderID = "";

        $('.houseHistory').hide();
        $('.targaryanHistory').show();
        app.getInfo();
    });

    $('.starkSigil').on('click', function () {
        houseID = 362;
        lordID = "";
        founderID = 209;
        // $('.history').clear();
        $('.houseHistory').hide();
        $('.starkHistory').show();
        app.getInfo();
    });

    $('.lannisterSigil').on('click', function () {
        houseID = 229;
        lordID = 238;
        founderID = 615;
        $('.houseHistory').hide();
        $('.lannisterHistory').show();
        app.getInfo();
    });

    $('.arrynSigil').on('click', function () {
        houseID = 7;
        lordID = 894;
        founderID = 144;
        $('.houseHistory').hide();
        $('.arrynHistory').show();
        app.getInfo();
    });

    $('.tullySigil').on('click', function () {
        houseID = 395;
        lordID = "";
        founderID = "";
        $('.houseHistory').hide();
        $('.tullyHistory').show();
        app.getInfo();
    });

    $('.greyjoySigil').on('click', function () {
        houseID = 169;
        lordID = 385;
        founderID = "";
        $('.houseHistory').hide();
        $('.greyjoyHistory').show();
        app.getInfo();
    });

    $('.baratheonSigil').on('click', function () {
        houseID = 17;
        lordID = 1029;
        founderID = 797;
        $('.houseHistory').hide();
        $('.baratheonHistory').show();
        app.getInfo();
    });

    $('.tyrellSigil').on('click', function () {
        houseID = 398;
        lordID = 691;
        founderID = 75;
        $('.houseHistory').hide();
        $('.tyrellHistory').show();
        app.getInfo();
    });

    $('.martellSigil').on('click', function () {
        houseID = 285;
        lordID = 326;
        founderID = 1718;
        $('.houseHistory').hide();
        $('.martellHistory').show();
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

    houseInfo[0].titles.join(", ")

    $('.houseName').html(`${houseInfo[0].name}`);
    $('.region').html(`${houseInfo[0].region}`);
    $('.emblem').html(`${houseInfo[0].coatOfArms}`);
    $('.houseMotto').html(`${houseInfo[0].words}`);
    $('.lordTitles').html(`${houseInfo[0].titles.join(', ')}`);
    $('.founder').html(`${founderInfo[0].name}`);
    $('.currentLordName').html(`${lordInfo[0].name}`);
    $('.founded').html(`${houseInfo[0].founded}`);
    $('.emblem').html(`<img class="emblemImage animated flipInY" src="assets/emblem${houseID}.jpg" alt="Image of house emblem for the ${houseInfo[0].name}">`);
    $('.currentLordImage').html(`<img class="lordImage animated flipInY" src="assets/lord${houseID}.jpg" alt="Image of current house lord, ${lordInfo[0].name} from ${houseInfo[0].name}">`);

    if (houseInfo[0].founded == "") {
        $('.founded').html('Unknown')
    }

    app.checkForEmptyValues();
}

// Start app
//put all the functions we need in here
app.init = function () {
    app.collectInfo();
    app.getInfo();
    app.displayInfo;
}

//document ready
$(function () {
    app.init();
    $('.siteInfo').show();
    $('.sigilSection').hide()
<<<<<<< HEAD
=======
    // $('header').show();
>>>>>>> 6b48a7cf424c99ad820086a7d7122bf91ed5eaa7
    $('main').hide();
    

    $('.goToWiki').on('click', function () {
        $('.sigilSection').show();
        $('html, body').animate({
            scrollTop: $('.sigilSection').offset().top
        })
        $('.siteInfo').fadeOut();
    })

    $('.sigil').on('click', function () {

        $('main').show();
        $('html, body').animate({
            scrollTop: $('main').offset().top
        }, 1000)
    });

    $('.arrowButton').on('click', function () {
        $('html, body').animate({
            scrollTop: $('header').offset().top
        }, 1000)
    })

    $('.houseHistory').hide();
});