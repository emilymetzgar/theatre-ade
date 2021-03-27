$(document).ready(function () {
  //store the omdb api key
  var apiKey = 'a1fbb820'
  //form to store users search option and api data
  $("#movieForm").submit(function (event) {
    event.preventDefault()

    var movie = $("#movie").val() //value for user movie search

    var baseUrl = "https://www.omdbapi.com/?apikey=" + apiKey //base url from ombd

    var result = ""; //store results in empty string to allow them to change by user

    var movieSign;

    $.ajax({ //method to retreive info from omdb api
      method: 'GET',
      url: baseUrl + "&t=" + movie,
      success: function (data) {

        result = `
                <img class="img-thumbnail" width= "400" height = "400" src="${data.Poster}">
                `

        $("#result").html(result) //post result in html

        var dateArr = data.Released.split(" "); //split data from object
        movieSign = getZodiacSign(parseInt(dateArr[0]), dateArr[1]); //get data from object
        //use parse int to convert number

        var releaseDate = data.Released //assign data from api object to variable
        var plot = data.Plot //assign data from api object to variable

        $("#release-date").html("Movie's B Day: " + releaseDate + " "); //post info in html
        $("#movie-sign-title").html(movieSign) //post info in html
        $("#plot-info").html("<h2>Plot</h2> " + plot); //post info in html

        //conditional statements to append data from each api depending on what the user searches, 
        //taking the release date of the movie, and appending it to the zodiac signs 
        if (releaseDate === true) {
          $("#release-date").append(releaseDate);
        }
        //method to retreive info from astrology api
        const URL = 'https://aztro.sameerkumar.website/?sign=' + movieSign + '&day=today';
        fetch(URL, {
            method: 'POST'
          })
          .then(response => response.json())
          .then(json => {
            const signInfo = json.description;

            $("#sign-info").html(signInfo); //post info in html
          });
      }
    });
  });
})

//function to get zodiac signs to be used in conditional statements 
//depending on what movie the user searches 
//using the release date data from omdb api
function getZodiacSign(day, month) {

  var signs = {
    'capricorn': 'Capricorn',
    'aquarius': 'Aquarius',
    'pisces': 'Pisces',
    'aries': 'Aries',
    'taurus': 'Taurus',
    'gemini': 'Gemini',
    'cancer': 'Cancer',
    'leo': 'Leo',
    'virgo': 'Virgo',
    'libra': 'Libra',
    'scorpio': 'Scorpio',
    'sagittarius': 'Sagittarius'
  }

  if ((month == "Jan" && day <= 20) || (month == "Dec" && day >= 22)) {
    return signs.capricorn

  } else if ((month == "Jan" && day >= 21) || (month == "Feb" && day <= 18)) {
    return signs.aquarius;

  } else if ((month == "Feb" && day >= 19) || (month == "Mar" && day <= 20)) {
    return signs.pisces;

  } else if ((month == "Mar" && day >= 21) || (month == "Apr" && day <= 20)) {
    return signs.aries;

  } else if ((month == "Apr" && day >= 21) || (month == "May" && day <= 20)) {

    return signs.taurus;

  } else if ((month == "May" && day >= 21) || (month == "Jun" && day <= 20)) {

    return signs.gemini;

  } else if ((month == "Jun" && day >= 22) || (month == "Jul" && day <= 22)) {

    return signs.cancer;

  } else if ((month == "Jul" && day >= 23) || (month == "Aug" && day <= 23)) {

    return signs.leo;

  } else if ((month == "Aug" && day >= 24) || (month == "Sep" && day <= 23)) {

    return signs.virgo;

  } else if ((month == "Sep" && day >= 24) || (month == "Oct" && day <= 23)) {
    return signs.libra;


  } else if ((month == "Oct" && day >= 24) || (month == "Nov" && day <= 22)) {

    return signs.scorpio;

  } else if ((month == "Nov" && day >= 23) || (month == "Dec" && day <= 21)) {

    return signs.sagittarius;
  }
};