if(localStorage.getItem('searchengine') === null ) { // If no search engine is selected it will default to DDG
    localStorage.setItem('searchengine','duckduckgo') // Sets search engine to DDG
}
// Search function
function search() {
    let url = document.getElementById("search").value
    if(url.includes('.')) {
        console.log(url)
        window.location.href = `https://${url}`
    } else if(url === "") { // If the URL is empty it warns that it can't be empty
        document.getElementById('search').setAttribute('placeholder','The search bar cannot be empty.')
    }

    let encoded = encodeURIComponent(url); // Encodes it to let you use stuff like + , & and more in your query
    
    // Search engines
    let engine = localStorage.getItem('searchengine');

    if (engine === 'google') {
        window.location.href = `https://google.com/search?q=${encoded}&safe=active&ssui=on`;
    }

    else if (engine === 'duckduckgo') {
        window.location.href = `https://duckduckgo.com/?q=${encoded}&ia=web`;
    }

    else if (engine === 'startpage') {
        window.location.href = `https://www.startpage.com/sp/search?query=${encoded}`;
    }

    else if (engine === 'vyntr') {
        window.location.href = `https://vyntr.com/search?q=${encoded}`;
    }

    else if (engine === 'brave') {
        window.location.href = `https://search.brave.com/search?q=${encoded}`;
    }

    else if (engine === 'yandex') {
        window.location.href = `https://yandex.com/search/?text=${encoded}`;
    }

    else if (engine === 'bliptext') {
        window.location.href = `https://bliptext.com/search?q=${encoded}`;
    }

    else if (engine === 'bing') {
        window.location.href = `https://www.bing.com/search?q=${encoded}`;
    }
}

console.log(localStorage.getItem('searchengine')) // Logs your current search engine

window.addEventListener("DOMContentLoaded", () => { // Enter key listener
    document.getElementById("search").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            search();
        }
    });
});
