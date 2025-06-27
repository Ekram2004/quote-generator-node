const quoteDisplay = document.getElementById("quoteDisplay");
const newQuote = document.getElementById("input");
const button = document.getElementById("button");
const form = document.getElementById("quoteForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // prevent page reload

  const quote = newQuote.value.trim();
  if (quote) {
    await fetch("/api/quote", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quote }),
    });
    newQuote.value = "";
    getQuote();
  }
});

async function getQuote() {
  const res = await fetch("/api/quote");
  const data = await res.json();
  animateQuote(data.quote);
}

function animateQuote(quoteText) {
  quoteDisplay.classList.remove("opacity-100", "scale-100");
  quoteDisplay.classList.add("opacity-0", "scale-95");

  setTimeout(() => {
    quoteDisplay.textContent = `"${quoteText}"`;
    quoteDisplay.classList.remove("opacity-0", "scale-95");
    quoteDisplay.classList.add("opacity-100", "scale-100");
  }, 300);
}

getQuote();
