var socket = io();
var n = 35;
var m = 35;
var side = 20;

function setup() {
  createCanvas(side * n, side * m);
  background("#acacac");
  frameRate(5);
}
function drawMatrix(arr) {
  var matrix = arr[0];
  var weather = arr[1];
  console.log(weather);
  for (var y = 0; y < matrix.length; y++) {
    for (var x = 0; x < matrix[y].length; x++) {
      if (matrix[y][x] == 1) {
          fill("green")
      }
      else if (matrix[y][x] == 2) {
        fill("yellow")

      }
      else if (matrix[y][x] == 3) {
        fill("red");
      }
      else if (matrix[y][x] == 4) {
        fill("orange");
      }
      else if (matrix[y][x] == 5) {
        if(weather == "dmer")
        fill("blue");
        else if (weather == "amar"){
          fill("#e65c00")
        }
        else if (weather == "ashun"){
          fill("#00ff00")
        }
        else if (weather == "garun"){
          fill("pink")
        }
      }
      else if (matrix[y][x] == 6) {
        fill("black");
      }

      else if (matrix[y][x] == 0) {
        fill("#acacac");
      }

      rect(x * side, y * side, side, side)


      text(x + " " + y, x * side + side / 2, y * side + side / 2)

    }
  }
}

socket.on('matrix', drawMatrix);

