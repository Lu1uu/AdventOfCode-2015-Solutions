//--- Day 2: I Was Told There Would Be No Math ---

const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'UTF-8')
const dimensions = input.split('\n')

let total = 0
for (let dimension of dimensions) {
    let [l, w, h] = dimension.split('x')
    let areas = [l * w, l * h, w * h]
    let smallestArea = Math.min(...areas)
    total += 2 * l * w + 2 * w * h + 2 * h * l + smallestArea
}

console.log(total)
