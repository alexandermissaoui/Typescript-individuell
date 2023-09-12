type PostCategory = "THREAD" | "QNA";

interface PostData {
  id: number;
  title: string;
  price: string;
  category: PostCategory;
  creationDate: string;
  description: string;
  creator: User;
}

interface Product {
  id: number;
  name: string;
  price: number;
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
