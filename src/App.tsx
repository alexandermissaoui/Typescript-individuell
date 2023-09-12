// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Post from './components/Post';
// import PostList from './components/PostList';
// import ThreadDetailView from './pages/ThreadDetailView';
// import React from 'react';
// import { CartProvider } from './components/CartContext';
// import Cart from './components/CartContext';

// const App = () => {
//  return(
//     <Router>
//         <Routes>
//           <Route path="/post" element={<Post />} />
//           <Route index element={<PostList />} />
//           <Route path="/post/:id" index element={<ThreadDetailView/>} />

//         </Routes>
//       </Router>
//  );   
// };

// export default App;


// const App: React.FC = () => {
//   return (
//     <CartProvider>
//       <div className="App">
//         <h1>Min Shopping App</h1>
//         <Cart />
//       </div>
//     </CartProvider>
//   );
// };

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Post from './components/Post';
import PostList from './components/PostList';
import ThreadDetailView from './pages/ThreadDetailView';
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
