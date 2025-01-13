const quotes = [
    "Meditation is the art of quieting the mind, stilling the endless chatter of thought, and finding the peace that lies within.",
    "The mind is everything. What you think you become.",
    "In the depths of winter, I finally learned that within me there lay an invincible summer.",
    "The only way to do great work is to love what you do.",
    "Life is what happens to you while you're busy making other plans.",
  ];

  function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").textContent = quotes[randomIndex];
  }





