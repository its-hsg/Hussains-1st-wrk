// Array of quotes
const quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
  "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
  "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. - Oprah Winfrey",
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
  "Life is what happens when you're busy making other plans. - John Lennon"
];

// Function to get a random quote
function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

// Function to display a random quote
function displayRandomQuote() {
  const quoteElement = document.getElementById("header");
  quoteElement.innerText = getRandomQuote();
}

// Event listener for the button
document.getElementById("new-quote").addEventListener('click', displayRandomQuote);

// Display a random quote when the page loads
window.onload = displayRandomQuote;
