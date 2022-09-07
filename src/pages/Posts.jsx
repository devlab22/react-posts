import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';

import { PostList, PostService, useFetching, Pagination, getPageCount } from '../components';

import '../App.scss';

function Posts() {

  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [params, setParams] = useState({ limit: 10, page: 1 })
  const [getPosts, isLoading, error] = useFetching(async () => {
    const response = await PostService.getPosts(params.limit, params.page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, params.limit));
  })

  useEffect(() => {
    getPosts();

  }, [params.page]);

  if (error) {
    return (
      <h1>{error}</h1>
    )
  }

  return (
    <div className="Posts">

      {
        isLoading
          ? <div className='loader'>
            <Circles
              height="100"
              width="100"
              color="#008080"
              ariaLabel="circles-loading"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
            />
          </div>
          : <PostList items={posts} title="Posts" />
      }

      <Pagination totalPages={totalPages} params={params} setParams={setParams}/>

    </div>
  );
}

export default Posts;

