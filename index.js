const student = require('./information');
let cow = require("cowsay");
const meow = `I'm ${student.name}, my campus city is ${student.campus}`
console.info(cow.think(    {text: meow ,
e : "oO",
T : "U"}));
