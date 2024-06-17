import axios from 'axios';

const vimeoAccessToken = 'f5db6449834da737e0d122c4e7baa483'; // Replace with your access token

const api = axios.create({
    baseURL: 'https://api.vimeo.com',
    headers: {
        'Authorization': `bearer ${vimeoAccessToken}`,
        'Content-Type': 'application/json',
    },
});

export const fetchVideos = (tag) => {
    let queryParams = {
        sort: 'date',
        direction: 'desc',
        query: tag,
        query_fields: 'tags'
    };

    return api.get('/me/videos', { params: queryParams })
        .then(response => {
            console.log('Response body:', response.data.data); // Log the response body
            return response.data.data;
        }); // Extract the videos array
};

// src/api/server.js
export const fetchVideoById = (videoId) => {
    console.log(`Request URL: https://api.vimeo.com/videos/${videoId}`); // This should show the correct URL
    return api.get(`/videos/${videoId}`)
      .then(response => response.data);
};


export default api;
