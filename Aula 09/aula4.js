// if else if

let hour = 19

/*
if(hour <= 12) {
   console.log("Bom dia")
}

if(hour > 18) {
    console.log("Boa noite")
}

if (hour > 12) {
    console.log("Boa tarde")
}
*/
if (hour <= 12) {
    console.log("Bom dia")
}

else if (hour > 12 && hour <= 18) {
    console.log("Boa tarde")
} else {
    console.log("Boa noite")
}