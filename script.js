//A username for any client. Entering a name is optional.
let clientName = "";

//Alerts the client will get if they enter a username or not
clientName ? console.log("Hello, ${clientName}!") : console.log("Hello!");

//Sample client question
const clientQuestion = "Will I become rich?";

//Log client question to the console
console.log(`The client asked: ${clientQuestion}`);

//A way to generate random numbers that will tell client's fortune
const randomNumber = Math.floor(Math.random() * 8);

//The code that will tell the fortune
let magicCrystal = "";

//The control flow for telling client fortunes
switch (randomNumber) {
  case 0:
    magicCrystal = "It is not really certain.";
    break;
    
    case 1:
    magicCrystal = "The gods have decided and the answer is yes.";
    break;
    
    case 2:
    magicCrystal = "I'm a little busy. Try again?";
    break;
    
    case 3:
    magicCrystal = "My sources say nope. Not soon.";
    break;
    
    case 4:
    magicCrystal = "This isn't looking good.";
    break;
    
    case 5:
    magicCrystal = "Well, well, well.";
    break;
    
    case 6:
    magicCrystal = "Not quite.";
    break;
    
    case 7:
    magicCrystal = "Yes. The answer is yes.";
    break;
}

console.log(`The magic crystal answered: ${magicCrystal}`);
