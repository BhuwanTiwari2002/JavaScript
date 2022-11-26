const getFileButton = document.getElementById("getFile");
const hangmanWordDisplay = document.getElementById("hangmanWord");
const hangmanSubmit = document.getElementById("submit");
const userInput = document.getElementById("userLetter");
const hangmanMissedLetters = document.getElementById("hangmanMissedLetters");
let score = 0;
let randomWord = "";

getFileButton.onchange = function() 
{
    // Retrieve information about the selected file
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
}
hangmanSubmit.onclick = function()
{
    let userLetter = userInput.value;
    checkIfLetterMatch(userLetter.toLowerCase());
}; 

function getWordForHangman(hangmanWords)
{ 
    randomWord = hangmanWords.commonWords[getRandomInt(990)]; 
    randomWord.split('').join(',');
    for(let i = 0; i < randomWord.length; i++) 
    {
        hangmanWordDisplay.textContent += "_ ";
        console.log(randomWord);
    }
}

//Returns a Random Int (This is used to get the one word from the .json file)
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function checkIfLetterMatch(letter) 
{
    for(let i = 0; i < randomWord.length; i++)
    {
        if(randomWord[i] == letter)
        {
            score++;
        } 
        else { hangmanMissedLetters.textContent += letter + " "; }
    }
}
