
const nameInput = document.getElementById('visitor');
const emailInput = document.getElementById('email');
const textArea = document.getElementById('subject');

const focusHandler = event => {
  event.target.className = 'highlight';
}

const blurHandler = event => {
  event.target.className = '';
}

nameInput.addEventListener('focus', focusHandler);
nameInput.addEventListener('blur', blurHandler);                          
                

textArea.addEventListener('focus', focusHandler);
textArea.addEventListener('blur', blurHandler);


// Can only contain letters a-z in lowercase
function isValidVisitor(visitor) {
  return /^[a-z]+$/.test(visitor);
}


// Must be a valid email address
function isValidEmail(email) {
  return /^[^@]+@[^@.]+\.[a-z]+$/i.test(email);
}

function isValidText(subject) {
  return /^[Aa-Zz]+$/i.test(subject);
}


function showOrHideTip(show, element) {
  
  if (show) {
    element.style.display = "inherit";
  } else {
    element.style.display = "none";
  }
}

function createListener(validator) {
  return e => {
    const text = e.target.value;
    const valid = validator(text);
    const showTip = text !== "" && !valid;
    const tooltip = e.target.nextElementSibling;
    showOrHideTip(showTip, tooltip);
  };
}

nameInput.addEventListener("input", createListener(isValidVisitor));

emailInput.addEventListener("input", createListener(isValidEmail));

textArea.addEventListener("textarea", createListener(isValidText));