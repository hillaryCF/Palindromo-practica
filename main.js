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
  console.log(`${text.value} si es una palabra Palindromo`);
  }
  else{
  console.log(`${text.value} no es una palabra Palindromo`);
  }
}
palindrome();

function words(){
  // var first = contenido[0].split('');
  let transform = text.value.toLowerCase().replace(/ /g,"");
  let contenido= [];
  contenido.push(transform);
  let contenido2= contenido.slice(0);
  contenido.sort();
  contenido2.sort();
}
words();

function sameString() {}


