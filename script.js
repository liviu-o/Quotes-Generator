const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

//Show loading
function loading() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

//Hide loading
function complete() {
  loader.hidden = true;
  quoteContainer.hidden = false;
}

// Show New Quote
function newQuote() {
  loading();
  // Pick a random quote from apiQuotes array
  // const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
  if (quote.text.length > 100) {
    quoteText.classList.remove("quote-text");
    quoteText.classList.add("long-quote");
  }
  quoteText.textContent = quote.text;
  if (!quote.author) {
    authorText.textContent = "Unknown";
  } else {
    authorText.textContent = quote.author;
  }
  complete();
}

// // Get quotes from API
// async function getQuotes() {
//   loading();
//   const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
//   try {
//     const response = await fetch(apiUrl);
//     apiQuotes = await response.json();
//     newQuote();
//   } catch (error) {
//     // Catch error
//   }
// }

// Tweet Quote
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} -
   ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
}

// Event Listeners
newQuoteBtn.addEventListener("click", newQuote);
twitterBtn.addEventListener("click", tweetQuote);

// On Load
// getQuotes();
newQuote();
