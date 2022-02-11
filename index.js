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
   if(quoteText.length > 50){
       quoteText.classList.add("long-quote");
   }else{
    quoteText.classList.remove("long-quote");

   }
    quoteText.innerHTML = quote.text;
}
newQuote();



// // get quotes from API
// async function getQuotes(){ //can run independently & wont stop browser from completing loading the page
//     var apiUrl ="https://type.fit/api/quotes";
//     try {
//       var response = await fetch(apiUrl);  
//       apiQuotes = await response.json();
//       newQuote();
//     } catch (error) {
//         //Catch error here
//     }
// }//on clicking load
// getQuotes();