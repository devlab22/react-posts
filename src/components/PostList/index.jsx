import React from 'react';
import { PostItem, PostForm, MySelect } from '../../components';

import './PostList.scss';

export default function PostList({ items, title, AddNewPost, removePost, defaultPost='posts not found' }) {

  const handleOnAddNewPost = (post) => {
    
    AddNewPost(
      {
        'id': Math.max(...items.map(o => o.id)) + 1,
        'title': post.title,
        'text': post.text
      }
    );
    
  }

  return (
    <div className='postList'>

      <PostForm title={`add new post for ${title}`} onAddNewPost={handleOnAddNewPost}/>
      <hr/>
      
      <MySelect 
          options={[
        {'key': 'id', 'value': 'id'},
        {'key': 'title', 'value': 'Title'},
        {'key': 'descr', 'value': 'Description'}
          ]}
        defaultValue='Sorting by'  
          />

      <hr/>
      <h1>{title}</h1>

      {
        items.length > 0 
         ? (items.map(item =>
          <PostItem key={item.id} {...item} removePost={removePost}/>
        ))
        : <h2>{defaultPost}</h2>
      }
    </div>
  )
}
