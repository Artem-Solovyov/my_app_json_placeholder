import axios from "axios";

export class PostService {
  static async getAll (limit=10, page=1) {
    return await axios.get('https://jsonplaceholder.typicode.com/posts',{
      params: {
        _limit: limit,
        _page: page
      }
    })
  }
  static async getByID (id) {
    return await axios.get(`https://jsonplaceholder.typicode.com/posts/` + id)
  }
  static async getComments (id) {
    return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments` )
  }
}