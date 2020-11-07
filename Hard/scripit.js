// set up a variable and set up an object 

var Tom = {
    Height: 9,
    mass: 8,

};

var jerry = {
    Height: 10/ 2.54,
    mass: 45/ 454,
};

var TBMI = Tom.mass / Tom.Height **2;
var JBMI = jerry.mass/ jerry.Height **2;

var BMI = TBMI > JBMI;
console.log("Is Tom's BMI higher than Jerry's? " + BMI);
