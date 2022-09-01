import React, {useState} from 'react';
import { MyButton, MyInput } from '../../components';

import styles from './PostForm.module.scss';

export default function PostForm({onAddNewPost, title}) {

    const [post, setPost] = useState({'title': '', 'text': ''})

    const handleOnAddNewPost = (e) => {
        e.preventDefault();
        onAddNewPost({
            'title': post.title,
            'text': post.text
        })

        setPost({'title': '', 'text': ''});
    }

  return (
    <div className={styles.postForm}>
        <h1 className={styles.h1}>{title}</h1>
      <form>
        <MyInput
          type="text"
          placeholder="title"
          value={post.title}
          onChange={event => setPost({...post, title: event.target.value} )}
        />
        <MyInput
          type="text"
          placeholder="description"
          value={post.text}
          onChange={event => setPost({...post, text: event.target.value} )}
        />
        <MyButton onClick={handleOnAddNewPost} >add post</MyButton>
      </form>
    </div>
  )
}
