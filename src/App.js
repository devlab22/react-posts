import React, {useState} from 'react';
import { PostList } from './components';
import './App.css'

function App() {

  const [posts, setPosts] = useState([
    {"id": 1, 'title': 'JavaScript', 'text': 'Programmiersprache'},
    {"id": 2, 'title': 'Python', 'text': 'Scriptsprache'},
    {"id": 3, 'title': 'React', 'text': 'Bibliothek'}
  ])

  const [posts2, setPosts2] = useState([
    {"id": 1, 'title': 'Backend', 'text': 'Backend in Python'},
    {"id": 2, 'title': 'Server for Backend', 'text': 'Server Python (Flask)'},
    {"id": 3, 'title': 'Frontend', 'text': 'React'}
  ])

const handleOnAddPost = (post) => {
  setPosts(prev => [...prev, post]);
}

const handleOnRemovePost = (id) => {
  setPosts(prev => prev.filter(post => post.id !== id))
}

const handleOnAddPost2 = (post) => {
  setPosts2(prev => [...prev, post]);
}

const handleOnRemovePost2 = (id) => {
  setPosts2(prev => prev.filter(post => post.id !== id))
}
 
  return (
    <div className="App">
     
      <PostList items={posts} title="Programmieren" AddNewPost={handleOnAddPost} removePost={handleOnRemovePost}/>

      {/* <PostList items={posts2} title="App development" AddNewPost={handleOnAddPost2} removePost={handleOnRemovePost2}/> */}
    </div>
  );
}

export default App;
