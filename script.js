let min = 1;
let max = 100;
let i = 1;
let guess = Math.floor((min + max) / 2);

const startGuess = () => {
    min=1;
    max=100;
    i=1;
    guess = Math.floor((min + max) / 2);
    document.getElementById("guessP").textContent= `tu numero es: ${guess}` 
};


const showAlert = (message) => {
  alert(message);
  document.getElementById("show").classList.add("d-none");
}

const guessNumber = (button) => {
    if (i%2 == 1 && button == true){
        showAlert(`¡Adiviné tu número! Es  ${guess}`);
    }else if(min >= max){
        showAlert("No he podido adivinar tu número.");
    }else if(i%2 == 1 && button == false){
        document.getElementById("guessP").textContent=(`¿Tu número es mayor que ${guess}?`);
    }else if(i%2 == 0 && button == true){
        min = guess + 1;
        guess = Math.floor((min + max) / 2);
        document.getElementById("guessP").textContent= `tu numero es: ${guess}` 
    }else if(i%2 == 0 && button == false){
        max = guess - 1;
        guess = Math.floor((min + max) / 2);
        document.getElementById("guessP").textContent= `tu numero es: ${guess}` 
    }
    i++;
}
