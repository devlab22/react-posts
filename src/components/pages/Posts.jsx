import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';

import { PostList, PostService, useFetching, Pagination, getPageCount,
  // useObserver 
  } from '../../components';

import './Pages.scss';

function Posts() {

  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10)
  const [params, setParams] = useState({ limit: 10, page: 1, observer: false })
  //const lastElement = useRef();


  const [getPosts, isLoading, error] = useFetching(async () => {
    const response = await PostService.getPosts(params.limit, params.page);
    if (params.observer) {
      setPosts(prev => [...prev, ...response.data]);
    } else {
      setPosts(response.data)
    }

    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, params.limit));
  })

  /*  useObserver(lastElement, params.page < totalPages, isLoading, () => {
     setParams({...params, page: params.page + 1})
   }) */

  useEffect(() => {
    
    if(limit !== params.limit){
      setLimit(params.limit)
      params.page = 1
    }
    getPosts();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params.page, params.limit]);

  if (error) {
    return (
      <h1>{error}</h1>
    )
  }

  return (
    <div className="page">

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
          :
          <div>
            <PostList items={posts} title="Posts" params={params} setParams={setParams} />

            {/* <div ref={lastElement} style={{ height: 20 }}></div> */}
            <Pagination totalPages={totalPages} params={params} setParams={setParams} />
          </div>
      }

    </div>
  );
}

export default Posts;

