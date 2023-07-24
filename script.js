
const quoteText = document.querySelector(".quote");
const quoteBtn = document.querySelector(".btn");
const author = document.querySelector(".name");
const copyBtn = document.querySelector(".copy-btn");
const tweetBtn = document.querySelector(".tweet-btn");

const api_url="http://api.quotable.io/random";

function getQuote() {
    
    fetch(api_url)
    .then(response => response.json())
    .then(data => {
        quoteText.innerText = data.content;
        author.innerText = data.author;
    });
}

function copyQuote() {
    navigator.clipboard.writeText(quoteText.innerText);

    alert("copied to clipboard");

}

function tweetQuote() {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
    window.open(tweetUrl, "_blank");
}

quoteBtn.addEventListener("click", getQuote);
copyBtn.addEventListener("click", copyQuote);
tweetBtn.addEventListener("click", tweetQuote);



