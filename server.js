var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, function () {
    console.log("port is runninng")

});

//stex kapum en mer classery
var Grass = require("./module/Grass.js");
var GrassEater = require("./module/GrassEater.js");
var Xishnik = require("./module/Predator.js");
var TRex = require("./module/TRex.js");
var Triceratops = require("./module/Triceratops.js");


//haytarum en zanvacnery
grassArr = [];
grasseaterArr = [];
xishnikArr = [];
trexArr = [];
triceratopsArr = [];


//stexcum en matrix generacnox function
var w = 50;
var h = 60;

function genMatrix(w, h) {
    var matrix = [];
    for (var y = 0; y < h; y++) {
        matrix[y] = [];
        for (var x = 0; x < w; x++) {
            var r = Math.floor(Math.random() * 75);
            if (r < 20) r = 0;
            else if (r < 30) r = 1;
            else if (r < 55) r = 2;
            else if (r < 75) r = 3;
            // else if (r < 85) r = 4;
            // else if (r < 100) r = 5;
            matrix[y][x] = r;
        }
    }
    return matrix;
}




//kanchum en genMatrix functiony ev talis en matrix popoxakanin
matrix = genMatrix(w, h);

for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {

        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y, 1);
            grassArr.push(gr);
        }
        else if (matrix[y][x] == 2) {
            var ge = new GrassEater(x, y, 2);
            grasseaterArr.push(ge);
        }
        else if (matrix[y][x] == 3) {
            var xs = new Xishnik(x, y, 3);
            xishnikArr.push(xs);
        }
        else if (matrix[y][x] == 4) {
            var tr = new TRex(x, y, 4);
            trexArr.push(tr);
        }
        else if (matrix[y][x] == 5) {
            var as = new Triceratops(x, y, 5);
            triceratopsArr.push(as);
        }
    }
}

function drawserver() {
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grasseaterArr) {
        grasseaterArr[i].eat();
    }
    for (var i in trexArr) {
        trexArr[i].eat();
    }
    for (var i in xishnikArr) {
        xishnikArr[i].eat();
    }
    for (var i in triceratopsArr) {
        triceratopsArr[i].eat();
    }
    io.sockets.emit("matrix", matrix);
}

setInterval(drawserver, 3000);

Random = function (arr) {
    return arr[Math.floor(Math.random() * arr.lenght)];
}


// //connectiona stexcum scriptic ekac infoi himan vra script.js i het mousePressed i jamanak
// io.on('connection', function (socket) {
//     socket.on("Sxmvec", function (arr) {
//         //stexi code y chem grel esel duq greq))
//         //sranic avel chem hushelu
//         //ba
//     });
// });










