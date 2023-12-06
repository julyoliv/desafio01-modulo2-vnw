console.log("Ano novo está chegando!");
let name = "Mariah Carey";
let age = 54;
let today = new Date();
let year = today.getFullYear();
let birthDate = year - age;
console.log(`Mariah Carey was born in ${birthDate}.`)
let wednesday = true;
console.log(wednesday);
console.log(typeof(wednesday));

let checkLegalAge;
checkLegalAge = 20;

if (checkLegalAge >= 18){
    console.log("You are of legal age, you can enjoy the Roberto Carlos concert with a special performance by Mariah Carey.")
} else {
    console.log("I'm sorry, but you will watch it on Globo TV.")
};

let birthdayMonth;
birthdayMonth = "December";

if (birthdayMonth == "August" || birthdayMonth == "December" || birthdayMonth == "June") {
    console.log(`One or more options are correct. The chosen month was ${birthdayMonth}.`)
} else {
    console.log(`Something wrong isn't right; the entered month was ${birthdayMonth}.`)
};