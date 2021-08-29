import axios from 'axios';

//Creating a custom config object for axios.
export default axios.create({
    baseURL:"https://www.googleapis.com/youtube/v3",
    params:{part:"snippet",
        maxResults:5,
        key:''
    }
});
