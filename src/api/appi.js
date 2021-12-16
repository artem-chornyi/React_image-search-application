const API = 'https://api.unsplash.com/search/photos?client_id=' + process.env.REACT_APP_KEY

export function getImageSearch(url) {
    return fetch(API + `&query=${url}&per_page=50`)
    .then(response => response.json());
}

export function getAddImage(url, page) {
    return fetch(API + `&query=${url}&page=${page}&per_page=50` )
    .then(response => response.json());
}

export function getUserCollections(url) {
    return fetch( `https://api.unsplash.com/users/${url}/photos?per_page=50&orientation=portrait&client_id=` + process.env.REACT_APP_KEY )
    .then(response => response.json());
}