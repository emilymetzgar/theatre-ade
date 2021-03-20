const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
fetch(URL, {
    method: 'POST'
})
.then(response => response.json())
.then(json => {
    const sign = json.current_sign;
    console.log(sign);
});

