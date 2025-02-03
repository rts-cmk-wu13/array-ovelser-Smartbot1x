document.addEventListener("DOMContentLoaded", function () {
    let catsArray = ["Ollie", "Sophie", "Salem", "Tiger", "Binx", "Pumpkin", "Penny", "Lenny"];
    let dogsArray = ["Barney", "Molly", "Baxter", "Polly", "Buddy", "Suki", "Watson"];
    let fruitsArray = ["Banana", "Orange", "Pineapple", "Mango", "Plum", "Apricot"]
    let numbersArray = [12, 4, 45, 17, 2, 26, 7, 55, 48, 32, 21]

    // --- Løs opgaverne herunder --- 

    // --- opgave 1 array method Push --
    catsArray.push("Whiskers");
    console.log("opgave 1", catsArray);


    // -- opgave 2 array method pop--

    // first time remove watson of the last element of array
    dogsArray.pop();
    console.log("Opgave 2", dogsArray);
    // other method 
    const Hund = dogsArray.pop();
    console.log(Hund);

    // -- opgave 3 array method sort--
    fruitsArray.sort();
    console.log("Opgave 3", fruitsArray);

    // -- opgave 4  math.max method  --

    console.log("Opgave 4" , Math.max(...numbersArray));


    // let highestNumber = Math.max(...numbersArray);
    // console.log("Opgave 4", highestNumber);

    // -- opgave 5  concat method  --

    let Array5opg = catsArray.concat(dogsArray);
    console.log("Opgave 5",Array5opg);

    // -- opgave 6  filter method  --




}) // ends DOMContentLoaded