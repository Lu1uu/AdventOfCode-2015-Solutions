//--- Day 1: Not Quite Lisp ---

const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'UTF-8')
const arrOfParenthesis = input.split('')
const newFloorLevel = arrOfParenthesis.reduce((floorLevel, char, index) => {
    if (floorLevel === -1) {
        console.log(index)
        return
    }
    return char === ')' ? --floorLevel : ++floorLevel
}, 0)
