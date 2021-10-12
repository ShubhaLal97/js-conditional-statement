/*if (8 > 7) {
    console.log(true)
}

if (!(6>11)) {
    console.log(true)
} else {
    console.log(false)
}

if (7 > 9) {
    console.log(true)
} if (8 > 11) {
    console.log(false)
} else {
  console.log("nothing")
}

if (!(6>11)) {
    console.log(true)
} else {
    console.log(false)
}

var num1 = 65

if (num1 > 100) {
    console.log(true)
} else {
    console.log("nothing")
}
 
var num1 = 5

if (num1 > 10) {
    console.log(true)
} else if(num1 > 5) {
    console.log('else if')
} else if(num1 > 4) {
    console.log('else if 2')
}else {
    console.log("nothing")
} 
 */

var currentDay = "sat"

if (currentDay === "mon") {
    console.log('Timings: 09:00 - 12:00')
} else if (currentDay === "tue") {
    console.log('today is tuesday Timings: 09:00 - 12:00')
}else if (currentDay === "wed") {
    console.log('today is wednesday Timings: 09:00 - 12:00')
}else if (currentDay === "thu") {
    console.log('today is thursday Timings: 09:00 - 12:00')
}else if (currentDay === "fri") {
    console.log('today is friday Timings: 09:00 - 12:00')
}else if (currentDay === "sat") {
    console.log('today is saturday Timings: 09:00 - 12:00')
}else if (currentDay === "sun") {
    console.log('today is sunday Timings: 09:00 - 12:00')
}

switch(currentDay) {
    case "mon":
        console.log('today is monday')
        break
        case "sat":
        console.log('today is saturday')
        default:
            console.log('no input current day')

}