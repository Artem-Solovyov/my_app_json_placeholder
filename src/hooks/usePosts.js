import {useMemo} from "react";


export const usePosts = (filter, posts) => {
  return useMemo(() => {
    if (filter.sort) {
      const sortedPosts = [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
      return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
    }
    return posts.filter(post => post.title.toLowerCase().includes(filter.query))
  }, [filter, posts])
}