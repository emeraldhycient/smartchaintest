import API_URL from "@/helper/apiUrl"
import axios from "axios"

//TODO: switch to use a single request interceptor

class Post {
    async getPosts() {
        const response = await axios.get(API_URL)
        return response
    }
    async getPostById(id: string) {
        const response = await axios.get(`${API_URL}/${id}`)
        return response
    }
}

const post = new Post()
export default post