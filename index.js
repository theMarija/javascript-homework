//  1.So pomos na "if", "else if" i "else napravete soodvetna proverka za temperaturata koja sto ke ja stavite vie prvicno vo edna varijabla. 
// Print "It's freezing!" if the temperature is below 0.
// Print "It's cold." if the temperature is between 0 and 15.
// Print "It's warm." if the temperature is between 16 and 25.
// Print "It's hot!" if the temperature is above 25.

let temperature = 13; 

if (temperature < 0){
    console.log ("It's freezing");
} else if (temperature > 0 && temperature < 15) {
    console.log ("It's cold");
} else if (temperature > 16 && temperature < 25) {
    console.log ("It's warm");
} else {
    console.log ("It's hot!");
}


// 2. Proverka za vozrast: 
// 0-2 years: "Infant"
// 3-12 years: "Child"
// 13-19 years: "Teenager"
// 20-59 years: "Adult"
// 60 years and above: "Senior"

let age = 15; 

if (age >=0 && age < 2){
    console.log ("Infant");
} else if (age > 3 && age < 12){
    console.log ("Child");
} else if (age > 12 && age < 19){
    console.log ("Teenager");
} else if (age > 19 && age < 59){
    console.log ("Adult");
} else {
    console.log ("Senior");
}

// 3. So pomos na ternary operator proverete dali eden broj e paren ili neparen.

let dva = 3; 

let proverka = (dva % 2 !== 0) ? "Brojot e neparen" : "Brojot e paren";
console.log(proverka);
