import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Post from './components/CreateProduct';
import PostList from './components/ProductList';
import ThreadDetailView from './pages/ProductDetail';
import React from 'react';
// import { CartProvider } from './components/CartContext';
// import Cart from './components/CartContext';  
import { CartProvider, CartContext } from './components/CartContext';
import Cart from './components/Cart';


const App: React.FC = () => {
  return (
    <CartProvider>
    <Router>
      <Routes>
        <Route path="/post" element={<Post />} />
        <Route index element={<PostList />} />
        <Route path="/post/:id" index element={<ThreadDetailView />} />
        <Route path="/cart/" element={<Cart/>}/>
      </Routes>
    
    </Router>
    </CartProvider>
  );
};

export default App;
