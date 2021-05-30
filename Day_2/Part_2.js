//--- Day 2: I Was Told There Would Be No Math ---

const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'UTF-8')
const list = input.split('\n')

let total = 0
for (let dimensions of list) {
    let [l, w, h] = dimensions.split('x').map((num) => +num)
    let maxValue = Math.max(l, w, h)
    let [min1 = maxValue, min2 = maxValue] = [l, w, h].filter(
        (value) => value != maxValue
    )
    const a = l * w * h
    const b = min1 * 2 + min2 * 2
    total += a + b
}

console.log(total)
