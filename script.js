const api_url = "http://api.quotable.io/random";

async function getQuote(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Network response was not ok");
    const data = await response.json();
    document.getElementById("quote").innerText = data.content;
    document.getElementById("author").innerText = "— " + data.author;
  } catch (error) {
    console.error("Failed to fetch quote:", error);
    document.getElementById("quote").innerText = "Failed to load quote.";
    document.getElementById("author").innerText = "";
  }
}
