//--- Day 3: Perfectly Spherical Houses in a Vacuum ---

const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'UTF-8')
const directions = input.split('')
const roboSanta = []
const santa = []
// Split into santa and robo santa
for (let i = 0; i < directions.length; i++) {
    if (i % 2 == 0) roboSanta.push(directions[i])
    else santa.push(directions[i])
}
let pointsVisited = new Set()
let santaX = 0,
    santaY = 0,
    roboSantaX = 0,
    roboSantaY = 0
pointsVisited.add(`x:${0},y:${0}`)

roboSanta.forEach((direction) => {
    switch (direction) {
        case '<':
            roboSantaX--
            break
        case '>':
            roboSantaX++
            break

        case 'v':
            roboSantaY--
            break

        case '^':
            roboSantaY++
            break
    }
    pointsVisited.add(`x:${roboSantaX},y:${roboSantaY}`)
})

santa.forEach((direction) => {
    switch (direction) {
        case '<':
            santaX--
            break
        case '>':
            santaX++
            break

        case 'v':
            santaY--
            break

        case '^':
            santaY++
            break
    }
    pointsVisited.add(`x:${santaX},y:${santaY}`)
})

console.log(pointsVisited.size)
