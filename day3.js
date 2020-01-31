"use strict";

//called to solve the first day 3 puzzle
function day3a() {

    var myValues = getValues();
    var positionArray = [];
    var santaX = 0; //position east or west
    var santaY = 0; //pos north or south
    var answer = 0;
    var directionArray = ["0, 0"];
    directionArray = myValues.input.split("");
    // console.log({ "directionArray": directionArray });

    for (var i = 0; i < directionArray.length; i++) {
        if (directionArray[i] === "^") {
            santaY++
        }
        else if (directionArray[i] === ">") {
            santaX++;
        }
        else if (directionArray[i] === "v") {
            santaY--;
        }
        else if (directionArray[i] === "<") {
            santaX--;
        }
        positionArray.push(santaX + ", " + santaY);
    }
    console.log({ "positionArray": positionArray })
    // console.log(santaX);
    // console.log(santaY);

    loop:
    for (var i = 0; i < positionArray.length; i++) {
        for (var j = i + 1; j < positionArray.length; j++) {
            if(positionArray[i]===positionArray[j]){
                continue loop;
            }
        }
        answer++;
    }
    myValues.output.innerHTML = answer;
}

//called to solve the second day 3 puzzle
function day3b() {

    var myValues = getValues();
    var positionArray = [];
    var santaX = 0; //position east or west for santa
    var santaY = 0; //pos north or south for santa
    var rSantaX = 0; //position east or west for robo santa
    var rSantaY = 0; //pos north or south for robo santa
    var answer = 0;
    var directionArray = ["0, 0"];
    directionArray = myValues.input.split("");
    // console.log({ "directionArray": directionArray });

    for (var i = 0; i < directionArray.length; i++) {
        if(i %2===0){
            if (directionArray[i] === "^") {
                santaY++
            }
            else if (directionArray[i] === ">") {
                santaX++;
            }
            else if (directionArray[i] === "v") {
                santaY--;
            }
            else if (directionArray[i] === "<") {
                santaX--;
            }
            positionArray.push(santaX + ", " + santaY);
        }
        
        if(i %2===1){
            if (directionArray[i] === "^") {
                rSantaY++
            }
            else if (directionArray[i] === ">") {
                rSantaX++;
            }
            else if (directionArray[i] === "v") {
                rSantaY--;
            }
            else if (directionArray[i] === "<") {
                rSantaX--;
            }
            positionArray.push(rSantaX + ", " + rSantaY);
        }
    }
    console.log({ "positionArray": positionArray });

    loop:
    for (var i = 0; i < positionArray.length; i++) {
        for (var j = i + 1; j < positionArray.length; j++) {
            if(positionArray[i]===positionArray[j]){
                continue loop;
            }
        }
        answer++;
    }
    myValues.output.innerHTML = answer;
}

// Imports basic var data that's useful to other functions
function getValues() {

    //Vars that are passed into the values object and then called out of the values object in other functions
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var inputArray = [];
    inputArray = input.split(" ");//splits the inputted value by each space which gets put into an array where each element is the equation of 1 box
    // console.info("Array Value: " + inputArray); //lists every box equation broken up into elements by equation

    //An object which contains the properties of the vars above so they can be easily passed into other functions
    var myValues = {
        input,
        output,
        inputArray
    };

    return myValues; // returns the values desired as an object in which each property can be called in any function that it's imported into
}