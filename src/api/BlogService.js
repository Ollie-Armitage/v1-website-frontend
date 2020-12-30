import axios from 'axios';
import { backendURL } from '@/config'

let url  = backendURL + 'blog'

class BlogService {

    // Get Posts
    static getBlogPost(){


        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(`${url}`);
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

}

export default BlogService
