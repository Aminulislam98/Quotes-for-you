const api_url = "http://api.quotable.io/random";

async function getQuote(url) {
  const quote = document.getElementById("quote");
  const author = document.getElementById("author");
  const response = await fetch(url);
  var data = await response.json();
  console.log(data);
  quote.innerHTML = data.content;
  author.innerHTML = data.author;
}

function post() {
  const quote = document.getElementById("quote").innerText;
  const author = document.getElementById("author").innerText;
  const shareUrl =
    "https://yourwebsite.com/quote.html?text=" +
    encodeURIComponent(quote + " — " + author);

  window.open(
    "https://www.facebook.com/sharer/sharer.php?u=" +
      encodeURIComponent(shareUrl),
    "post window",
    "width=600,height=300"
  );
}
