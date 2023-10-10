import React from 'react';
import '../index.css';
import PostsBlog from '../Components/PostsBlog';

function Blog(){

    const [posts, setPosts] = React.useState([]);
    const [postTheme, setPostTheme] = React.useState('');
    const [postText, setPostText] = React.useState('');

    React.useEffect(() =>{
        fetch('http://localhost:3000/Posts.json')
        .then((resp) => resp.json())
        .then( (json) => {
            setPosts(json.posts);
        })
    }, []);

    const acceptText = () => {
        const newpost = {
            "id": posts.length,
            "theme" : postTheme,
            "title" : postText,
            "category": 0
        }
        setPosts([...posts, newpost]);
    }

    const onChangeTheme = (event) => {
        setPostTheme(event.target.value);
    }

    const onChangeText = (event) => {
        setPostText(event.target.value);
    }

    return(
        <div>
            <PostsBlog items = {posts}/>
            <div className='newpostform'>
                <input value={postTheme} onChange = {onChangeTheme} type="text" placeholder='Заголовок' className='newposttheme'/>
                <textarea value={postText} onChange = {onChangeText} type="text" placeholder='Текст' className='newposttext'/>
                <div onClick = {() =>acceptText()} className='newpostbutton'>Опубликовать</div>
            </div>
        </div>
    );
}


export default Blog;