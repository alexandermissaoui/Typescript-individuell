import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useCart } from '../components/CartContext';


const ThreadDetailView = () => {
  const {id}=useParams()
  const navigate = useNavigate()
  const cart = useCart()
  const [post, setPost] = useState <PostData> () 
  useEffect (()=>{

  const storeData = localStorage.getItem(`posts`);
  if (!!storeData){
    const dataArray: PostData []  = JSON.parse(storeData) || []
    const _post = dataArray.find (post=> post.id === Number(id))
    setPost(_post)
    
  }
  
},[id]) 

  const addToCart = () => {
    cart.dispatch(
      {
        type:"ADD_PRODUCT",
        payload: post
      }
    )
    navigate("/cart")

  }
  

  if (!post) return <div>Posten hittades inte</div>;

  return (
    <div>
      
    <div className='post' id='post' key={post.id}>  
                <h3>{post.title}</h3>
                <p>Price: {post.price}</p>
                <p>Description: {post.description}</p>
                <button onClick={addToCart}>Add to cart</button>
    </div>

    </div>
 
  );
};

export default ThreadDetailView;
 