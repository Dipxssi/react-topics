import React, { useEffect } from 'react'
/*
export function usePostTitle(){
  const [post, setPosts] = React.useState({});
  
  async function getPosts(){
       const response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
       const json = await response.json();
       setPosts(json);
    }
  
    React.useEffect(() => {
       getPosts();
    },[]);
    return post.title;
  
}*/

export function useFetch(url) {
  const [finalData, setFinalData] = React.useState({});
  const [loading, setLoading] = React.useState(true);

  async function getDetails() {
    setLoading(true);
    const response = await fetch(url);
    const json = await response.json();
    setFinalData(json);
    setLoading(false);
  }

  useEffect(() => {
    getDetails();
  }, [url])

  useEffect(() => {
    const intervalId = setInterval(getDetails, 10 * 1000)

    return () => {
      clearInterval(intervalId);
    }
  }
    , [])

  return {
    finalData,
    loading
  }
}