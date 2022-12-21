import Cart from '../service/Cart';
import Movie from '../domain/Movie';
import Book from '../domain/Book';
import MusicAlbum from '../domain/MusicAlbum';

test('new card should be empty', () => {
  const cart = new Cart();

  expect(cart.items.length).toBe(0);
});

test('cart should add new Movie', () => {
  const result = [{
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

  expect(cart.sum()).toBe(4125);
})

test('sumDiscount should return total price of cart with discount', () => {
  const cart = new Cart();  
  cart.add(new Movie(1001, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боеквик', 'фэнтези', 'приключения'], 137, true, 'https://github.com/netology-code/ajs-homeworks/raw/ajs8/typescript/pic/avengers.png', 1225));
  cart.add(new Book(1002, 'War and Piece', 'Leo Tolstoy', 2000, 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  expect(cart.sumDiscount(20)).toBeCloseTo(3300);
})

test('remove should delete item from cart', () => {
  const result = [{
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
  }]

  const cart = new Cart();  
  cart.add(new Movie(1001, 'Мстители', 'The Avengers', 2012, 'США', 'Avengers Assemble!', ['фантастика', 'боеквик', 'фэнтези', 'приключения'], 137, true, 'https://github.com/netology-code/ajs-homeworks/raw/ajs8/typescript/pic/avengers.png', 1225));
  cart.add(new MusicAlbum(1008, 'Meteora', 'Linkin Park', 900));

  cart.remove(1008);

  expect(cart.items).toEqual(result);
})

