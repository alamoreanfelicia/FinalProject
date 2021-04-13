import { http } from './http.js';
import { ui } from './ui.js';

const id = window.location.search.split('=')[1];
window.onload = () => {
    if(window.location.search !== ''){
        console.log(id);
        http
        .get('http://localhost:3000/products/' + id)
        .then((data) => ui.showDetails(data));
    }
};

