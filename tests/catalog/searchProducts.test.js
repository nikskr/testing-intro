const products = require("../../src/data/products");
const { searchProducts } = require("../../src/catalog");

describe("searchProducts", () => {
  // test.todo("'Наушники' возвращает товар с ID 1");
  test("'Наушники' возвращает товар с ID 1", () => {
    const product = products.find((p) => p.id === 1);
    expect(searchProducts(products, "Наушники")).toEqual([product]);
  });
  // test.todo("'Чистый код' возвращает товар с ID 6");
  test("'Чистый код' возвращает товар с ID 6", () => {
    const product = products.find((p) => p.id === 6);
    expect(searchProducts(products, "Чистый код")).toEqual([product]);
  });
  // test.todo("'Настольная лампа' возвращает товар с ID 4");
  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const product = products.find((p) => p.id === 4);
    expect(searchProducts(products, "Настольная лампа")).toEqual([product]);
  });
  // test.todo("'javascript' возвращает товар с ID 3");
  test("'javascript' возвращает товар с ID 3", () => {
    const product = products.find((p) => p.id === 3);
    expect(searchProducts(products, "javascript")).toEqual([product]);
  });
  // test.todo("'ЧЕХОЛ' возвращает товар с ID 5");
  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const product = products.find((p) => p.id === 5);
    expect(searchProducts(products, "ЧЕХОЛ")).toEqual([product]);
  });
  // test.todo("'наушники' возвращает товар с ID 1");
  test("'наушники' возвращает товар с ID 1", () => {
    const product = products.find((p) => p.id === 1);
    expect(searchProducts(products, "наушники")).toEqual([product]);
  });
  // test.todo("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(searchProducts(products, "")).toEqual(products);
  });
  // test.todo("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(searchProducts(products, "   ")).toEqual(products);
  });
  // test.todo("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]");
  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    expect(searchProducts(products, "\t\n")).toEqual(products);
  });
});
