
//import axios from 'axios';

const btn= document.getElementById('joke_btn')
const btn2= document.getElementById('quote_btn')
const joke= document.getElementById('joke');
const quote= document.getElementById('quote');

console.log(joke.innerHTML);
//console.log(btn)

btn.addEventListener('click',getJoke,true)

//getJoke();

async function getJoke()
{
    // axios.get('https://v2.jokeapi.dev/joke/Any')
    // .then(res=>{
    //   console.log(res);

    // }).catch(err=>{
      
    //     console.log(err);
    // })

    const response =  await fetch('https://v2.jokeapi.dev/joke/Any');

    console.log(response);
    const json = await response.json();

    const jokediv= document.createElement('div');
    jokediv.classList.add('jokediv');

    console.log(json);

    console.log(json.setup);
    console.log(json.delivery);

    const jokedivhtml=`<h2>${json.setup}</h2><br><h3>${json.delivery}</h3>`;
  

    joke.innerHTML=jokedivhtml;
}



btn2.addEventListener('click',getQuote,true)

//getQuote();

async function getQuote()
{
    // axios.get('https://v2.jokeapi.dev/joke/Any')
    // .then(res=>{
    //   console.log(res);

    // }).catch(err=>{
      
    //     console.log(err);
    // })

    const response =  await fetch('https://type.fit/api/quotes');

    console.log(response);
    const json = await response.json();

    const quotediv= document.createElement('div');
    quotediv.classList.add('quotediv');

    console.log(json);

    
    console.log(json[Math.floor((Math.random() * 100) + 1)].text);
    console.log(json[Math.floor((Math.random() * 100) + 1)].author);

    const quotedivhtml=`<h2>${json[Math.floor((Math.random() * 100) + 1)].text}</h2><br><h3>by-${json[Math.floor((Math.random() * 100) + 1)].author}</h3>`;
  

    quote.innerHTML=quotedivhtml;
}