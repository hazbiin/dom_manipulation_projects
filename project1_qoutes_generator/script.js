 // variables 
let btn = document.querySelector('#new-qoute');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote:'"Life is either a daring adventure or nothing at all."',
        person:"Helen Keller"
    },
    {
        quote: `"I have not failed. I've just found 10,000 ways that won't work."`,
        person: "Thomas Edison"
    },
    {
        quote: '"Success is not final, failure is not fatal: It is the courage to continue that counts."',
        person: "Winston Churchill"
    },
    {
        quote: '"Happiness is not something ready-made. It comes from your own actions."',
        person: "Dalai Lama"
    },
    {
        quote: '"Love the life you live. Live the life you love."',
        person: "Bob Marley"
    },
    {
        quote: '"You must be the change you wish to see in the world."',
        person: "Mahatma Gandhi"
    },
    {
        quote: '"The only way to do great work is to love what you do."',
        person: "Steve Jobs"
    },
    {
        quote: '"Life isn’t about finding yourself. Life is about creating yourself."',
        person: "George Bernard Shaw"
    },
    {
        quote: `"Opportunities don't happen. You create them."`,
        person: "Chris Grosser"
    },
    {
        quote: '"The mind is everything. What you think, you become."',
        person: "Buddha"
    },
    {
        quote: '"The journey of a thousand miles begins with one step."',
        person: "Lao Tzu"
    },
    {
        quote: '"You can’t go back and change the beginning, but you can start where you are and change the ending."',
        person: "C.S. Lewis"
    },
    {
        quote: '"The only person you are destined to become is the person you decide to be."',
        person: "Ralph Waldo Emerson"
    },
    {
        quote: '"Believe you can and you’re halfway there."',
        person: "Theodore Roosevelt"
    },
    {
        quote: '"Yesterday is history, tomorrow is a mystery, but today is a gift. That is why it is called the present."',
        person: "Bil Keane"
    },
    {
        quote: '"It does not matter how slowly you go as long as you do not stop."',
        person: "Confucius"
    }
];

btn.addEventListener("click", function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
});
