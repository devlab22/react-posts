import React, { useState } from 'react';
import { PostItem, MyButton, MyInput } from '../../components';

import './PostList.scss';

export default function PostList({ items, title, AddNewPost, removePost }) {

  const [newTitle, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleOnAddNewPost = (e) => {
    e.preventDefault();
    AddNewPost(
      {
        'id': Math.max(...items.map(o => o.id)) + 1,
        'title': newTitle,
        'text': description
      }
    );
    setTitle('');
    setDescription('');
  }

  return (
    <div className='postList'>

      <h1>add new post for {title}</h1>
      <form>
        <MyInput
          type="text"
          placeholder="title"
          value={newTitle}
          onChange={event => setTitle(event.target.value)}
        />
        <MyInput
          type="text"
          placeholder="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
        <MyButton onClick={handleOnAddNewPost} >add post</MyButton>
      </form>

      <h1>{title}</h1>

      {
        items.map(item =>
          <PostItem key={item.id} {...item} removePost={removePost}/>
        )
      }
    </div>
  )
}
