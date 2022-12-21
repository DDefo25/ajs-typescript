import Buyable from '../domain/Buyable';

export default class Cart {
    private _items: Buyable[] = [];

    add(item: Buyable): void {
        this._items.push(item);
    }

    get items(): Buyable[] {
        return [...this._items]; 
    }

    sum(): number {
        return [...this._items].reduce((sum, current) => sum + current.price, 0)
    }

    sumDiscount( discount: number ): number {
        return Math.round(this.sum() * (1 - discount / 100));
    }

    remove( id: number): void {
        this._items.splice(this._items.findIndex(item => item.id === id), 1);
    }
}