//--- Day 5: Doesn't He Have Intern-Elves For This? ---
const fs = require('fs')

const input = fs.readFileSync('./input.txt', 'UTF-8')
const wordList = input.split('\n')
let validWords = 0
let validWordList = []

wordList.forEach((word) => {
    if (!containsForbidden(word) && enoughVowels(word) && doubleLetter(word)) {
        validWords++
        validWordList.push(word)
    }
})

function containsForbidden(word) {
    let forbiddenStrings = ['ab', 'cd', 'pq', 'xy']
    for (let i = 0; i < word.length - 1; i++) {
        if (forbiddenStrings.includes(word[i] + word[i + 1])) return true
    }
    return false
}

function enoughVowels(word) {
    let vowels = 'aeiou'.split('')
    let vowelCount = 0
    word.split('').forEach((letter) => {
        if (vowels.includes(letter)) vowelCount++
    })
    return vowelCount >= 3 ? true : false
}

function doubleLetter(word) {
    for (let i = 0; i < word.length - 1; i++) {
        if (word[i] == word[i + 1]) {
            return true
        }
    }
    return false
}

console.log(validWords)
console.log(validWordList)
