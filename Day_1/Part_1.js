//--- Day 1: Not Quite Lisp ---

const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'UTF-8')
const arrOfParenthesis = input.split('')
const newFloorLevel = arrOfParenthesis.reduce((floorLevel, char) => {
    return char === ')' ? --floorLevel : ++floorLevel
}, 0)

console.log(newFloorLevel)
