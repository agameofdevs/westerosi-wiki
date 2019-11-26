// App namespace for holding all methods
const app = {};
// App namespace for holding all methods


// URLs for API Call
app.URL = 'https://www.anapioficeandfire.com/api/houses/';
app.lordURL = 'https://www.anapioficeandfire.com/api/characters/';
app.founderURL = 'https://www.anapioficeandfire.com/api/characters/';
// URLs for API Call


// Declaring variables
let houseID, lordID, founderID;
// Declaring variables


// Error handling function in case we get undefined values for lordID & founderID
app.checkForEmptyValues = () => {
    if (lordID == "") {
        $('.currentLordName').html('Unknown');
    }

    if (founderID == "") {
        $('.founder').html('Unknown');
    }
}
// Error handling function in case we get null values for lordID & founderID



// Functions that would tell the AJAX calls which house information we’d like to see based on what sigil we clicked. 
app.collectInfo = function () {

    $('.targaryanSigil').on('click keypress', function () {
        houseID = 378;
        lordID = 1303;
        founderID = "";
        $('.houseHistory').hide();
        $('.targaryanHistory').show();
        app.getInfo();
    });

    $('.starkSigil').on('click keypress', function () {
        houseID = 362;
        lordID = "";
        founderID = 209;
        $('.houseHistory').hide();
        $('.starkHistory').show();
        app.getInfo();
    });

    $('.lannisterSigil').on('click keypress', function () {
        houseID = 229;
        lordID = 238;
        founderID = 615;
        $('.houseHistory').hide();
        $('.lannisterHistory').show();
        app.getInfo();
    });

    $('.arrynSigil').on('click keypress', function () {
        houseID = 7;
        lordID = 894;
        founderID = 144;
        $('.houseHistory').hide();
        $('.arrynHistory').show();
        app.getInfo();
    });

    $('.tullySigil').on('click keypress', function () {
        houseID = 395;
        lordID = "";
        founderID = "";
        $('.houseHistory').hide();
        $('.tullyHistory').show();
        app.getInfo();
    });

    $('.greyjoySigil').on('click keypress', function () {
        houseID = 169;
        lordID = 385;
        founderID = "";
        $('.houseHistory').hide();
        $('.greyjoyHistory').show();
        app.getInfo();
    });

    $('.baratheonSigil').on('click keypress', function () {
        houseID = 17;
        lordID = 1029;
        founderID = 797;
        $('.houseHistory').hide();
        $('.baratheonHistory').show();
        app.getInfo();
    });

    $('.tyrellSigil').on('click keypress', function () {
        houseID = 398;
        lordID = 691;
        founderID = 75;
        $('.houseHistory').hide();
        $('.tyrellHistory').show();
        app.getInfo();
    });

    $('.martellSigil').on('click keypress', function () {
        houseID = 285;
        lordID = 326;
        founderID = 1718;
        $('.houseHistory').hide();
        $('.martellHistory').show();
        app.getInfo();
    });
}
// Functions that would tell the AJAX calls which house information we’d like to see based on what sigil we clicked. 



// Make AJAX request based on which sigil the user selected. Each sigil has its own unique values for houseID, lordID, and founderID
app.getInfo = function () {
    $.when($.ajax({
        url: `${app.URL}${houseID}`,
        method: 'GET',
        dataType: 'json',
    }),
        $.ajax({
            url: `${app.lordURL}${lordID}`,
            method: 'GET',
            dataType: 'json',
        }),
        $.ajax({
            url: `${app.founderURL}${founderID}`,
            method: 'GET',
            dataType: 'json',
        })
    )
    .then(function (resultOne, resultTwo, resultThree) {
        app.displayInfo(resultOne, resultTwo, resultThree);
    });
}
// Make AJAX request based on which sigil the user selected. Each sigil has its own unique values for houseID, lordID, and founderID



// Display data on the page by appending them
app.displayInfo = (houseInfo, lordInfo, founderInfo) => {
    houseInfo[0].titles.join(", ");

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
// Display data on the page by appending them


// Init Functinon
app.init = function () {
    app.collectInfo();
    app.getInfo();
    app.displayInfo;
}
// Init Functinon


//Document Ready
$(function () {
    app.init();
    $('.siteInfo').show();
    $('.sigilSection').hide();
    $('main').hide();
    
    $('.skipLink').on('click', function(){
        $('.sigilSection').show();
        $('html, body').animate({
            scrollTop: $('.sigilSection').offset().top
        })
        $('.siteInfo').fadeOut();
    })

    $('.goToWiki').on('click', function () {
        $('.sigilSection').show();
        $('html, body').animate({
            scrollTop: $('.sigilSection').offset().top
        })
        $('.siteInfo').fadeOut();
    })

    $('.sigil').on('click keypress', function () {
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
//Document Ready