let point = 0;
function GuessGame (range){
  const username = prompt('what is your username? ')
  document.cookie = "name = " + username;
  const userNumber = +prompt('Guess a number: ')
if(userNumber === range){
 point+=1
  range +=1;
  
}else{
  console.log("No match")
}
document.cookie = "point = " + point;
}

GuessGame(Math.floor(Math.random() *2))