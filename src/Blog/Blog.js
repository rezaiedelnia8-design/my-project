import React, { useState, useEffect, useCallback } from 'react'
import Button from '../Button/Button'
import './Blog.css'


   const Blog = () => {
    const [posts,setPosts] = useState([])
    const [loading,setLoading] = useState(false)
    const [pageCounts,setPageCounts] = useState(0)
    const [activePageNumber ,setActivePageNumber] = useState(1)

   const loadPosts = async () => {
    setLoading(true);

    const responsePosts = await fetch(
      'https://jsonplaceholder.typicode.com/posts'
    );

    const posts = await responsePosts.json();

    setPosts(posts);
    setLoading(false);
};

   useEffect(() => {
  console.log("useEffect fired");
  loadPosts();
}, []);

    useEffect(() => {
        setPageCounts(calculatePageCounts());
    }, [ posts])


    const calculatePageCounts = () => {
        if (posts.length %3 >0) {
            return parseInt(posts.length /3 +1);
        }
        return parseInt(posts.length /3);
    }


    const handleClickOnPages = useCallback((pageNumber) => {
        console.log("Clicked Page:" , pageNumber)
        setActivePageNumber(pageNumber);
    }, []);


    return (
        <div className='Blog'>

          {loading && (
  <div className="LoadingContainer">
    <h1>Loading...</h1>
  </div>
)}
            {posts.length > 0 && (
                <>
                <p>صفحه فعلی: {activePageNumber}</p>


                <ul>
  {posts
    .slice(
      3 * (activePageNumber - 1),
      3 * activePageNumber
    )
    .map((post) => (
      <li key={post.id}
      className='blogItem'>
        <h3>{post.title}</h3>
        <p>{post.body}</p>

      </li>
    ))}



                </ul>
                </>
            )}
            <div>
        <ul className='Pagination'>
        {new Array(pageCounts).fill(0).map((item, index) => (
        <li
  key={index}
  className={activePageNumber === index + 1 ? "active" : ""}
>
  <button
    onClick={() => {
      console.log("CLICKED", index + 1);
      handleClickOnPages(index + 1);
    }}
  >
    {index + 1}
  </button>
</li>
        ))}
        </ul>
        </div>
        </div>


     );
    };







export default Blog
