import React from 'react';

import './PostItem.scss';

export default function PostItem({id, title, text, removePost}) {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{`${id}. ${title}`}</strong>
                <div>{text}</div>
            </div>
            <div className="post__btn">
                <button onClick={() => removePost(id)}>delete</button>
            </div>
        </div>
    )
}
