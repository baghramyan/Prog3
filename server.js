var fs = require("fs");
var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
app.use(express.static("."));
app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000);
function getRandInt(min, max) {
    var z = Math.floor(Math.random() * (max - min + 1)) + min;
    return z;
}



matrix = [];
dmer = [];
ashun = [];
garun = [];
amar = [];
var n = 35;
var m = 35;
grassArr = [];
xotakerArr = [];
gishatichArr = [];
zombiArr = [];
alienArr = [];
nothArr = [];

xotQanak = 0;
xotakerQanak = 0;
alienQanak = 0;
notherenergiaQanak = 0;
for (var y = 0; y < n; y++) {
    matrix[y] = [];
    for (var x = 0; x < m; x++) {

        matrix[y][x] = getRandInt(0, 6)
    }
}
var arr = ["dmer", "garun", "amar", "ashun"]
weather = 0;


setInterval(drawWeather, 5000)
var num = 0;
function drawWeather() {
    if (num == 4) {
        num = 0;
    }
    weather = arr[num];
    num++;
}
//console.log(matrix)
var Grass = require("./Grass.js");
var Xotaker = require("./Xotaker.js");
var Gishatich = require("./Gishatich.js");
var Zombi = require("./Zombi.js");
var Alien = require("./Alien.js");
var Noth = require("./Noth.js");

for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
        if (matrix[y][x] == 1) {
            var gr = new Grass(x, y)
            grassArr.push(gr)
        }
        else if (matrix[y][x] == 2) {
            var xt = new Xotaker(x, y)
            xotakerArr.push(xt)
        }
        else if (matrix[y][x] == 3) {
            var gt = new Gishatich(x, y)
            gishatichArr.push(gt)
        }
        else if (matrix[y][x] == 4) {
            var zm = new Zombi(x, y)
            zombiArr.push(zm)
        }
        else if (matrix[y][x] == 6) {
            var nt = new Noth(x, y)
            nothArr.push(nt)
        }
        else if (matrix[y][x] == 5) {
            var al = new Alien(x, y)
            alienArr.push(al)
        }
    }
}


setInterval(drawserver, 3000);
function drawserver() {

    for (var i in grassArr) {
        grassArr[i].mult()
    }


    for (var i in xotakerArr) {
        xotakerArr[i].eat()
        xotakerArr[i].move()
        xotakerArr[i].mult()
        xotakerArr[i].die()
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat()
        gishatichArr[i].move()
        gishatichArr[i].mult()
        gishatichArr[i].die()
    }


    for (var i in zombiArr) {
        zombiArr[i].eat()
        zombiArr[i].eat1()
        zombiArr[i].eat2()
        zombiArr[i].move()
        zombiArr[i].mult()
        zombiArr[i].die()
    }

    for (var i in alienArr) {
        alienArr[i].eat()
        alienArr[i].eat2()
        alienArr[i].eat3()
        alienArr[i].move()
        alienArr[i].mult()
        alienArr[i].die()
    }

    for (var i in nothArr) {
        nothArr[i].eat()
        nothArr[i].move()
        nothArr[i].die()
    }

    io.sockets.emit("matrix", [matrix, weather])
}


var obj = {"info":  [] }
function main (){
  var file = "Statistics.json"
  obj.info.push({"xoteri qanak": xotQanak,"xotaker qanak": xotakerQanak, "alieneri qanak": alienQanak, "notheri energiayi qanak": notherenergiaQanak});
  fs.writeFileSync(file, JSON.stringify(obj))
}

setInterval(main, 1000)


