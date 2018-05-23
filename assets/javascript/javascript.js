//object with initial variables
//variable chosen word
var game = {
"chosenWord" : [],// , object notation
"currentWord" : [],
"guessLetters" : [],

"reset" : function(){
this.chosenWord = [];
this.currentWord = [];
this.guessLetters = [];
var wordIndex = Math.floor(Math.random() * wordList.length);
this.chosenWord = wordList[wordIndex].split('')
console.log(this.chosenWord);
},
"checkLetter" : function(key){
console.log(key);
}

}
//var guesses
//array answers
var wordList = ["that", "he", "was", "for", "on", "are", "with", "as", "I", "his", "they", "be", "at", "one", "have", "this", "from", "or", "had", "by", "hot", "word", "but", "what", "some", "we", "can", "out", "other", "were", "all", "there", "when", "up", "use", "your", "how", "said", "an", "each", "she", "which", "do", "their", "time", "if", "will", "way", "about", "many", "then", "them", "write", "would", "like", "so", "these"]
//array of all letters
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//blank array for underscores

//reset function

//game function
document.onkeyup = function(event){
   if(alphabet.indexOf(event.key) != -1){
       game.checkLetter(event.key);
   }

}
game.reset();