var LivingCreature = require("./LivingCreature.js")
module.exports = class Alien extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        this.energy = 15;
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

    mult() {
        var arr = this.chooseCell(0)
        var empty = arr[Math.floor(Math.random() * arr.length)]
        if (empty && this.energy > 10) {
            alienQanak++
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 5
            var al = new Alien(newX, newY)
            alienArr.push(al)
            this.energy--
        }

    }

    move() {
        var arr = this.chooseCell(0)
        var empty = arr[Math.floor(Math.random() * arr.length)]
        this.energy -= 2;
        if (empty) {
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0

            this.x = newX
            this.y = newY
        }
    }

    eat() {
        var arr = this.chooseCell(1)
        var food = arr[Math.floor(Math.random() * arr.lenght)]
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 5
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
        var arr = this.chooseCell(3)
        var food = arr[Math.floor(Math.random() * arr.lenght)]
        if (food) {
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 5
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
    eat3() {
        var arr = this.chooseCell(4)
        var food = arr[Math.floor(Math.random() * arr.lenght)]
        if (food) {
            meracxotakerQanak++
            var newX = food[0]
            var newY = food[1]
            matrix[newY][newX] = 5
            matrix[this.y][this.x] = 0

            for (var i in zombiArr) {
                if (zombiArr[i].x == newX && zombiArr[i].y == newY) {
                    zombiArr.splice(i, 1)
                }
            }
            this.x = newX
            this.y = newY
            this.energy += 2
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