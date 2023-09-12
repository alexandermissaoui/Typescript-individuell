import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Post: React.FC = () => {
  const navigate = useNavigate()
  const [posts, setPosts] = useState<PostData[]>([]);
  const [newPost, setNewPost] = useState<PostData>({
    id: 0,
    title: '',
    price:'',
    category: 'THREAD',
    creationDate: '',
    description: '',
    creator: {
      id: 0,
      name: '',
      userName: '',
    },
  });

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts') || '[]');
    setPosts(savedPosts);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  };


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    if (newPost.title && newPost.description && newPost.category) {
      const newPostData: PostData = { ...newPost, id: Date.now() };
      const updatedPosts = [...posts, newPostData];
  
      // Save the updated posts to localStorage
      localStorage.setItem('posts', JSON.stringify(updatedPosts));
      
      setPosts(updatedPosts);
      
      navigate(`/post/${newPostData.id}`)
      // Clear the input fields by resetting newPost
      setNewPost({
        id: 0,
        title: '',
        price: '',
        description: '',
        category: 'THREAD', // Set a default category if needed
        creationDate: '',
        creator: {
          id: 0,
          name: '',
          userName: '',
        },
      });
    }
  };
  
  

  return (
    <div>
    <div className='create-product'>
        <h1>Create Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="product-name">Title:</label>
          <input
            id="title"
            name="title"
            value={newPost.title}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="price">Price:</label>
          <input
            id="price"
            name="price"
            value={newPost.price}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            name="description"
            value={newPost.description}
            onChange={handleInputChange}
          />
        </div>
        <button id='cr8btn' type="submit">Create Product</button>
      </form>
      
    </div>
      
    </div>
  );
};

export default Post;