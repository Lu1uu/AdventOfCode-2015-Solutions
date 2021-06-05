let INPUT = '3113322113'.split('').map((num) => +num)
let iterations = 0

const lookAndSay = (input) => {
    console.log(iterations, input.length)
    if (iterations >= 40) return input.length
    let numMap = []
    for (let i = 0; i < input.length; i++) {
        let appearances = 1
        let number = input[i]
        while (input[i] === input[i + 1]) {
            i++
            appearances++
        }
        numMap.push([appearances, number])
    }
    iterations++
    numMap = numMap.flat()
    return lookAndSay(numMap)
}

console.log(lookAndSay(INPUT))
