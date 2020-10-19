import axios from 'axios';

const url = 'https://ollie-website-backend.azurewebsites.net/blog/';

class BlogService {

    // Get Posts
    static getBlogPost(previousEntry){


        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(`${url}${previousEntry}`);
                const data = res.data;
                resolve(data.map(blog => ({
                    ...blog,
                    createdAt: new Date(blog.createdAt).toLocaleDateString('en-GB')
                })));
            }catch(err){
                reject(err);
            }
        })
    }

    // Create Posts
    static insertBlogPost(ticket){
        return axios.post(url, ticket)
    }

    // Delete Posts
    static deleteBlogPost(id){
        return axios.delete(`${url}${id}`)
    }
}

export default BlogService
