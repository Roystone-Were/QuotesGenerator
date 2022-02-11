var quoteContainer = document.getElementById("quote-generator");
var twitterButton = document.getElementById("twitter-button");
var newQuoteButton = document.getElementById("new-quote");
var quoteText = document.getElementById("quote");
var authorText = document.getElementById("author");

// var apiQuotes =[];

//Show new quote
function newQuote(){
    //picking random quote from array
    var quote =localQuotes[Math.floor(Math.random()*(localQuotes.length))]
   //checking if author field is blank and if it is we set to "unknown"
   if(!quote.author){
       authorText.innerHTML ="~Unknown~"
   }else {
       authorText.innerHTML = quote.author
   }
    //checking quote length to determine styling
   if(quoteText.length > 120){
       quoteText.classList.add("long-quote");
   }else{
    quoteText.classList.remove("long-quote");

   }
    quoteText.innerHTML = quote.text;

}

//to tweet the quote
function tweetQuote(){
    var twitterURL =`https://twitter.com/intent/tweet?text=${quoteText.innerHTML} - ${authorText.innerHTML}`; //this template string allows us to pass in a variable,and it will be converted into a string
    window.open(twitterURL, "_blank") //allows twitter to open. "_blank" allows twitter window to open in a new tab
}

//event listeners
newQuoteButton.addEventListener("click", newQuote);
// twitterButton.addEventListener("click", tweetQuote); 👈 WRITTEN IN HTML INLINE, AS IT DOES NOT WORK PROPERLY HERE 

//On load
newQuote();