//--- Day 1: Not Quite Lisp ---

const fs = require('fs')

let input = fs.readFileSync('./input.txt', 'UTF-8')
arrOfParenthesis = input.split('')
let newFloorLevel = arrOfParenthesis.reduce((floorLevel, char, index) => {
    if (floorLevel === -1) {
        console.log(index)
        return
    }
    return char === ')' ? --floorLevel : ++floorLevel
}, 0)
