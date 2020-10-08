import axios from 'axios';

const url = 'https://ollie-website-backend.azurewebsites.net/api/submits';

class SubmitService {
    // Get Posts
    static getSubmits(){
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try{
                const res = await axios.get(url);
                const data = res.data;
                resolve(data.map(submit => ({
                    ...submit,
                    createdAt: new Date(submit.createdAt)
                })));
            }catch(err){
                reject(err);
            }
        })
    }

    // Create Posts

    static insertSubmit(ticket){
        return axios.post(url, ticket)
    }

    // Delete Posts
    static deletePost(id){
        return axios.delete(`${url}${id}`)
    }
}

export default SubmitService
