
$(document).ready(function(){

    var apiKey = 'a1fbb820'
    
    $("#movieForm").submit(function(event){
        event.preventDefault()

        var movie = $("#movie").val()

        var baseUrl = "https://www.omdbapi.com/?apikey="+apiKey

        var result = ''

        $.ajax({
            method: 'GET',
            url: baseUrl+"&t="+movie,
            success: function(data){
                console.log(data)

                result = `
                <img style="float:left" class="img-thumbnail" width= "200" height = "200" src="${data.Poster}">
                `

                $("#result").html(result)

                console.log(result);
            }
        
    })
 
   
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

    var zodiacSigns = {
      'capricorn':'Козерог',
      'aquarius':'Водолей',
      'pisces':'Рыбы',
      'aries':'Овен',
      'taurus':'Телец',
      'gemini':'Близнецы',
      'cancer':'Рак',
      'leo':'Лев',
      'virgo':'Девы',
      'libra':'Весы',
      'scorpio':'Скорпион',
      'sagittarius':'Стрелец'
    }
  
    if((month == 1 && day <= 20) || (month == 12 && day >=22)) {
      return zodiacSigns.capricorn;
    } else if ((month == 1 && day >= 21) || (month == 2 && day <= 18)) {
      return zodiacSigns.aquarius;
    } else if((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
      return zodiacSigns.pisces;
    } else if((month == 3 && day >= 21) || (month == 4 && day <= 20)) {
      return zodiacSigns.aries;
    } else if((month == 4 && day >= 21) || (month == 5 && day <= 20)) {
      return zodiacSigns.taurus;
    } else if((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
      return zodiacSigns.gemini;
    } else if((month == 6 && day >= 22) || (month == 7 && day <= 22)) {
      return zodiacSigns.cancer;
    } else if((month == 7 && day >= 23) || (month == 8 && day <= 23)) {
      return zodiacSigns.leo;
    } else if((month == 8 && day >= 24) || (month == 9 && day <= 23)) {
      return zodiacSigns.virgo;
    } else if((month == 9 && day >= 24) || (month == 10 && day <= 23)) {
      return zodiacSigns.libra;
    } else if((month == 10 && day >= 24) || (month == 11 && day <= 22)) {
      return zodiacSigns.scorpio;
    } else if((month == 11 && day >= 23) || (month == 12 && day <= 21)) {
      return zodiacSigns.sagittarius;
    }
  }
  */