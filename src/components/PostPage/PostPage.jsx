import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../../hooks/useFetching";
import {PostService} from "../../API/PostService";
import Loader from "../../UI/Loader/Loader";
import s from './postPage.module.css'

const PostPage = () => {
  const params = useParams()
  console.log(params.id)
  const [post, setPost] = useState({})
  const [comments, setComments] = useState([])
  const [fetchByID, isLoading, error] = useFetching(async () => {
    const response = await PostService.getByID(params.id)
    setPost(response.data)
  })
  const [fetchComments, isLoadingComments, errorComments] = useFetching(async () => {
    const response = await PostService.getComments(params.id)
    setComments(response.data)
  })
  useEffect(() => {
    fetchByID()
    fetchComments()
  }, [])
  return (
      <div>
        <h3 style={{color: 'teal'}}>You opened the post of user id:{params.id}</h3>
        {isLoading
            ? <Loader/>
            : <div className={s.post}>
              <div><h4>{post.title}</h4></div>
              <div>{post.body}</div>
            </div>
        }
        <h4 style={{color: 'teal', textAlign: 'left'}}>Comments:</h4>
        {isLoadingComments
            ? <Loader/>
            : <div>
              {comments.map(comm =>
                  <div className={s.comments}>
                    <b>{comm.email}</b>
                    <br/>
                    {comm.body}
                  </div>
              )}
            </div>
        }
      </div>
  );
};

export default PostPage;