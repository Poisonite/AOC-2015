"use strict";

function day2a() {

    var myValues = getValues(); //imports base values from the getValues() function
    var additionArray = []; // declares an empty array to store the surface areas of the boxes in
    var solution = 0; // declares a var which will store the eventually final value of the total

    myValues.inputArray = myValues.input.split(" ");//splits the inputted value by each space which gets put into an array where each element is the equation of 1 box
    // console.info("Array Value: " + myValues.inputArray); //lists every box equation broken up into elements by equation

    // This loop breaks out each equation from the inputArray and finds the surface areas of that box plus the area of the smallest side of that box and then adds them together and spits them to another array outside of the loop
    for (var i = 0; i < myValues.inputArray.length; i++) {//sets an revolution counter, ensures that that the revolution nubmer is less than the index number for the inputArray, and then increases the revolution counter
        var equationArray = [];// creates an empty array which is reset each time 
        equationArray = myValues.inputArray[i].split("x");//puts the current element in the equationArray as 3 seperate elements without the "x"'s

        // using the surface area formula provided, these 3 lines solve the sub equation for the length of each side
        var side1 = (equationArray[0] * equationArray[1])
        var side2 = (equationArray[1] * equationArray[2])
        var side3 = (equationArray[2] * equationArray[0])
        var smallestSide = Math.min(side1, side2, side3); // Since the smallest side must be added to the final equation this variable is used to find the smallest one (by area)

        // This is where all the segments of the formula that were found in the variables above run together to form a single answer for each box
        var equationSum = (2 * side1) + (2 * side2) + (2 * side3) + smallestSide;
        additionArray.push(equationSum);//takes the answer found and spits it into an array where the answer for each box is each element

        // Outputs to console, the legnth of the smallest side of the box and the sum of all the areas + smallest side
        // console.info({ "smallestSide": smallestSide, "equationSum": equationSum, "equationArray Ele:0": equationArray[0], "equationArray Ele:1": equationArray[1], "equationArray Ele:2": equationArray[2] });
    }
    // console.info("additionArray: " + additionArray); // logs array which contains the total box surface areas for each box in seperate elements

    //Adds the value of the current additionArray element to the total until it runs out of elements to scan
    for (var i = 0; i < additionArray.length; i++) {//sets an revolution counter, ensures that that the revolution nubmer is less than the (base 1) number of elements in the additionArray, and then increases the revolution counter
        var num1 = additionArray[i]; // creates a shorthand var to specifify the element of the index currently specified in the loop
        var subSolution = solution + num1; //adds the current element to the previously calculated sum

        // console.info({ "Before math": solution, "Current number": num1, "New Total": subSolution, "Current element idx": i });
        solution = subSolution; //sets the final solution into the var which gets sent to the HTML
    }
    myValues.output.innerHTML = solution; // outputs the solution calculalted in the second for loop to the output html box
}

function day2b() {

    var myValues = getValues(); //imports base values from the getValues() function

}

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

    return myValues; // returns the values desired as an object in which each property can be called in any function that it's imported into
}