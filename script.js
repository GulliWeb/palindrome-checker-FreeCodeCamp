// Raccolgo i valori dal DOM
const btnCheck = document.getElementById('check-btn')

const txtCheck = document.getElementById('text-input')

const btnResult = document.getElementById('result')

let word 

// Creo una funzione che controlla se ho inserito un valore nella textBox e se la frase ricevuta in input è palindroma una volta cliccato il bottone check. -->
const isPalindroma = () =>{
    word = txtCheck.value

    if (word == "") {
      alert("Please input a value")
      return 
    }  else{
      // Rimuovo tutti i caratteri non alfanumerici e converto tutto in lowercase
      let cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/gi, '')

      // Creo la parola invertita per verificare se è palindroma
      let reversedWord = cleanedWord.split('').reverse().join('')

      // Confronto la parola invertita con quella pulita
      if(cleanedWord === reversedWord){
          btnResult.innerText = `${word} is a palindrome`
      } else{
          btnResult.innerText = `${word} is not a palindrome.`
      }
    }
}

// Richiamo la funzione al click sul bottone
btnCheck.addEventListener('click', isPalindroma)