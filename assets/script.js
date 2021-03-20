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

