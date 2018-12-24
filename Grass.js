var LivingCreature = require("./LivingCreature.js")
module.exports = class Grass extends LivingCreature {



    mult() {
        if (weather != "dmer");
        else if(weather == "garun"){
            this.multiply +=2
        }
        var arr = this.chooseCell(0)
        var empty = arr[Math.floor(Math.random() * arr.length)]
        this.multiply++
        if (empty && this.multiply > 2) {
            xotQanak++;
            var newX = empty[0]
            var newY = empty[1]
            matrix[newY][newX] = 1
            var newGr = new Grass(newX, newY)
            grassArr.push(newGr)
        }
    }
}