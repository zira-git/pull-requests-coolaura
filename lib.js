function search() {
    let url = document.getElementById("search").value
    if(url.includes('.') || url.includes('https://') || url.includes('http://')) {
        console.log(url)
        console.log(url)
        window.location.href = url;
    } else {
        window.location.href = `https://google.com/search?q=${url}&safe=active&ssui=on`;
    }
}