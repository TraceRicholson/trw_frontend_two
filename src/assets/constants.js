
// Constants.js

const prod = {
  url: {
    API_URL: 'https://resfeber-studios-server.herokuapp.com/photos',
    API_URL_LIVE: 'https://resfeber-studios-server.herokuapp.com/photos/live',
    API_URL_NATURE: 'https://resfeber-studios-server.herokuapp.com/photos/nature',
    API_URL_URBAN: 'https://resfeber-studios-server.herokuapp.com/photos/urban',
  }
};

const dev = {
    url: {
    API_URL: 'http://localhost:5000/photos',
    API_URL_LIVE: 'http://localhost:5000/photos/live',
    API_URL_NATURE: 'http://localhost:5000/photos/nature',
    API_URL_URBAN: 'http://localhost:5000/photos/urban',
    }
  };

  export const config = process.env.NODE_ENV === 'development' ? dev : prod;