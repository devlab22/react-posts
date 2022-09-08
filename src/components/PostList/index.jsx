import React, { useEffect, useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
//import { v4 as uuidv4 } from 'uuid';
import { PostItem, PostForm, PostFilter, PostFormModal, MyButton, usePosts } from '../../components';

import './PostList.scss';

export default function PostList({ items, title, defaultPost = 'items not found', params, setParams }) {

  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: '', search: '' });
  const [visible, setVisible] = useState(false);
  const sortedAndSearchItems = usePosts(posts, filter.sort, filter.search);

  useEffect(() => {
    setPosts(items);
  }, [items])

  const handleOnRemovePost = (id) => {
    setPosts(prev => prev.filter(post => post.id !== id))
  }

  const handleOnAddNewPost = (post) => {

    //post.id = uuidv4();
    post.id = Math.max(...posts.map(o => o.id)) + 1;
    setPosts(prev => [...prev, post]);
    setVisible(false);
  }

  return (
    <div className='postList'>
      <MyButton style={{ marginTop: 20 }} onClick={() => setVisible(true)}>add post</MyButton>
      <PostFormModal visible={visible} setVisible={setVisible}>
        <PostForm title={`add new item for ${title}`} onAddNewPost={handleOnAddNewPost} />
      </PostFormModal>

      <PostFilter
        filter={filter}
        setFilter={setFilter}
        params={params}
        setParams={setParams}
        options={[
          { 'key': 'id', 'value': 'ID' },
          { 'key': 'title', 'value': 'Title' },
          { 'key': 'body', 'value': 'Description' }
        ]}
      />

      <h1>{title}</h1>

      {sortedAndSearchItems.length > 0
        ? <TransitionGroup>
          {
            sortedAndSearchItems
              .map(item => (

                <CSSTransition
                  key={item.id}
                  timeout={500}
                  classNames="post"
                >
                  <PostItem  {...item} removePost={handleOnRemovePost} />
                </CSSTransition>
              ))
            
          }

        </TransitionGroup>

        : <h2>{defaultPost}</h2>
      }

    </div>
  )
}
