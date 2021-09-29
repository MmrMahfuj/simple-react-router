import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
    const { id, name, phone, website, address } = props.friend;
    const history = useHistory();

    const friendStyle = {
        border: '3px solid goldenrod',
        margin: '10px',
        padding: '10px',
        borderRadius: '10px'
    }
    const url = `/friend/${id}`;


    const handleFriendClick = () => {
        history.push(`/friend/${id}`)
    }

    return (
        <div style={friendStyle}>
            <h2>I am: {name}</h2>
            <h5>Call me: {phone}</h5>
            <p>Wisit me: {website}</p>
            <p><small>I live in: {address.city}</small></p>
            <Link to={`/friend/${id}`}>visit me</Link>
            <br />
            <Link to={url}>
                <button>Visit me</button>
            </Link>
            <br />
            <button onClick={handleFriendClick}>Visit me 2</button>
        </div>
    );
};

export default Friend;