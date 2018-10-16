let num1    = 10;
let num2    = 099;
const num3  = 0.02;

//-- level 1 Calculation (DOM) --//
let angka = num1 + num2
let angka2 = num1 - num2
let angka3 = num2 / num1
let angka4 = num2 * num1

let tampilkan = document.getElementById("tampilkan")
let tampilkan2 = document.getElementById("tampilkan2")
let tampilkan3 = document.getElementById("tampilkan3")
let tampilkan4 = document.getElementById("tampilkan4")
tampilkan.innerHTML += angka
tampilkan2.innerHTML += angka2
tampilkan3.innerHTML += angka3
tampilkan4.innerHTML += angka4
// -- end -- //

// -- Level 2 -- //
 let string = "this is string";
 let booleanTrue = true;
 let nummber= -8;
 
let show = string + " " + booleanTrue
let show1= string + " " + number

let showing = document.getElementById("show")
let showing1 = document.getElementById("show1")

showing.innerHTML += show
showing1.innerHTML +=show1