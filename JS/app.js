// API Key: 17f3e9584fd5415b843a722b72449800


document.querySelector('.form-search').addEventListener('submit', (e) => {
    e.preventDefault()
    fetchRandom(e.target.search.value)
})

function fetchRandom(limitLicense) {
    fetch(`https://api.spoonacular.com/food/trivia/random?apiKey=17f3e9584fd5415b843a722b72449800&limitLicense=true${limitLicense}`)
   
    .then(res => res.json())
    .then(limitLicense => buildCard(limitLicense))
}


function buildCard(limitLicense) {
    let recipes = document.querySelector('#trivia')
    let img = document.querySelector('#food-img')

    recipes.textContent = `${limitLicense.text}`
    // img.src = limitLicense.number
}