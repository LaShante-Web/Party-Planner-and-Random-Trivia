function createGroceryList(grocery, button) {
    alert(`Please created your ${grocery} list and click ${button} button for random trivia!`);
}


createGroceryList('grocery', 'trivia');



function User(user, age, sex) {
            this.user = user;
            this.age = age;
            this.sex = sex;
        }
        const LaShante = new User("LaShante", 35, "Female");
        console.log(LaShante);
        //Arrow function with new keyword and parameter
        const Person = (user, age, sex) => {
            this.user = user;
            this.age = age;
            this.sex = sex;
        }
        
document.getElementById("info").innerHTML =
"Creator of this app is " + LaShante.user + " and  " + LaShante.age + " year old " + LaShante.sex; 