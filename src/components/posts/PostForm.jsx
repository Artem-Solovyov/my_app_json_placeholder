import React, {useState} from 'react';
import MyInput from "../../UI/Input/MyInput";
import MyButton from "../../UI/Button/MyButton";

const PostForm = ({addNewPost, setModal}) => {

  const [post, setPost] = useState({title: '', body: ''})

  const addPost = () => {
    const newPost = {
      id: Date.now(),
      title: post.title,
      body: post.body
    }
    addNewPost(newPost)
    setPost({title: '', body: ''})
    setModal(false)
  }
  return (
      <div>
        <div><h3 style={{color: 'teal'}}>Create new post</h3></div>
        <div>
          <MyInput placeholder={'Enter title...'} value={post.title}
                   onChange={(e) => setPost({...post, title: e.target.value})}/>
          <MyInput placeholder={'Enter body...'} value={post.body}
                   onChange={(e) => setPost({...post, body: e.target.value})}/>
        </div>
        <div><MyButton onClick={addPost}>Add post</MyButton></div>
      </div>
  );
};

export default PostForm;