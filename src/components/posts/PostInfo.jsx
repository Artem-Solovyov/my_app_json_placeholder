import React from 'react';
import s from './styles/postinfo.module.css'
import MyButton from "../../UI/Button/MyButton";
import {useNavigate} from "react-router-dom";

const PostInfo = ({post, number, removePost}) => {
  const router = useNavigate()
  return (
      <div className={s.post_info}>
        <div className={s.info}>
          <div><b>{post.id}. {post.title}</b></div>
          {post.body}
        </div>
        <div className={s.btns}>
          <MyButton onClick={() => router(`/posts/${post.id}`)}>Open</MyButton>
          <MyButton onClick={() => removePost(post)}>Delete</MyButton>
        </div>
      </div>
  );
};

export default PostInfo;