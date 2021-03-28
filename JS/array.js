function createGroceryList(grocery, button) {
    alert(`Please created your ${grocery} list and click ${button} button for random trivia!`);
}


createGroceryList('grocery', 'trivia');



function User(user, age, sex) {
            this.user = user;
            this.age = age;
            this.sex = sex;
        }
        const Shante = new User("Shante", 35, "Female");
        console.log("Normal function using new keyword with parameters: ", Shante);
        //Arrow function with new keyword and parameter
        const Person = (user, age, sex) => {
            this.user = user;
            this.age = age;
            this.sex = sex;
        }
        
document.getElementById("demo").innerHTML =
"Creator of this app name is " + Shante.user + " and  " + Shante.age + " year old " + Shante.sex; 