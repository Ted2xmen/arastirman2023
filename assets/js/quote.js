var quotes = [

 
    '<a href="https://www.w3schools.com/" target="_blank">Visit W3Schools.com!</a> ',
    '<a href="https://www.w3schools.com/" target="_blank">Müzeleri Keşfet!</a>',
    '<a href="https://www.w3schools.com/" target="_blank">Koleksiyonları Keşfet!</a>',
    '<a href="https://www.w3schools.com/" target="_blank">Faydalı Youtube Videoları!</a>',
    '<a href="https://www.w3schools.com/" target="_blank">Visit W3Schools.com!</a>',




]

function newQuote() {
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];


}


