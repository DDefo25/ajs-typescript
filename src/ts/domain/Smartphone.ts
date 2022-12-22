import Buyable from "./Buyable";

export default class Smartphone implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly price: number,
        readonly numerous: boolean = true,
    ) { }
}