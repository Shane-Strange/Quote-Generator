const quotes = [
  'Be yourself; everyone else is already taken.',
  'Im selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you cant handle me at my worst, then you sure as hell dont deserve me at my best.',
  'So many books, so little time.',
  'Two things are infinite: the universe and human stupidity; and Im not sure about the universe.',
  'A room without books is like a body without a soul.',
  'Be who you are and say what you feel, because those who mind dont matter, and those who matter dont mind.',
  'Youve gotta dance like theres nobody watching, Love like youll never be hurt, Sing like theres nobody listening, And live like its heaven on earth.',
  'You know youre in love when you cant fall asleep because reality is finally better than your dreams.',
  'You only live once, but if you do it right, once is enough.',
  'Be the change that you wish to see in the world.',
];

const usedIndexes = new Set();
const quoteElement = document.getElementById('quote');

function generateQuote() {
  if (usedIndexes.size >= quotes.length) {
    usedIndexes.clear();
  }
  while (true) {
    const randomIdx = Math.floor(Math.random() * quotes.length);

    if (usedIndexes.has(randomIdx)) continue;

    const quote = quotes[randomIdx];
    quoteElement.innerHTML = quote;
    usedIndexes.add(randomIdx);
    break;
  }
}
