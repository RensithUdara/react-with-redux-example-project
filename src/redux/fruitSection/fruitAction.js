import { BUY_FRUIT } from './fruitTypes'

export function BUY_FRUIT(noOfFruits) {
    return {
        type: BUY_FRUIT,
        payload: noOfFruits
    }
}