var quotes = [ 
      {    quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",    source: "Helen Keller"  },  
      {    quote: "It is during our darkest moments that we must focus to see the light.",    source: "Aristotle"  },  
      {    quote: "Hardships often prepare ordinary people for an extraordinary destiny.",    source: "C.S. Lewis"  },  
      {    quote: "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.",    source: "Steve Jobs"  }, 
       {    quote: "The two most important days in your life are the day you are born and the day you find out why.",    source: "Mark Twain"  }];

document.getElementById('get-quote-button').onclick = function() {
  // choose a random quote
  var quote = quotes[Math.floor(Math.random() * quotes.length)];

  // display the quote
  document.getElementById('quote').innerHTML = quote.quote;
  document.getElementById('source').innerHTML = "-   "+quote.source;
};
