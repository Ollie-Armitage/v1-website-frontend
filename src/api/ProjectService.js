import axios from 'axios';
import { backendURL } from '@/config'

let url  = backendURL + 'projects'


class ProjectService {
    // Get Posts
    static getProjects(){
        console.log("Getting Projects")
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
}

export default ProjectService
