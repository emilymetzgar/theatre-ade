
$(document).ready(function () {

  var apiKey = 'a1fbb820'

  $("#movieForm").submit(function (event) {
    event.preventDefault()

    var movie = $("#movie").val()

    var baseUrl = "https://www.omdbapi.com/?apikey=" + apiKey

    var result = ''

   


    $.ajax({
      method: 'GET',
      url: baseUrl + "&t=" + movie,
      success: function (data) {
        console.log(data)

        result = `
                <img style="float:left" class="img-thumbnail" width= "200" height = "200" src="${data.Poster}">
                `

        $("#result").html(result)

        console.log(result);
        console.log(data.released)
      }
    
      });
    
  
   
    const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
      fetch(URL, {
        method: 'POST'
    })
    .then(response => response.json())
        .then(json => {
          const date = json.current_date;
          console.log(json);
        });
    });
  })

/**
 * Return zodiac sugn by month and day

 @param day
 @param month
  @return {string} name of zodiac sign

 function getZodiacSign(day, month) {

    var signs = {
      'capricorn':'capricorn',
      'aquarius':'aquarius',
      'pisces':'pisces'
      'aries':'aries'
      'taurus': 'taurus'
      'gemini':'gemini'
      'cancer': 'cancer'
      'leo': 'leo'
      'virgo':'virgo'
      'libra':'libra',
      'scorpio':'scorpio'
      'sagittarius':'sagittarius'
    }

    function recMovies() {
      var movieChoice = movieSearch ();

      //conditional statements that assign movies a zodiac sign
      //depending on when movie was released (movie's bday)
    }
    if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
      return signs.capricorn;
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
      return signs.aquarius;
    } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
      return signs.pisces;
    } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
      return signs.aries;
    } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
      return signs.taurus;
    } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
      return signs.gemini;
    } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
      return signs.cancer;
    } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
      return signs.leo;
    } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
      return signs.virgo;
    } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
      return signs.libra;
    } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
      return signs.scorpio;
    } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
      return signs.sagittarius;
    }
      // For loop
  for (var i = 0; i < options.length; i++) {
    var movieResult = getRandomElement(possibleCharacters);
    result.push(possibleChar);
  }
   return result.join('');
}
  // Get references to the #generate element

var generateBtn = document.querySelector("#generate");

function writePassword() {

  // Runs the function that will generate the password
  var password = generatePassword();

  // Selects on the HTML where the password is shown
  var passwordText = document.querySelector('#password');
  // Makes the value of the element the string generated from the generatePassword function
  passwordText.value = password;
}
//add event listener to button
generateBtn.addEventListener("click", writePassword);

  */