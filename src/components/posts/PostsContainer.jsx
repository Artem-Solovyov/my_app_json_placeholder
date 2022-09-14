import React, {useEffect, useState} from 'react';
import PostInfo from "./PostInfo";
import PostForm from "./PostForm";
import PostFilter from "./PostFilter";
import ModalWindow from "../../UI/ModalWindow/ModalWindow";
import MyButton from "../../UI/Button/MyButton";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {usePosts} from "../../hooks/usePosts";
import {PostService} from "../../API/PostService";
import Loader from "../../UI/Loader/Loader";
import {useFetching} from "../../hooks/useFetching";
import {getPageCount, getPagesArray} from "../../utils/pages";
import Pagination from "../../UI/Pagination/Pagination";

const PostsContainer = () => {

  const [posts, setPosts] = useState([])
  const [filter, setFilter] = useState({sort: '', query: ''})
  const [modal, setModal] = useState(false)
  const [totalPages, setTotalPages] = useState(0)
  const [limit, setLimit] = useState(10)
  const [page, setPage] = useState(1)
  const [fetchPost, isPostsLoading, postError] = useFetching(async () => {
    const response = await PostService.getAll(limit, page)
    setPosts(response.data)
    const totalCount = response.headers['x-total-count']
    setTotalPages(getPageCount(totalCount, limit))
  })
  let pagesArray = getPagesArray(totalPages)

  useEffect(() => {
    fetchPost()
  }, [page, limit])

  const addNewPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts([...posts.filter(p => p.id !== post.id)])
  }
  const sortedAndQueryPost = usePosts(filter, posts)

  return (
      <div>
        <ModalWindow modal={modal} setModal={setModal}>
          <PostForm addNewPost={addNewPost} setModal={setModal}/>
        </ModalWindow>
        <div><h2 style={{color: 'teal'}}>Users posts</h2></div>
        <PostFilter filter={filter} setFilter={setFilter} limit={limit} setLimit={setLimit}/>
        <MyButton  style={{marginTop:'15px'}} onClick={() => setModal(true)}>New post</MyButton>
        {postError && <div style={{color: "red", marginTop: '30px'}}>Error: {postError}</div>}
        {isPostsLoading
            ? <Loader/>
            : sortedAndQueryPost.length
                ?
                <TransitionGroup>
                  {sortedAndQueryPost.map((post, index) =>
                      <CSSTransition key={post.id} timeout={500} classNames="post">
                        <PostInfo removePost={removePost} post={post} number={index + 1}/>
                      </CSSTransition>)}
                </TransitionGroup>
                : <div><h3 style={{color: 'teal'}}>Post not founded</h3></div>
        }
        <Pagination setPage={setPage} page={page} pagesArray={pagesArray}/>
      </div>
  );
};
export default PostsContainer;