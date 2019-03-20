//webcomponet
class BlogPost extends HTMLElement{
    set post(post){
        this.innerHTML = `
            <div> 
                <div> Post Id : ${post.id}</div>
                <div> Title : ${post.title}</div>
                <div> Body : ${post.body}</div>
                <br />
            </div>
        `
    }
}

customElements.define('blog-post', BlogPost);