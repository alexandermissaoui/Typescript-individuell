
interface PostData {
  id: number;
  title: string;
  price: string;
  description: string;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
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
