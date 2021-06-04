const fs = require('fs')
const INPUT = fs.readFileSync('./input.txt').toString().split('\n')

let totalCharCount = 0,
    totalStringCount = 0
for (const line of INPUT) {
    totalCharCount += line.length
    totalStringCount += getStringCount(line)
}

console.log(totalCharCount - totalStringCount)

function getStringCount(_str) {
    str = _str.split('')
    let count = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i] == '"') continue
        if (str[i] == '\\') {
            if (str[i + 1] == 'x') {
                count++
                i += 3
                continue
            }
            count++
            i++
        } else {
            count++
        }
    }
    return count
}
