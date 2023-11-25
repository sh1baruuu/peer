import { nanoid } from "nanoid"

export const generateNewDie = () => {

    return {
        value: Math.floor(Math.random() * 6),
        isHeld: false,
        id: nanoid()
    }
}