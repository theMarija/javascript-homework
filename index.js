let mojBroj = 5;
let stringName = "My name is Marija";
let object = {
    fullname: "Marija Trajkovska", 
    birth: "1996"
} 
let niza = ["Kate", "Kristina", 2008]
let boolean = true
let nesto = undefined;
let nestoDrugo = null;
let golemBroj = 584654n;

console.log(stringName)
let firstName = "Marija ";
console.log(firstName)
let lastName = "Trajkovska";
console.log(firstName += "Trajkovska");
console.log (firstName)
console.log(typeof stringName)
console.log(typeof mojBroj)
console.log(typeof object)
console.log(typeof niza)
console.log(typeof niza)
console.log(typeof nesto)
console.log(typeof nestoDrugo)


{ // Scope A
    let broj = 1; { //Scope B
        let brojche = 2; { // Scope C
            let broevi = 20;
            result = broj + brojche + broevi;
        } // Scope C

        console.log(result);
    } // Scope B

} // Scope A 
