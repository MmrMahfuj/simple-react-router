import React from 'react';
import { Link } from 'react-router-dom';

const Post = (props) => {
    const { title, id } = props.post
    return (
        <div>
            <h2>{title}</h2>
            <Link to={`/post/${id}`}>Post Detail</Link>
        </div>
    );
};

export default Post;