//--- Day 7: Some Assembly Required ---
const fs = require('fs')
const INSTRUCTIONS = fs.readFileSync('./input.txt').toString().split('\n')

const wires = {}

//OPERATIONS
const operation_NOT = (a) => ~a
const operation_AND = (a, b) => a & b
const operation_OR = (a, b) => a | b
const operation_LSHIFT = (a, b) => a << b
const operation_RSHIFT = (a, b) => a >> b

const executeInstruction = (_instruction) => {
    let normalInstruction = /(\w+)\s(AND|OR|LSHIFT|RSHIFT)\s(\w+)\s...(\w+)/
    let notInstruction = /(NOT)\s(\w+)....(\w+)/
    let assignmentInstruction = /(\d+)\s...(\w+)/
    let instruction =
        _instruction.match(normalInstruction) ||
        _instruction.match(notInstruction) ||
        _instruction.match(assignmentInstruction) ||
        'NONE'
    console.log(instruction)
    if (assignmentInstruction.test(instruction[0]) || instruction == 'NONE') {
        wires[instruction[2]] = instruction[1]
        return
    }
    if (notInstruction.test(instruction[0])) {
        wires[instruction[3]] = operation_NOT(instruction[2])
        return
    }
    if (normalInstruction.test(instruction[0])) {
        switch (instruction[2]) {
            case 'AND':
                wires[instruction[4]] = operation_AND(
                    instruction[1],
                    instruction[3]
                )
                return
            case 'OR':
                wires[instruction[4]] = operation_OR(
                    instruction[1],
                    instruction[3]
                )
                return
            case 'LSHIFT':
                wires[instruction[4]] = operation_LSHIFT(
                    instruction[1],
                    instruction[3]
                )
                return
            case 'RSHIFT':
                wires[instruction[4]] = operation_RSHIFT(
                    instruction[1],
                    instruction[3]
                )
                return
        }
    }
}

INSTRUCTIONS.forEach((inp) => executeInstruction(inp))
console.log(wires)
