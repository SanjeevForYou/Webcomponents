import { postsApiUrl } from './postsApi';
import './blog-post';

window.addEventListener('load', () => {
    fetchPosts();
});

async function fetchPosts(){
    const res = await fetch(postsApiUrl);
    const json = await res.json();

    const main = document.querySelector('main');
    for(let post of json){
        const el = document.createElement('blog-post');
        el.post = post;
        main.appendChild(el);
    }
}