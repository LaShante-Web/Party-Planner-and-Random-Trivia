// API Key: 44775bcc16f3471491b2475052247c4b


document.querySelector('.form-search').addEventListener('submit', (e) => {
    e.preventDefault()
    fetchRandom(e.target.search.value)
})

function fetchRandom(limitLicense) {
    fetch(`https://api.spoonacular.com/food/trivia/random?apiKey=44775bcc16f3471491b2475052247c4b&limitLicense=true${limitLicense}`)

    .then(res => res.json())
    .then(limitLicense => buildCard(limitLicense))
}


function buildCard(limitLicense) {
    let recipes = document.querySelector('#trivia')
    let img = document.querySelector('#food-img')

    recipes.textContent = `${limitLicense.text}`
    // img.src = limitLicense.number
}
