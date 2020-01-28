function day1a() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var array = [];
    var floor = 0;
    var firstNegative;

    //take every char in input and seperate by comma into an array
    for (var i = 0; i < input.length; i++) {
        array.push(input.charAt(i));
    }
    // console.log({array});
    for (var i = 0; i < array.length; i++) {
        if (array[i] === "(") {
            floor++;
        }
        else {
            floor--;
        }
        // console.log("floor" + floor);
    }
    output.innerHTML = floor;
}

function day1b() {
    var input = document.getElementById("input").value;
    var output = document.getElementById("output");
    var array = [];
    var floor = 0;
    var firstNegative;

    //take every char in input and seperate by comma into an array
    for (var i = 0; i < input.length; i++) {
        array.push(input.charAt(i));
    }
    // console.log({array});
    for (var i = 0; i < array.length; i++) {
        if (array[i] === "(") {
            floor++;
        }
        else {
            floor--;
        }
        if (floor < 0) {
            firstNegative = i + 1;
            // console.log("first negative " + firstNegative);
            output.innerHTML = firstNegative;
            return;
        }
    }
}