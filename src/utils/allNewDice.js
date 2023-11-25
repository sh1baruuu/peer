import { generateNewDie } from "./generateNewDie"

export const allNewDice = () => {
    const newDice = []
    for (let i = 0; i < 10; i++) {
        newDice.push(generateNewDie())
    }
    return newDice
}