let text = document.getElementById('text-string');
let btnPalindrome = document.getElementById('btn-text-string');
let btnCharacters = document.getElementById('btn-characters');
let btnWords = document.getElementById('btn-text-different');

btnPalindrome.addEventListener('click', palindrome);
btnCharacters.addEventListener('click', words);
btnWords.addEventListener('click', sameString);

function palindrome() {
  let transform = text.value.toLowerCase().replace(/ /g,"");
  let reversee = transform.split("").reverse().toString();
  for (let i = 0; i < reversee.length; i++) {
    reversee=reversee.replace(",","");
  };
  if(transform==reversee){
  console.log(`${text.value} si un palabra Palindromo`);
  }
  else{
  console.log(`${text.value} no es una palabra Palindromo`);
  }
}
palindrome();

function words(){

  let transform = text.value.toLowerCase().replace(/ /g,"");
  let letra= 'h';
  if(transform.indexOf(letra) != -1){
  console.log(`${letra} es un caracter que no se repite`);
  }
  
  
}
words();

function sameString() {}


