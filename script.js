const quotes = {
    science: ["quote 1", "quote 2", "quote 3"],
    motivational: ["quote 1", "quote 2", "quote 3"],
    sprituial:["quote 1", "quote 2", "quote 3"],
    wisdom:["quote 1", "quote 2", "quote 3"]
};
  
  let currentCategory = "motivational";
  let currentQuoteIndex = 0;
  
  const quoteDisplay = document.getElementById("quoteDisplay");
  const categoryDropdown = document.getElementById("categoryDropdown");
  
  function displayQuote() {
    const categoryQuotes = quotes[currentCategory];
    const quote = categoryQuotes[currentQuoteIndex];
    quoteDisplay.textContent = quote;
  }
  
  function nextQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes[currentCategory].length;
    displayQuote();
  }
  
  function prevQuote() {
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes[currentCategory].length) % quotes[currentCategory].length;
    displayQuote();
  }
  
  function randomQuote() {
    currentQuoteIndex = Math.floor(Math.random() * quotes[currentCategory].length);
    displayQuote();
  }
  
  function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  }
  
  function changeFontSize(size) {
    quoteDisplay.style.fontSize = size + "px";
  }
  
  categoryDropdown.addEventListener("change", function () {
    currentCategory = categoryDropdown.value;
    currentQuoteIndex = 0;
    displayQuote();
  });
  
  displayQuote(); // Initial display
  