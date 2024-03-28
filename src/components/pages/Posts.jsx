import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import {Stack} from '@mui/material'
import { PostList, PostService, useFetching, Pagination, getPageCount, PagePagination } from '../../components';

import './Pages.scss';

function Posts() {

  const [posts, setPosts] = useState([]);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10)
  const [params, setParams] = useState({ limit: 10, page: 1, observer: false })


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

  const handleOnChangePage = (page) => {
    setParams(prev => ({...prev, page: page}))
  }
  const handleOnChangeItemsPerPage = (limit) => {
    setParams(prev => ({...prev, limit: limit}))
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

            <Stack
              gap={2}
            >
            <PostList 
              items={posts} 
              title="Posts" 
               />

            {/* <Pagination totalPages={totalPages} params={params} setParams={setParams} /> */}
            <PagePagination 
              totalPages={totalPages} 
              onChangePage={handleOnChangePage} 
              onChangeItemsPerPage={handleOnChangeItemsPerPage}
              page={params.page} 
              limit={params.limit} 
              label='Posts per Page'
              itemsPerPage={[5, 10, 25, 50]}
              />
              </Stack>
          </div>
          
      }

    </div>
  );
}

export default Posts;

