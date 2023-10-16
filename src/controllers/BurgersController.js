import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";
import { BadRequest } from "../utils/Errors.js";




export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers')
        this.router
            .get('', this.getBurgers)
            .get('/:burgerId', this.getBurgerById)
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
}