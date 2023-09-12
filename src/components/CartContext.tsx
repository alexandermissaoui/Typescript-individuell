import React, { createContext, useReducer, Dispatch, ReactNode, useContext, useEffect, useRef } from 'react';


const initialState: CartState = {
  cartItems: [],
};

const cartReducer = (state: CartState, action: Action): CartState => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      const newProduct = action.payload;
      const existingItem = state.cartItems.find(item => item.product.id === newProduct.id);

      if (existingItem) {
        return {
          ...state,
          cartItems: state.cartItems.map(item =>
            item.product.id === existingItem.product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, { product: newProduct, quantity: 1 }],
        };
      }

    case 'REMOVE_PRODUCT':
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.product.id !== action.payload),
      };

    case 'SET_CART':
      return{
        ...state,
        cartItems: [...action.payload]
      }

    case 'INCREMENT_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.product.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };

    case 'DECREMENT_QUANTITY':
      return {
        ...state,
        cartItems: state.cartItems.map(item =>
          item.product.id === action.payload ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const CartContext = createContext<{ state: CartState; dispatch: Dispatch<Action> }>({
  state: initialState,
  dispatch: () => null,
});

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  console.log("CART STATE", state)
  const hasFetched = useRef(false)
  useEffect(()=>{
    if(hasFetched.current){
      localStorage.setItem('cart', JSON.stringify(state.cartItems));
    }

  },[
    state.cartItems
  ]
  )
  useEffect(() => {
    dispatch({
        type: "SET_CART",
        payload: getCartFromLocalStorage()
    })
    setTimeout(( )=> {
      hasFetched.current = true
    }, 3000)
},[])

const getCartFromLocalStorage = () => {
  const storeData = localStorage.getItem(`cart`);
  if (!!storeData){
    console.log("Store data", storeData)
    const dataArray: PostData []  = JSON.parse(storeData) || []
    return dataArray
}
return []
}


  return <CartContext.Provider value={{ state, dispatch }}>{children}</CartContext.Provider>;
};

const useCart =()=>{
  const cart = useContext(CartContext)
  return cart
}

export { CartContext, CartProvider, useCart};
