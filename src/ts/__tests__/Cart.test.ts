import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';
import Smartphone from '../domain/Smartphone';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('cart should add new Movie', () => {
  const result = [{
    item: {
      country: "США",
      cover: "https://github.com/netology-code/ajs-homeworks/raw/ajs8/typescript/pic/avengers.png",
      duration: 137,
      genres: ['фантастика', 'боеквик', 'фэнтези', 'приключения'],
      id: 1001,
      imax: true,
      name: "Мстители",
      nameEng: "The Avengers",
      price: 1225,
      tagline: "Avengers Assemble!",
      year: 2012
    }, amount: 1, 
  }]
  const cart = new Cart();  
  cart.add(new Movie(1001, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боеквик', 'фэнтези', 'приключения'], 137, true, 'https://github.com/netology-code/ajs-homeworks/raw/ajs8/typescript/pic/avengers.png', 1225));

  expect(cart.items).toEqual(result);
})

test('sum should return total price of cart', () => {
  const cart = new Cart();  
  cart.add(new Movie(1001, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боеквик', 'фэнтези', 'приключения'], 137, true, 'https://github.com/netology-code/ajs-homeworks/raw/ajs8/typescript/pic/avengers.png', 1225));
  cart.add(new Book(1003, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Smartphone(1002, 'iPhone 47', 900), 5);

  expect(cart.sum()).toBe(8625);
})

test('sumDiscount should return total price of cart with discount', () => {
  const cart = new Cart();  
  cart.add(new Movie(1001, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боеквик', 'фэнтези', 'приключения'], 137, true, 'https://github.com/netology-code/ajs-homeworks/raw/ajs8/typescript/pic/avengers.png', 1225));
  cart.add(new Book(1002, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Smartphone(1004, 'iPhone 47', 900), 10);

  expect(cart.sumDiscount(20)).toBeCloseTo(10500);
})

test('remove should delete item from cart', () => {
  const result = [{
    item: {
      country: "США",
      cover: "https://github.com/netology-code/ajs-homeworks/raw/ajs8/typescript/pic/avengers.png",
      duration: 137,
      genres: ['фантастика', 'боеквик', 'фэнтези', 'приключения'],
      id: 1001,
      imax: true,
      name: "Мстители",
      nameEng: "The Avengers",
      price: 1225,
      tagline: "Avengers Assemble!",
      year: 2012
    }, amount: 1 
  }, {
    item: {
      id: 1004,
      name: "iPhone 47",
      price: 900,
      numerous: true,
    }, amount: 8 
  }]

  const cart = new Cart();  
  cart.add(new Movie(1001, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боеквик', 'фэнтези', 'приключения'], 137, true, 'https://github.com/netology-code/ajs-homeworks/raw/ajs8/typescript/pic/avengers.png', 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));
  cart.add(new Smartphone(1004, 'iPhone 47', 900), 4);
  cart.add(new Smartphone(1004, 'iPhone 47', 900), 6);

  cart.remove(1008);
  cart.remove(1004, 2);

  expect(cart.items).toEqual(result);
})

test('remove should delete item from cart', () => {
  const cart = new Cart();
  const removing = () => {
    cart.remove(1008);
  }
  expect(removing).toThrowError(`Продукт с id ${1008} не найден в корзине`)
})
