const btn = document.getElementById('joke_btn')
const btn2 = document.getElementById('quote_btn')
const joke = document.getElementById('joke');
const quote = document.getElementById('quote');
const jokeText = document.querySelector('.joke-text');
const quoteText = document.querySelector('.quote-text');
const quoteTextAuthor = document.querySelector('.quote-text--author');
const btnJokeCopy = document.getElementById('joke_btn_copy');
const btnQuoteCopt = document.getElementById('quote_btn_copy');

jokeText.textContent = 'Click to get a joke. Share it with your friends!';
quoteText.textContent = 'Click to get a quote. Share it with your friends!';

btn.addEventListener('click', getJoke, true)

async function getJoke() {
    btn.classList.add('clicked');
    const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
    const json = await response.json();
    jokeText.textContent = json.joke;
}


btn2.addEventListener('click', getQuote, true)

async function getQuote() {
    let random = Math.floor((Math.random() * 100) + 1)
    const response = await fetch('https://type.fit/api/quotes');
    console.log(response);
    const json = await response.json();
    quoteText.textContent = `${json[random].text}`;
    if (json[random].author === null) {
        quoteTextAuthor.textContent = 'Unknown';
    } else {
        quoteTextAuthor.textContent = `By-${json[random].author}`;
    }
}


btnJokeCopy.onclick = function () {
    let input = joke.textContent.trim();
    navigator.clipboard.writeText(input);
}

btnQuoteCopt.onclick = function () {
    let input = quote.textContent.trim();
    navigator.clipboard.writeText(input);
}

