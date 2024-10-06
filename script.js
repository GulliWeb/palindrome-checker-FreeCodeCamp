// Raccolgo i valori dal DOM
const btnCheck = document.getElementById('check-btn')

const txtCheck = document.getElementById('text-input')

const btnResult = document.getElementById('result')

let word 
// Creo una funzione che controlla se ho inserito un valore nella textBox e se la frase ricevuta in input è palindroma una volta cliccato il bottone check. -->

const isPalindroma = () =>{
    word = txtCheck.value
    let palindroma = ""

  if (word == "") {
    alert("Please input a value")
    return 
  }  else{
    // Controllo se la frase è palindroma  
    for(let i = word.length -1; i >= 0; i--){
        palindroma = palindroma + word[i]
    }
    if(palindroma === word){
        btnResult.innerText = `${word} is a palindrome`
    } else{
        btnResult.innerText = `${word} is not a palindrome.`
    }
  }
}

// Richiamo la funzione al click sul bottone
btnCheck.addEventListener('click', isPalindroma)

