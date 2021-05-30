//--- Day 1: Not Quite Lisp ---

const fs = require('fs')

let input = fs.readFileSync('./input.txt', 'UTF-8')
arrOfParenthesis = input.split('')
let newFloorLevel = arrOfParenthesis.reduce((floorLevel, char) => {
    return char === ')' ? --floorLevel : ++floorLevel
}, 0)

console.log(newFloorLevel)
