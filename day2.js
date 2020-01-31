"use strict";

function day2a(equationArray) {

    var myValues = getValues();
    var additionArray = [];
    var solution = 0;

<<<<<<< HEAD
    // myValues.inputArray = myValues.input.split(" ");//splits the inputted value by each space which gets put into an array where each element is the equation of 1 box
    // console.info("Array Value: " + myValues.inputArray); //lists every box equation broken up into elements by equation

    // This loop breaks out each equation from the inputArray and finds the surface areas of that box plus the area of the smallest side of that box and then adds them together and spits them to another array outside of the loop
    for (var i = 0; i < myValues.inputArray.length; i++) {//sets an revolution counter, ensures that that the revolution nubmer is less than the index number for the inputArray, and then increases the revolution counter

        //equation array here

        console.log("day2a" + equationArray);
        // using the surface area formula provided, these 3 lines solve the sub equation for the length of each side
        var side1 = (equationArray[0] * equationArray[1])
        var side2 = (equationArray[1] * equationArray[2])
        var side3 = (equationArray[2] * equationArray[0])
        var smallestSide = Math.min(side1, side2, side3); // Since the smallest side must be added to the final equation this variable is used to find the smallest one (by area)
=======
    myValues.inputArray = myValues.input.split(" ");//splits the inputted value by each space which gets put into an array where each element is the equation of 1 box
    // console.log("Array Value: " + myValues.inputArray); //find what's in the array at this time

    for (var i = 0; i < myValues.inputArray.length; i++) {
        var equationArray = [];// creates an empty array which is reset each time 
        equationArray = myValues.inputArray[i].split("x");//puts the current element in the equationArray as 3 seperate elements without the "x"'s
        // console.log("equationArray: " + equationArray + " at " + i); //output the value of the equation array and the element in the inputArray that it corresponds to

        var lowestSide = Math.min(equationArray[0], equationArray[1], equationArray[2]);
        var equationSum = (equationArray[0] * 2) + (equationArray[1] * 2) + (equationArray[2] * 2) + lowestSide;
        // console.log({"lowestSide": lowestSide, "equationSum": equationSum}); //outputs the legnth of the smallest side of the box and the sum of all the areas + smallest side
        additionArray.push(equationSum);
>>>>>>> parent of d92198d... Day 2A - Complete

    }
    // console.info("additionArray: " + additionArray); // logs desired box area in an addable format

    // loops the code within until the length of the array 
    for (var i = 0; i < additionArray.length; i++) {
        //Adds the values in the additionArray if the l
        if (i < (additionArray.length - 1)) {
            var num1 = additionArray[i]; // creates a shorthand var to specifify the element of the index currently specified in the loop
            var num2 = additionArray[i + 1]; // creates a shorthand var to specifify the current index element plus 1 index
            // console.info(num1 + " + " + num2 + " ="); / logs the two elements which will be added

            var subSolution = num1 + num2; // adds the current element and the next one
            solution = solution + subSolution; // adds the sum of num1 and num2 to the solution var which holds its value even when the loop runs again
            // console.info("solution" + solution); // logs the solution that was calculated for each of the given indexes
            // console.info(i); // logs the current index number
        }
    }
<<<<<<< HEAD
    myValues.output.innerHTML = solution; // outputs the solution calculalted in the second for loop to the output html box

    // var aValues = {
    //     equationArray
    // };

}

function getEquationTerms(myValues) {
    console.log(myValues);
    for (var i = 0; i < myValues.inputArray.length; i++) {
        var equationArray = [];// creates an empty array which is reset each time the for loop runs
        equationArray = myValues.inputArray[i].split("x");//puts the current element in the equationArray as 3 seperate elements without the "x"'s
        console.log("getTerms" + equationArray);
    }
    // console.log(equationArray);


    // var equationTerms = {
    //     equationArray
    // }

    return equationArray;
}


function day2b() {
    
    var myValues = getValues();

    for (var i = 0; i < myValues.inputArray.length; i++) {//sets an revolution counter, ensures that that the revolution nubmer is less than the index number for the inputArray, and then increases the revolution counter
        var equationArray = [];// creates an empty array which is reset each time 
        equationArray = myValues.inputArray[i].split("x");//puts the current element in the equationArray as 3 seperate elements without the "x"'s

}

function day2b() {
    var myValues = getValues();
=======
    // console.log("solution: " + solution); //logs the solution
    myValues.output.innerHTML = solution; // outputs the solution calculalted in the second for loop and 
>>>>>>> parent of d92198d... Day 2A - Complete
}


// !!!: Pure Function Section

// Imports basic var data that's useful to other functions
function getValues() {

    //Vars that are passed into the values object and then called out of the values object in other functions
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var inputArray = [];
    inputArray = input.split(" ");

    //An object which contains the properties of the vars above so they can be easily passed into other functions
    var myValues = {
        input,
        output,
        inputArray
    };

    return myValues;
}