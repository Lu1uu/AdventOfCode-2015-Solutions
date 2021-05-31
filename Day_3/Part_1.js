//--- Day 3: Perfectly Spherical Houses in a Vacuum ---

const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'UTF-8')
const directions = input.split('')
let pointsVisited = new Set()
let x = 0,
    y = 0

pointsVisited.add(`x:${x},y:${y}`)
directions.forEach((direction) => {
    switch (direction) {
        case '<':
            x--
            break
        case '>':
            x++
            break

        case 'v':
            y--
            break

        case '^':
            y++
            break
    }
    pointsVisited.add(`x:${x},y:${y}`)
})

console.log(pointsVisited.size)
