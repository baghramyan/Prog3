var LivingCreature = require("./LivingCreature.js")
module.exports = class Noth extends LivingCreature {
    constructor(x, y) {
        super(x,y);
        this.energy = 25;
       
    }

    getNewDirections() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ]
        this.directions1 = [

            [this.x - 2, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 2, this.y + 2]
        ]
    }

    chooseCell(character) {
        this.getNewDirections()
        var found = []
        for (var i in this.directions) {
            var x = this.directions[i][0]
            var y = this.directions[i][1]
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i])
                }
            }

        }
        return super.chooseCell(character);

    }
    move() {
        var arr = this.chooseCell(0)
        var empty = arr[Math.floor(Math.random() * arr.length)]
        if (empty) {
            this.energy-=2;
            notherenergiaQanak-=2;
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 6
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }
    eat() {
        if(weather == "dmer"){
            this.energy +=16;
        }
        var arr = this.chooseCell(5)
        var food = arr[Math.floor(Math.random() * arr.lenght)]
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 6
            matrix[this.y][this.x] = 0

            for (var i in alienArr) {
                if (alienArr[i].x == newX && alienArr[i].y == newY) {
                    alienArr.splice(i, 1)
                }
            }
            this.x = newX
            this.y = newY
            this.energy += 8
            notherenergiaQanak++;
        }
    }
    die() {
        if (this.energy >=-200) {
            matrix[this.y][this.x] = 0
            for (var i in nothArr) {
                if (nothArr[i].x == this.x && nothArr[i].y == this.y) {
                    nothArr.splice(i, 1)
                }
            }
        }
    }

}