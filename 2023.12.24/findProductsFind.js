var products = [
  { productName: "Acer Asprie 4", catagorie: "Tecnoloji", price: "1000&" },
  { productName: "Lenova V15", catagorie: "Tecnoloji", price: "1000&" },
  { productName: "Acer Asprie 5", catagorie: "Tecnoloji", price: "1000&" },
  { productName: "Macbook M1", catagorie: "Tecnoloji", price: "1000&" },
  { productName: "Acer Asprie 4", catagorie: "Tecnoloji", price: "1000&" },
  { productName: "Lenova V14", catagorie: "Tecnoloji", price: "1000&" },
  { productName: "Macbook M2", catagorie: "Tecnoloji", price: "1000&" },
  { productName: "Acer Asprie 2", catagorie: "Tecnoloji", price: "1000&" },
  { productName: "ALenova V13", catagorie: "Tecnoloji", price: "1000&" },
  { productName: "Asus Viva", catagorie: "Tecnoloji", price: "1000&" },
  {
    productName: "Microsoft Surface 4",
    catagorie: "Tecnoloji",
    price: "1000&",
  },
  {
    productName: "Microsoft Surface 2",
    catagorie: "Tecnoloji",
    price: "1000&",
  },
  {
    productName: "Microsoft Surface 7",
    catagorie: "Tecnoloji",
    price: "1000&",
  },
];

let userProductName = prompt("Bir urun ismi giriniz");
let filteredProducts = [];

function getFilteredProducts(products) {
  products.forEach((product) => {
    if (
      product.productName
        .toUpperCase()
        .includes(userProductName.toUpperCase(), 0)
    ) {
      filteredProducts.push(product);
    }
  });
}

getFilteredProducts(products);

function writeFilteredProducts(products) {
  products.forEach((product) => {
    console.log(`******************************`);
    console.log(
      `${product.productName} --- ${product.catagorie} --- ${product.price}`
    );
    console.log(`******************************`);
  });
}

writeFilteredProducts(filteredProducts);
