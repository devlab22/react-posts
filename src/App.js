import React, {useState} from 'react';
import { PostList } from './components';
import './App.css'

function App() {

  const [posts, setPosts] = useState([
    {"id": 1, 'title': 'JavaScript', 'text': 'Programmiersprache'},
    {"id": 2, 'title': 'Python', 'text': 'Scriptsprache'},
    {"id": 3, 'title': 'React', 'text': 'Bibliothek'}
  ])

 /*  const [posts2, setPosts2] = useState([
    {"id": 1, 'title': 'Backend', 'text': 'Backend in Python'},
    {"id": 2, 'title': 'Server for Backend', 'text': 'Server Python (Flask)'},
    {"id": 3, 'title': 'Frontend', 'text': 'React'}
  ]) */

const handleOnAddPost = (post) => {
  console.log(post)
  setPosts(prev => [...prev, post]);
}

const handleOnRemovePost = (id) => {
  console.log(`remove post id: ${id}`)
  setPosts(prev => prev.filter(post => post.id !== id))
}
 
  return (
    <div className="App">
     
      <PostList items={posts} title="Programmieren" AddNewPost={handleOnAddPost} removePost={handleOnRemovePost}/>

      {/* <PostList items={posts2} title="App development"/> */}
    </div>
  );
}

export default App;
