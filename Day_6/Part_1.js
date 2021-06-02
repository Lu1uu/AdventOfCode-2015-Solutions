//--- Day 6: Probably a Fire Hazard ---
const fs = require('fs')
const INSTRUCTIONS = fs.readFileSync('./input.txt').toString().split('\n')
const LIGHTS = {}

const fetchInstruction = (_instruction) => {
    let instruction = _instruction.match(
        /(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)/
    )
    return {
        instruction: instruction[1],
        x1: +instruction[2],
        y1: +instruction[3],
        x2: +instruction[4],
        y2: +instruction[5],
    }
}

const initializeLights = () => {
    for (let i = 0; i <= 999; i++)
        for (let j = 0; j <= 999; j++) LIGHTS[`${i}:${j}`] = 0
}

initializeLights()
INSTRUCTIONS.forEach((_instruction) => {
    let instruction = fetchInstruction(_instruction)
    for (let x = instruction.x1; x <= instruction.x2; x++) {
        for (let y = instruction.y1; y <= instruction.y2; y++) {
            let key = `${x}:${y}`
            if (instruction.instruction === 'turn on') LIGHTS[key] = 1
            if (instruction.instruction === 'turn off') LIGHTS[key] = 0
            if (instruction.instruction === 'toggle')
                LIGHTS[key] = LIGHTS[key] === 0 ? 1 : 0
        }
    }
})

const RESULT = Object.keys(LIGHTS).reduce((total, light) => {
    return LIGHTS[light] === 1 ? ++total : total
}, 0)

console.log(RESULT)
