import { Burger } from "../models/Burger.js"


export const FakeBurgerDb = {
    constructor() {


        burgers: [
            new Burger({ id: 1, name: 'Double Double Stopper', Price: 9.00, hasBacon: true }),
            new Burger({ id: 2, name: 'Tripple Burger', Price: 10.00, hasBacon: true }),
            new Burger({ id: 3, name: 'Single Stack', Price: 7.00, hasBacon: false })

        ]
    }
}
