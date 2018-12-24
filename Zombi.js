var LivingCreature = require("./LivingCreature.js")
module.exports = class Zombi extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 5;
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

    mult() {
        if(weather == "garun"){
            this.energy++
        }
        var arr = this.chooseCell(0)
        var empty = arr[Math.floor(Math.random() * arr.length)]
        if (empty && this.energy > 20) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            var zm = new Zombi(newX, newY)
            gishatichArr.push(zm)
            this.energy /= 2
        }
    }

    move() {
        if (weather == "dmer"){
            this.energy /=4;
        }
        var arr = this.chooseCell(0)
        var empty = arr[Math.floor(Math.random() * arr.length)]
        this.energy /= 2;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat() {
        var arr = this.chooseCell(3)
        var food = arr[Math.floor(Math.random() * arr.lenght)]
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            for (var i in gishatichArr) {
                if (gishatichArr[i].x == newX && gishatichArr[i].y == newY) {
                    gishatichArr.splice(i, 1)
                }
            }
            this.x = newX
            this.y = newY
            this.energy++
        }
    }
    eat1() {
        var arr = this.chooseCell(1)
        var food = arr[Math.floor(Math.random() * arr.lenght)]
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            for (var i in grassArr) {
                if (grassArr[i].x == newX && grassArr[i].y == newY) {
                    grassArr.splice(i, 1)
                }
            }
            this.x = newX
            this.y = newY
            this.energy++
        }

    }
     eat2() {
        var arr = this.chooseCell(2)
        var food = arr[Math.floor(Math.random() * arr.lenght)]
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 4
            matrix[this.y][this.x] = 0

            for (var i in xotakerArr) {
                if (xotakerArr[i].x == newX && xotakerArr[i].y == newY) {
                    xotakerArr.splice(i, 1)
                }
            }
            this.x = newX
            this.y = newY
            this.energy++
        }

    }
    die() {
        if (this.energy <= 0) {
            matrix[this.y][this.x] = 0
            for (var i in zombiArr) {
                if (zombiArr[i].x == this.x && zombiArr[i].y == this.y) {
                    zombiArr.splice(i, 1)
                }
            }
        }
    }
}