import axios from 'axios';



//My Credentials from YouTube to access the API
//It cannot be used on anywhere except for  localhost: 3000

const _KEY = 'AIzaSyCNa5CuqJ4yhfv5NCx5ZMi1-0Uyv2qj2-Y';
//https://www.googleapis.com/youtube/v3/search

export default axios.create({
    baseURL : 'https://www.googleapis.com/youtube/v3',
    params: {
        part:'snippet',
        maxResults: 10,
        key: _KEY,
      
    }

})