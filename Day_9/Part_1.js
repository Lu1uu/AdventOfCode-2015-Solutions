const fs = require('fs')
let INPUT = fs.readFileSync('./input.txt').toString().split('\n')
const locationMap = {}
const locations = []
let possiblePaths = []

INPUT = INPUT.map((line) => {
    const [_, locationA, locationB, distance] = line.match(
        /(\w+)\s..\s(\w+)...(\d+)/
    )
    return [locationA, locationB, distance]
})

function createMap([locationA, locationB, distance]) {
    if (!locationMap[locationA]) locationMap[locationA] = {}
    if (!locationMap[locationB]) locationMap[locationB] = {}
    locationMap[locationA] = {
        ...locationMap[locationA],
        [locationB]: distance,
    }
    locationMap[locationB] = {
        ...locationMap[locationB],
        [locationA]: distance,
    }
}

INPUT.forEach((line) => {
    createMap(line)
})

console.log(JSON.stringify(locationMap, null, 4))

for (const location of Object.keys(locationMap)) {
    locations.push(location)
}

// let currentLocation = possiblePaths
// for (let i = 0; i < locations.length; i++) {
//     possiblePaths[i] = ''
//     for (let j = i; j < locations.length; j++) {
//         possiblePaths[i] += locations[j] + '->'
//     }
// }
// console.log(locations)
// console.log(possiblePaths)

let swap = function (array, index1, index2) {
    var temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
    return array
}

let permutationHeap = function (array, result, n) {
    n = n || array.length
    if (n === 1) {
        result(array)
    } else {
        for (var i = 1; i <= n; i++) {
            permutationHeap(array, result, n - 1)
            if (n % 2) {
                swap(array, 0, n - 1)
            } else {
                swap(array, i - 1, n - 1)
            }
        }
    }
}
var output = function (input) {
    console.log(input)
    possiblePaths.push(input)
}
possiblePaths = permutationHeap(locations, output)
console.log(possiblePaths)
