const quotes= [];

fetch("quotes.txt")
    .then(response => response.text())
    .then(data => {
        const lines = data.split("\n");
        for (let line of lines) {
            if (line.trim() !== "") {
                quotes.push(line.trim());
            }
        }
     
    })
    .catch(error => console.error('Error loading quotes:', error));

newQuote();
    
function newQuote() {
    if (quotes.length === 0) {
    console.error('No quotes available.');
    return;
    }
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById("quote-text").textContent = quote;

    document.getElementById("quote-container").classList.remove("hidden");
    document.getElementById("answer-arrow").classList.remove("hidden");
    
}


