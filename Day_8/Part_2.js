const fs = require('fs')
const INPUT = fs.readFileSync('./input.txt').toString().split('\n')

let totalCharCount = 0,
    totalNewCharCount = 0
for (const line of INPUT) {
    totalCharCount += line.length
    totalNewCharCount += getNewCharCount(line)
}
console.log(totalNewCharCount - totalCharCount)

function getNewCharCount(_str) {
    str = _str.split('')
    let count = 2
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '"') {
            count += 2
            continue
        }
        if (str[i] == '\\') {
            count += 2
        } else {
            count++
        }
    }
    return count
}
