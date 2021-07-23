
// Constants.js

const prod = {
  url: {
    API_URL: 'https://hey-best-friend-bend.herokuapp.com',
    API_URL_MESSAGES: ''}
  };

  const dev = {
    url: {
    API_URL: 'http://localhost:5000/photos',
    API_URL_LIVE: 'http://localhost:5000/photos/live',
    API_URL_NATURE: 'http://localhost:5000/photos/nature' 
    }
  };

  export const config = process.env.NODE_ENV === 'development' ? dev : prod;