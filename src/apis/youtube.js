import axios from 'axios';

const KEY = 'AIzaSyALqy6meaV77CSau4u8mB3cOD0AEYXARu8';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY,
    }
});