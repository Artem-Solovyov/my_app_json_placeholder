import About from "../components/about/About";
import PostsContainer from "../components/posts/PostsContainer";
import PostPage from "../components/PostPage/PostPage";
import Login from "../components/Login/Login";

export const publicRouter = [
  {path:'/login', element:Login},
]
export const privateRouter = [
  {path:'/about', element:About},
  {path:'/posts', element:PostsContainer},
  {path:'/posts/:id', element:PostPage},
]

