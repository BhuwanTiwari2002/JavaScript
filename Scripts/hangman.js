const getFileButton = document.getElementById("getFile");
const hangmanWordDisplay = document.getElementById("hangmanWord");
const hangmanSubmit = document.getElementById("submit");
const userInput = document.getElementById("userLetter");
const hangmanMissedLetters = document.getElementById("hangmanMissedLetters");
const error = document.getElementById("error");
//Global Variables 
let score = 0;
let randomWord = "";
let word;
let displayedWord = [];

getFileButton.onchange = function() 
{
    try
    {
        let JSONfile = this.files[0];
        // Instance of the FileReader Class
        const fr = new FileReader();
        // Reading the json file
        fr.readAsText(JSONfile);
        // Onces the file has finished loading, parse the JSON file
        fr.onload = function() 
        {
            let hangmanWords = JSON.parse(fr.result);
            getWordForHangman(hangmanWords);
        }
    } catch(ex)
    {
        console.log(ex);
    }

}

hangmanSubmit.onclick = function()
{
    try
    {
        let userLetter = userInput.value;
        checkIfLetterMatch(userLetter.toLowerCase());
        error.textContent = "";
    } catch(ex) 
    {
        error.textContent = ex;
        console.log(ex);
    }
   
}; 

function getWordForHangman(hangmanWords)
{ 
    randomWord = hangmanWords.commonWords[getRandomInt(990)]; 
    randomWord.split('').join(',');
   for(let i = 0; i < randomWord.length; i++) 
    {
        displayedWord.push('_');
        console.log(randomWord);
    }
    hangmanWordDisplay.textContent = displayedWord;

}

function checkIfLetterMatch(letter) 
{
    let found = false;
    for(let i = 0; i < randomWord.length; i++)
        {
            if(randomWord[i] == letter)
            {
                score++;
                console.log(score);
                displayedWord[i] = letter;
                found = true;
            } 
        }
        if(found == false && !(hangmanMissedLetters.textContent.includes(letter)) && !(displayedWord.includes(letter)))
        {
             hangmanMissedLetters.textContent += letter + ","; 
        }
        if(score == randomWord.length + 1)
        {
            hangmanMissedLetters.textContent = "Congratulations you win!";
        }
        hangmanWordDisplay.textContent = displayedWord;

}

//Returns a Random Int (This is used to get the one word from the .json file)
function getRandomInt(max) { return Math.floor(Math.random() * max); }
    

