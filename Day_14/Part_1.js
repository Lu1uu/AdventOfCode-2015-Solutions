const fs = require('fs')
const input = fs.readFileSync('./input.txt', 'utf-8').split('\n')
const stopTime = 2503

const fetchDistance = (reindeer) => {
    const args = reindeer.match(/\d+/g)
    const speed = +args[0]
    const time = +args[1]
    const rest = +args[2]
    return Math.ceil(stopTime / (time + rest)) * (speed * time)
}

const result = input.reduce((max, reindeer) => {
    return fetchDistance(reindeer) > max ? fetchDistance(reindeer) : max
}, 0)

console.log(result)
