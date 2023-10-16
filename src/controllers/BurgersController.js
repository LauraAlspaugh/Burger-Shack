import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";
import { BadRequest } from "../utils/Errors.js";




export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers')
        this.router
            .get('', this.getBurgers)
            .get('/:burgerId', this.getBurgerById)
            .post('', this.createBurger)
            .delete('/:burgerId', this.removeBurger)
    }
    async getBurgers(request, response, next) {
        try {
            const burgers = await burgersService.getBurgers()
            // throw new BadRequest('testing error')
            return response.send(burgers)
        } catch (error) {
            next(error)
        }
    }
    async getBurgerById(request, response, next) {
        try {
            const burgerId = request.params.burgerId
            const burger = await burgersService.getBurgerById(burgerId)
            return response.send(burger)
        } catch (error) {
            next(error)
        }
    }
    async createBurger(request, response, next) {
        try {
            const burgerData = request.body
            const burger = await burgersService.createBurger(burgerData)
            response.send(burger)
        } catch (error) {
            next(error)
        }
    }
    async removeBurger(request, response, next) {
        try {
            const burgerId = request.params.burgerId
            await burgersService.removeBurger(burgerId)
            response.send('we want to removed this burger. It  was not a good seller. Like at all.')
        } catch (error) {
            next(error)
        }
    }
}