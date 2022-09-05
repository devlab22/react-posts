import React, { useEffect, useState, useMemo } from 'react';
import { PostItem, PostForm, PostFilter } from '../../components';

import './PostList.scss';

export default function PostList({ items, title, defaultPost = 'posts not found' }) {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', search: '' })

  useEffect(() => {
    setPosts(items);
  }, [items])

  const sortedItems = useMemo(() => {
    
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].toString().localeCompare(b[filter.sort].toString()));
    }
    else {
      return posts;
    }

  }, [filter.sort, posts])

  const sortedAndSearchItems = useMemo(() => {
    return sortedItems.filter(item => item.title.toLowerCase().includes(filter.search.toLowerCase()))
  }, [filter.search, sortedItems])

  const handleOnRemovePost = (id) => {
    setPosts(prev => prev.filter(post => post.id !== id))
  }

  const handleOnAddNewPost = (post) => {

    post.id = Math.max(...posts.map(o => o.id)) + 1;
    setPosts(prev => [...prev, post]);

  }

  return (
    <div className='postList'>

      <PostForm title={`add new item for ${title}`} onAddNewPost={handleOnAddNewPost} />
      
      <PostFilter
        filter={filter}
        setFilter={setFilter}
        options={[
          { 'key': 'id', 'value': 'id' },
          { 'key': 'title', 'value': 'Title' },
          { 'key': 'text', 'value': 'Description' }
        ]}
      />
      
      <h1>{title}</h1>

      {
        sortedAndSearchItems.length > 0
          ? (
            sortedAndSearchItems
              .map(item =>
                <PostItem key={item.id} {...item} removePost={handleOnRemovePost} />
              ))
          : <h2>{defaultPost}</h2>
      }
    </div>
  )
}
