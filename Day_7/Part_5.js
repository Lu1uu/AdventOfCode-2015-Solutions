const fs = require('fs')
const { parse } = require('node:path')
const INPUT = fs.readFileSync('./input.txt', 'utf-8').split('\n')
const COMMAND_REGEX = /[A-Z]+/g
const ARGUMENTS_REGEX = /[a-z0-9]+/g

const WIRES = {}

const BITWISE_METHODS = {
    AND: (a, b) => a & b,
    OR: (a, b) => a | b,
    NOT: (a) => ~a,
    LSHIFT: (a, b) => a << b,
    RSHIFT: (a, b) => a >> b,
}

const parseInstruction = (instruction) => {
    const command = instruction.match(COMMAND_REGEX)
    const args = instruction.match(ARGUMENTS_REGEX)
    const destination = args.pop()
    return {
        command: command && command[0],
        args: args.map((arg) => (isNaN(Number(arg)) ? arg : Number(arg))),
        destination,
    }
}

const calculateWire = (wireName) => {
    const wire = WIRES[wireName]
    if (typeof wireName === 'number') return wireName
    if (typeof wire === 'number') return wire
    if (typeof wire === 'undefined') return undefined

    if (!wire.command) WIRES[wireName] = calculateWire(wire.args[0])
    else {
        WIRES[wireName] = BITWISE_METHODS[wire.command](
            calculateWire(wire.args[0]),
            calculateWire(wire.args[1])
        )
    }
    return WIRES.get(wireName)
}

INPUT.forEach((instruction) => {
    const parsedInstruction = parseInstruction(instruction)
    WIRES[parsedInstruction.destination] = 
})
