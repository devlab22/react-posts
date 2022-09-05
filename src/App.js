import React from 'react';
import { PostList } from './components';
import './App.css'

function App() {

  const posts = [
    {"id": 1, 'title': 'JavaScript', 'text': 'Programmiersprache'},
    {"id": 2, 'title': 'Python', 'text': 'Scriptsprache'},
    {"id": 3, 'title': 'React', 'text': 'Bibliothek'},
    {"id": 4, 'title': 'ABAP', 'text': 'SAP'},
  ]
 
  return (
    <div className="App">
     
      <PostList items={posts} title="Programmieren" />

      {/* <PostList items={posts2} title="App development"/> */}
    </div>
  );
}

export default App;
