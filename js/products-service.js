export class ProductsService {
    // патерн, який робить список продуктів  один на весь сайт.
    constructor() {
        if (!ProductsService._instance) ProductsService._instance = this;
        return ProductsService._instance;
    }
  // кешування продуктів, якщо вони ще не були завантажені.
  async getProducts() {
    if (!this.getProducts) {
      this.products = await (await fetch("api/products.json")).json();
      return this.products;
    }
  }

  // бере продукти і шукає конкретний продукт.
  async getProductById(id) {
    const products = await this.getProducts();
    return products.find((product) => product.id === id);
  }
}
