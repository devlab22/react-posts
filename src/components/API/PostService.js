import axios from 'axios';

export default class PostService{
    static async getPosts(limit=10, page=1){

        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
            params: {
                _limit: limit,
                _page: page
            }
        });
        return response;

    }

    static async getPostById(id){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return response;
    }

    static async getCommentsByPostId(id){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
        return response;
    }

    static async login(params){
        const response = await axios.post('http://localhost:8080/api/login', {
            params: params
        })
        return response;
    }

    static async logout(token){
        const response = await axios.get(`http://localhost:8080/api/logout/?token=${token}`);
        return response;
    }
}