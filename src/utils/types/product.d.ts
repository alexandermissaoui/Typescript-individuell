
interface PostData {
  id: number;
  title: string;
  price: string;
  description: string;
  imageUrl: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  imageUrl: string;

}

interface CartItem {
  product: Product;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
}

interface Action {
  type: string;
  payload?: any;
}
