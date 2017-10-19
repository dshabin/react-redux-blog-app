import axios from 'axios'


export const FETCH_POSTS = 'fetch_posts'

const API_KEY = "3811404c-4fff-44c6-b717-46c36d3e15ca"
const ROOT_URL = `https://content.guardianapis.com/search?api-key=${API_KEY}`

export function fetchPosts(){
  const request = axios.get(`${ROOT_URL}`);

  return {
    type : FETCH_POSTS,
    payload : request
  }
}
