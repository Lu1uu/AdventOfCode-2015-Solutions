const PASSWORD = 'cqjxxyzz'
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

const iterateLetter = (letter) => alphabet[(alphabet.indexOf(letter) + 1) % 26]
const isLastLetter = (letter) => (letter == 'z' ? true : false)

const newPassword = (password) => {
    let passwordArr = [...password]
    let index = passwordArr.length - 1
    if (!isLastLetter(passwordArr[index])) {
        passwordArr[index] = iterateLetter(passwordArr[index])
    } else {
        while (isLastLetter(passwordArr[index])) {
            passwordArr[index] = iterateLetter(passwordArr[index--])
        }
        passwordArr[index] = iterateLetter(passwordArr[index])
    }
    return passwordArr.join('')
}

const fetchNewPassword = (password) => {
    password = newPassword(password)
    while (!isValid(password)) {
        password = newPassword(password)
    }
    return password
}

const hasStraight = (password) => {
    for (let i = 0; i < password.length - 2; i++) {
        if (
            alphabet.indexOf(password[i]) ===
                alphabet.indexOf(password[i + 1]) - 1 &&
            alphabet.indexOf(password[i + 2]) - 2 ===
                alphabet.indexOf(password[i])
        ) {
            return true
        }
    }
    return false
}

const hasNoForbbidens = (password) => !/i|o|u/.test(password)

const hasUniquePair = (password) => /([a-z])\1.*([a-z])\2/.test(password)

const isValid = (password) =>
    hasStraight(password) &&
    hasNoForbbidens(password) &&
    hasUniquePair(password)

console.log(fetchNewPassword(PASSWORD))
