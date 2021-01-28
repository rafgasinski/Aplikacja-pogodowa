const API_Key = "0df42057e9f97bdaf7c5ffdedb2db1ab";
//https://openweathermap.org/current#data
let unitType = "standard";
//https://openweathermap.org/current#multi
let language = "en"


function CallByCityName(cityName) {
    API_Call("http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=" + unitType + "&appid=" + API_Key + "&lang=" + language);
}

function CallByCityID(cityID) {
    API_Call("http://api.openweathermap.org/data/2.5/weather?id=" + cityID + "&units=" + unitType + "&appid=" + API_Key + "&lang=" + language);
}

function CallByCordinates(x, y) {
    API_Call("http://api.openweathermap.org/data/2.5/weather?lat=" + x + "&lon=" + y + "&units=" + unitType + "&appid=" + API_Key + "&lang=" + language);
}

function API_Call(preparedURL) {
    $.ajax({
        url: preparedURL,
        type: "GET",
        success: function (result) {
            console.log(result);
        },
        error: function (error) {
            console.log(error);
        }
    })
}