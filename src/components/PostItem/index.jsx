import React from 'react';
import { MyButton } from '../../components';

import './PostItem.scss';

export default function PostItem({id, title, text, removePost}) {
    return (
        <div className="post">
            <div className="post__content">
                <strong>{`${id}. ${title}`}</strong>
                <div>{text}</div>
            </div>
            <div className="post__btn">
                <MyButton onClick={() => removePost(id)}>delete</MyButton>
            </div>
        </div>
    )
}
