import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://my-react-burger-24392.firebaseio.com/'
});

export default instance;