import Buyable from '../domain/Buyable';
import CartItem from '../domain/CartItem';

export default class Cart {
    private _items: CartItem[] = [];

    add( item: Buyable, amount: number = 1 ): void {
        const inCart = this.getCartItem( item.id );

        if (item.numerous && inCart) {
            inCart.amount += amount;
        } else {
            this._items.push({ item, amount: item.numerous ? amount : 1 })
        }
    }

    get items(): CartItem[] {
        return [...this._items]; 
    }

    getCartItem( id: number ): CartItem | undefined {
        const inCart = this._items.find(cartItem => cartItem.item.id === id);
        return inCart;
    }

    sum(): number {
        return [...this._items].reduce((sum, current) => sum + (current.item.price * current.amount), 0)
    }

    sumDiscount( discount: number ): number {
        return Math.round(this.sum() * (1 - discount / 100));
    }

    remove( id: number, amount: number = 1 ): void {
        const inCart = this.getCartItem( id );

        if (!inCart) {
            throw new Error (`Продукт с id ${id} не найден в корзине`)
        }

        if (inCart.amount - amount > 0) {
            inCart.amount -= amount;
        } else {
            this._items.splice(this._items.findIndex(cartItem => cartItem.item.id === id), 1);
        }
    }
}