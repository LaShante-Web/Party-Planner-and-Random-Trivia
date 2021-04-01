// function createShoppingList(list, button) {
//     alert(`Please created your ${list} and click the ${button} button for random trivia!`);
// }


// createShoppingList('list', 'trivia');



function User(user, age, status) {
            this.user = user;
            this.age = age;
            this.status = status;
        }
        const LaShante = new User("LaShante", 35, "student");
        console.log(LaShante);
        
        const Person = (user, age, sex) => {
            this.user = user;
            this.age = age;
            this.student = student;
        }
        
document.getElementById("info").innerHTML =
"Creator of this app is " + LaShante.user + " a  " + LaShante.age + " year old " + LaShante.status + ". Visitors can use this web application to plan parties, shopping, and everyday todo lists. Please create a title for your planner in the 1st input and add your list items in the 2nd input"; 