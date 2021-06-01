//--- Day 5: Doesn't He Have Intern-Elves For This? ---
const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'UTF-8')
let wordList = input.split('\n')
let validWords = 0
let validWordList = []

wordList.forEach((word) => {
    if (doubleLetterTwice(word) && letterRepeatBetween(word)) {
        validWords++
        validWordList.push(word)
    }
})

function doubleLetterTwice(word) {
    return /([a-z][a-z]).*\1/.test(word)
}

function letterRepeatBetween(word) {
    return /([a-z]).\1/.test(word)
}
console.log(validWords)
