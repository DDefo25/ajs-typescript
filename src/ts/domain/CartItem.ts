import Buyable from "./Buyable"

export default interface CartItem {
    readonly item: Buyable,
    amount: number,
}