// const food = [
//     {
//         name: 'Soul Food',
//         origin: 'Southern States',
//         info: 'Soul food is an ethnic cuisine traditionally prepared and eaten by African Americans, originating in the Southern United States.',
//         photo: 'greenbeans.jpg'
//     },
//     {
//         name: 'Creole',
//         origin: 'Louisiana',
//         info: 'Louisiana Creole cuisine is a style of cooking originating in which blends West African, French, Spanish, Amerindian influences.',
//         photo: 'crabs.jpg'
//     },
//     {
//         name: 'Gullah/Geeche',
//         origin: 'South Carolina',
//         info: 'Gullah-Geechee cuisine originated from South Carolina, which blends West African influences.',
//         photo: 'gullah.jpg'
//     }
// ]; 


const main = document.querySelector('main')
let html = '';




let promises = [];
for (let i = 1; i <= 1; i++) {
  promises.push(fetch(`https://api.spoonacular.com/recipes/random?apiKey=17f3e9584fd5415b843a722b72449800&limitLicense=true&number=1&tags=vegetarian,dessert`));



}


Promise.all(promises)
  .then(function handleData(data) {
    return fetch("https://api.spoonacular.com/recipes/random?apiKey=17f3e9584fd5415b843a722b72449800&limitLicense=true&number=1&tags=vegetarian,dessert") // should be returned 1 time
      .then(response => {
        if (response.ok) return response.json();
        throw new Error(response.statusText);
      });
  })
  .catch(function handleError(error) {
    console.log("Error" + error);
  });




  

