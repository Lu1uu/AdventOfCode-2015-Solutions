const INPUT = 33100000 / 10
const houses = new Uint32Array(INPUT)
let houseNumber = INPUT

for (let i = 1; i < INPUT; i++) {
    for (let j = i; j < INPUT; j += i) {
        if ((houses[j] += i) >= INPUT && j < houseNumber) houseNumber = j
    }
}

console.log(houseNumber)
