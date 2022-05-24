const button = document.querySelector('button');

function greet() {
  const name = prompt('What is your name?');
  alert(`Hello ${name}, nice to see you!`);
}

function login() {
    const name = prompt("Enter user name");
    if (name === null || name === "") {
        alert("Cancelled!");
    } 
    else if (name !== "Admin") {
        alert("I don't know you")
    }
    else if (name === "Admin") {
        const pass = prompt("Enter password");
        if (pass === null || pass === "") {
            alert("Cancelled");
        }
        else if (pass !== "TheMaster") {
            alert("Wrong password");
        }
        else if (pass === "TheMaster") {
            alert("Welcome");
        }
    }
}

button.addEventListener('click', login);

const hour = new Date().getHours(); 
let greeting;

if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}

document.getElementById("lition").innerHTML = greeting;

const select = document.querySelector('select');
const para = document.querySelector('.weather');

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and an umbrella, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = '';
  }
}


const select1 = document.querySelector('#theme');
const html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select1.addEventListener('change', () => ( select1.value === 'black' ) ? update('black','white') : update('white','black'));
