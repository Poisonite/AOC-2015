"use strict";

function day1a() {

    var myValues = getValues();

    //take every char in input and seperate by comma into an array
    for (var i = 0; i < myValues.input.length; i++) {
        myValues.array.push(myValues.input.charAt(i));
    }
    // console.log({myValues.array});
    for (var i = 0; i < myValues.array.length; i++) {
        if (myValues.array[i] === "(") {
            myValues.floor++;
        }
        else {
            myValues.floor--;
        }
        // console.log("floor" + myValues.floor);
    }
    myValues.output.innerHTML = myValues.floor;
}

function day1b() {

    var myValues = getValues();
    var firstNegative;

    //take every char in input and seperate by comma into an array
    for (var i = 0; i < myValues.input.length; i++) {
        myValues.array.push(myValues.input.charAt(i));
    }
    // console.log({myValues.array});
    for (var i = 0; i < myValues.array.length; i++) {
        if (myValues.array[i] === "(") {
            myValues.floor++;
        }
        else {
            myValues.floor--;
        }
        if (myValues.floor < 0) {
            firstNegative = i + 1;
            // console.log("first negative " + firstNegative);
            myValues.output.innerHTML = firstNegative;
            return;
        }
    }
}


function getValues() {

    //Vars that are passed into the values object and then called out of the values object in other functions
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var array = [];
    var floor = 0;

    //An object which contains the properties of the vars above so they can be easily passed into other functions
    var myValues = {
        input,
        output,
        array,
        floor
    };

    return myValues;
}