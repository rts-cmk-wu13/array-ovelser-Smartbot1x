document.addEventListener("DOMContentLoaded", function () {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"];
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21];

    // --- Løs opgaverne herunder ---

    // -- Opgave 1 --
    let newNumbers = numbersArray.filter(number => number > 20);
    console.log("Opgave 1", newNumbers);

    // -- Opgave 2 --
    catsArray.push("Sniffles");
    console.log("Opgave 2", catsArray);

    // -- Opgave 3a --
    console.log("Opgave 3a", dogsArray.includes("Trixie"));

    // -- Opgave 3b --
    console.log("Opgave 3b", dogsArray.includes("Baxter"));

    // -- Opgave 4a --
    let catBagheera = catsArray.find(cat => cat === "Bagheera");
    console.log("Opgave 4a", catBagheera !== undefined ? catBagheera : "undefined");

    // -- Opgave 4b --
    let catSalem = catsArray.find(cat => cat === "Salem");
    console.log("Opgave 4b", catSalem !== undefined ? catSalem : "undefined");

    // -- Opgave 5 --
    let multipliedNumbers = numbersArray.map(number => number * 3);
    console.log("Opgave 5", multipliedNumbers);

    // -- Opgave 6 --
    let dogString = dogsArray.join("");
    console.log("Opgave 6", dogString);

    // -- Opgave 7a --
    console.log("Opgave 7a", fruitsArray.indexOf("Mango"));

    // -- Opgave 7b --
    console.log("Opgave 7b", fruitsArray.indexOf("Blåbær")); 

    // -- Opgave 8 --
    let dogsModified = dogsArray.indexOf("Polly");
    if (dogsModified !== -1) {
        dogsArray.splice(dogsModified, 1);
    }
    console.log("Opgave 8", dogsArray);

    // -- ekstra opgave --

    // [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]
    let sum = numbersArray.reduce( (result, number) => result + number,500)
        
        
    
  /*   let sum = numbersArray.reduce( function(result, number,){
        return result + number
    }) */
    console.log(" Ekstra Opgave ", sum);
    
});
















