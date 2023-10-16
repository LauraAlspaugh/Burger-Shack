import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";
import { BadRequest } from "../utils/Errors.js";




export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers');
        this.router
            .get('', this.getBurgers)
    }
    async getBurgers(request, response, next) {
        try {
            const burgers = await burgersService.getBurgers()
            return response.send(burgers)
        } catch (error) {
            next(error)
        }
    }
}