const quotes = {
    science: ["Two things are infinite: the universe and human stupidity; and I'm not sure about the universe."
    ,"Never memorize something that you can look up.", 
    "An expert is a person who has made all the mistakes that can be made in a very narrow field.",
    "I'm sure the universe is full of intelligent life. It's just been too intelligent to come here."],
    motivational: ["Don't be pushed around by the fears in your mind. Be led by the dreams in your heart",
     "It’s only after you’ve stepped outside your comfort zone that you begin to change, grow, and transform.",
      "Success is not how high you have climbed, but how you make a positive difference to the world.",
      "Start each day with a positive thought and a grateful heart."],
    sprituial:["More smiling, less worrying. More compassion, less judgment. More blessed, less stressed. More love, less hate.", 
    "Believe in your infinite potential. Your only limitations are those you set upon yourself.", 
    "We are not human beings having a spiritual experience. We are spiritual beings having a human experience",
     "How hurtful it can be to deny one's true self and live a life of lies just to appease others"],
    wisdom:["The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.", 
    "It is better to remain silent at the risk of being thought a fool, than to talk and remove all doubt of it.",
     "Whenever you find yourself on the side of the majority, it is time to reform.","Knowing yourself is the beginning of all wisdom."]
};
  
  let currentCategory = "science";
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
  