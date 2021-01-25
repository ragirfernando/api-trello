import axios from 'axios';

const token = '667baecaaaa46317d13615da8eee8681cc8439bfd8bf660fe6f6dbbe17c1d3a2';
const key = '8ee20b698c72895308e26039858f8007';

const api = axios.create({
 baseURL: 'https://api.trello.com/' 
});


export default api;