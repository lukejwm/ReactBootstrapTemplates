import Category from "./catgory.ts";

interface Product {
  name: string;
  description: string;
  isPerishable: boolean;
  expiryDate: Date;
  category: Category;
  price: number;
  onSpecial: boolean;
}

export default Product;
