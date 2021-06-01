//--- Day 4: The Ideal Stocking Stuffer ---
var md5 = require('md5')
let hashWord = 'ckczppom'
let numberKey = 0
let valid = false

while (!valid) {
    const [first, second, third, forth, fifth, sixth] = md5(
        hashWord + ++numberKey
    ).split('')
    if (
        first == 0 &&
        second == 0 &&
        third == 0 &&
        forth == 0 &&
        fifth == 0 &&
        sixth == 0
    ) {
        valid = true
        break
    }
}
console.log(md5(hashWord + numberKey))
console.log(numberKey)
