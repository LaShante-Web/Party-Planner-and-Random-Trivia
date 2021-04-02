const list = [
    {
        ideas: 'Baby Showers',
        info: 'Plan your baby showers or gender reveal',
        photo: 'baby.jpg'
    },
    {
        ideas: 'Weddings',
        info: 'Plan your wedding or reception',
        photo: 'wedding.jpg'
    },
    {
        ideas: 'Birthday',
        info: 'Plan your birthday party',
        photo: 'birthday.jpg'
    }
]; 


const main = document.querySelector('main')
let html = '';

for (let i = 0; i < list.length; i++) {
    let plan = list[i];
    html += `
    <div class="col" id="ideas">
    <h2>${plan.ideas}</h2>
    <p> ${plan.info}</p>
    <img src="images/${plan.photo}" alt="${plan.type}" width="150px">
    </div>

`;

}


main.insertAdjacentHTML('beforeend', html);





