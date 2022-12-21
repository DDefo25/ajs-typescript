import Buyable from "./Buyable"

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly nameEng: string,
        readonly year: number,
        readonly country: string,
        readonly tagline: string,
        readonly genres: string[],
        readonly duration: number,
        readonly imax: boolean,
        readonly cover: string,
        readonly price: number,
    ) { }
}