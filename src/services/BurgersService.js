import { FakeBurgerDb } from "../db/FakeBurgerDb.js";
import { Burger } from "../models/Burger.js";
import { BadRequest } from "../utils/Errors.js";

class BurgersService {
    async removeBurger(burgerId) {
        const burgerIndex = FakeBurgerDb.burgers.findIndex(burger => burger.id == burgerId)
        if (burgerIndex == -1) {
            throw new BadRequest('Invalid Id')
        }
        await FakeBurgerDb.burgers.splice(burgerIndex, 1)
    }
    async getBurgerById(burgerId) {
        const foundBurger = await FakeBurgerDb.burgers.find(burger => burger.id == burgerId)
        if (!foundBurger) {
            throw new BadRequest('this is not a valid id')
        }
        return foundBurger
    }
    async getBurgers() {
        const burgers = await FakeBurgerDb.burgers
        return burgers
    }
    async createBurger(burgerData) {
        if (FakeBurgerDb.burgers.length == 0) {
            burgerData.id = 1
        } else {
            const burgerIds = FakeBurgerDb.burgers.map(burger => burger.id)
            const largestBurgerId = Math.max(...burgerIds)
            burgerData.id = largestBurgerId + 1
        }
        const newBurger = new Burger(burgerData)
        await FakeBurgerDb.burgers.push(newBurger)
        return newBurger
    }
}
export const burgersService = new BurgersService()
