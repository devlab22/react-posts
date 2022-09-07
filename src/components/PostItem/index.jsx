import React from 'react';
import { MyButton } from '../../components';
import { useNavigate } from 'react-router-dom';

import './PostItem.scss';

export default function PostItem({id, title, body, removePost}) {
    
    const navigate = useNavigate();
    
    return (
        <div className="post">
            <div className="post__content">
                <strong>{`${id}. ${title}`}</strong>
                <div>{body}</div>
            </div>
            <div className="post__btn">
                <MyButton onClick={() => navigate(`/posts/${id}`)}>open</MyButton>
                <MyButton onClick={() => removePost(id)}>remove</MyButton>
            </div>
        </div>
    )
}
