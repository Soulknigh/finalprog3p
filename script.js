//knchum enq socket.io ev haytarum en side canvasi hamar
var side = 20;
var socket = io();

 //setup
 function setup() {
    createCanvas(20 * side , 20 * side);
    background('blue');  
 }
 
 //nuyn draw functiony uxaki serveric ekac matrixi hashvin 
 function drawMatrix(matrix) {
    background('#acacac');

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 0) {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("red");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 5) {
                fill("orange");
                rect(x * side, y * side, side, side);
            }
        }
    }
}

//yndunuma serveric matrixy ev kanchuma drawMatrix
socket.on("matrix", drawMatrix);



