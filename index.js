let num1    = 10;
let num2    = 099;
const num3  = 0.02;

//-- level 1 Calculation --//
console.log(num1 + num2);
console.log(num1 - num3);
console.log(num1 * num3);
console.log(num1 * num3 + num2);
console.log(num2 / num3);
console.log(num2 % num3);


// -- Level 2 --//
let string  = "this is string";
let Boolean = true;
let number  = -2

console.log(string + " " + Boolean);
console.log(number - string);
console.log(string + " " + number)

// -- Level 3 Array -- //
let FirstName   = ["adam","gibran","haekal","wippy"];
let LastName    = ["fadhil","Muhsin","Iqbal","Jemika","Albert"];
let Age         = [25,28,34,29,35,21,15,31];

FirstName.pop();                    // pop(): Remove an item from the end of an array.
console.log(FirstName);
Age.shift ();                       // shift(): Remove an item from the beginning of an array
console.log(Age);
LastName.push("william","haidar");  // push(): Add items to the end of an array.
console.log(LastName)
FirstName.unshift("billy","rossa"); // unshift(): Add items to the beginning of an array
console.log(FirstName);

for (i=0;i<Age.length;i++){
    console.log(Age[i])
}
// -- Requirments -- //
let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise my code is unreadable.";

function sortThings(a, b) {
  a = a.toLowerCase(longString);
  b = b.toLowerCase(longString);

  if (a > b) {
    return 1;
  } else if (a < b) {
    return -1;
  } else if (a === b) {
    return 0;
  }
}

console.log (longThings);