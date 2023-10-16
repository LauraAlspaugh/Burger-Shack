import { FakeBurgerDb } from "../db/FakeBurgerDb.js";
import { Burger } from "../models/Burger.js";
import { BadRequest } from "../utils/Errors.js";

class BurgersService {
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
}
export const burgersService = new BurgersService()
