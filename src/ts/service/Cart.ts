import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];
    amounts = new WeakMap();

    add( item: Buyable, amount: number = 1 ): void {
        const inCart = this.getCartItem( item.id );

        if (item.numerous && inCart) {
            const amountInCart = this.getAmount(item.id);
            this.amounts.set( inCart, amountInCart + amount );
        } else if (!inCart) {
            this._items.push( item );
            this.amounts.set( item, item.numerous ? amount : 1 );
        }
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    getAmount( id: number ): number {
        const inCart = this.getCartItem( id );
        if (!inCart) {
            return 0;
        } else {
            return this.amounts.get( inCart );
        }
    }

    getCartItem( id: number ): Buyable | undefined {
        return this._items.find( item => item.id === id );
    }

    sum(): number {
        return [...this._items].reduce((sum, current) => {
            return sum + (current.price * this.getAmount(current.id));
            }, 0);
    }

    sumDiscount( discount: number ): number {
        return Math.round(this.sum() * (1 - discount / 100));
    }

    remove( id: number, amount: number = 1 ): void {
        const inCart = this.getCartItem( id );

        if (!inCart) {
            throw new Error (`Продукт c id ${id} не найден в корзине`);
        }

        const amountInCart = this.getAmount(id);

        if (amountInCart - amount <= 0) {
            this._items.splice(this._items.findIndex(item => item.id === id), 1);
        } else {
            this.amounts.set(inCart, amountInCart - amount);
        }
    }
}