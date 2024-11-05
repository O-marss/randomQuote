quotes = [
  "Be yourself; everyone else is already taken.",
  "So many books, so little time.",
  "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
  "You only live once, but if you do it right, once is enough.",
  "In three words I can sum up everything I've learned about life: it goes on",
  "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  "It is better to be hated for what you are than to be loved for what you are not.",
  "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
  "To live is the rarest thing in the world. Most people exist, that is all.",
];

let lastQuoteIndex = -1;

function getRandomQuote() {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * quotes.length);
  } while (randomIndex === lastQuoteIndex);
  lastQuoteIndex = randomIndex;
  return quotes[randomIndex];
}

document.getElementById("generate").onclick = function () {
  document.getElementById("quote").innerText = getRandomQuote();
};
