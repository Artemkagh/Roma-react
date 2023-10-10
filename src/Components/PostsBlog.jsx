import React from 'react';
import '../index.css';

function PostsBlog({items}){
    return(
        <div className='postscontainer'>
            <ul>
                {items && items.map((obj) =>(
                    <li key={obj.id}>
                        <h1>{obj.theme}</h1>
                        <p>{obj.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default PostsBlog;