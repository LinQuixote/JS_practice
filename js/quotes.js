/* 
It's okay to fail; it's not okay to quit.
It can be done, but you have to make it happen.
If you believe you can do it. you will.
Always,always pursue happiness.
People do not lack strength; they lack will.
It always seems impossible until it's done.
The best things happen by chance. That's life.
Being brave doesn't mean you go looking for trouble
Don't dwell on the past
Seize the day
*/




const quotes = [
    {
        quote : 'The greatest discovery of my generation is that man can alter his life simply by altering his attitude of mind',
        author : 'Willim James'
    },
    {
        quote : 'Those who welcome death have only tried it from the ears up.',
        author : 'Wilson Mizner'
    },
    {
        quote : 'Those who welcome death have only tried it from the ears up.',
        author : 'Mark Twain'
    },
    {
        quote : 'Every horse thinks its own pack heaviest.',
        author : 'Thomas Fuller'
    },
    {
        quote : 'Two men look out through the same bars: one sees the mud and the other the stars',
        author : 'Frederick Langbridge'
    },
    {
        quote : 'Miracles happen to only those whho believe in them',
        author : 'Bernard Berenson'
    },
    {
        quote : 'The only thing we have to fear is fear itself ',
        author : 'Franklin Roosevelt'
    },
    {
        quote : 'You miss 100% of the shots you don\'t take',
        author : 'Wayne Gretzky'
    },
    {
        quote : 'Growing old is mandatory; growing up is optional',
        author : 'Anonymous'
    },
    {
        quote : 'Be nice to people on your way up because you\'ll meet them again on your way down',
        author : 'Wilson Mizner'
    }
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
