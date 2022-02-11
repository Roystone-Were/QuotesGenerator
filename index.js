// var apiQuotes =[];

//Show new quote
function newQuote(){
    //picking random quote from array
    var quote =localQuotes[Math.floor(Math.random()*localQuotes.length)]
    console.log(quote);
}




 // get quotes from API
// async function getQuotes(){ //can run independently & wont stop browser from completing loading the page
//     var apiUrl ="https://type.fit/api/quotes";
//     try {
//       var response = await fetch(apiUrl);  
//       apiQuotes = await response.json();
//       newQuote();
//     } catch (error) {
 //Catch error here
//     }
// }//on clicking load
// getQuotes();
newQuote();