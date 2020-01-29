"use strict";

function day2a() {

    var myValues = getValues();
    var additionArray = [];
    var solution = 0;

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
    // console.log("solution: " + solution); //logs the solution
    myValues.output.innerHTML = solution; // outputs the solution calculalted in the second for loop and 
}


// !!!: Pure Function Section

// Imports basic var data that's useful to other functions
function getValues() {

    //Vars that are passed into the values object and then called out of the values object in other functions
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var inputArray = [];

    //An object which contains the properties of the vars above so they can be easily passed into other functions
    var myValues = {
        input,
        output,
        inputArray
    };

    return myValues;
}