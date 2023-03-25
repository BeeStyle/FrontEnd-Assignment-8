var quote = document.getElementById("Loc")
var quoteauth = document.getElementById("authloc")
var quotes = [`"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."`, `"It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all.in which case, you fail by default."`, `"Logic will get you from A to Z; imagination will get you everywhere."`, `"All you need is love. But a little chocolate now and then doesn't hurt."`]
var quotesauth = ["-- Albert Einstein", "-- J.K. Rowling", "-- Albert Einstein", "-- Charles M. Schulz"]
function DispQuote() {
    var x = Math.floor(Math.random() * 4)
    quote.innerHTML = quotes[x]
    quoteauth.innerHTML = quotesauth[x]
    console.log(x)
}