import { useNavigate } from 'react-router-dom';


const PostList = () => {
    const navigate = useNavigate()
    const savedPosts: PostData[] = JSON.parse(localStorage.getItem('posts') || '[]');
    console.log(savedPosts);
    {}
    return (
      <div>
        <div>
          {savedPosts.map(function(post){
            console.log("POSTS", post.creator)
            return(
              <div key={post.id} className="post" id="post" onClick={() =>{
                navigate(`/post/${post.id}`)
                }}>
                <p>Product Name: {post.title}</p>
                {/* <p>Description: {post.description}</p> */}
                {/* <p>Product Image: {post.image}</p> */}
                {/* <p>Creation Date: {post.creationDate}</p> */}
                {/* <p>Creator name: {post.creator.name}</p> */}
                {/* <p>Username: {post.creator.userName}</p> */}
              </div>
            )
          })}
      </div>
    </div>
  );
};

export default PostList;