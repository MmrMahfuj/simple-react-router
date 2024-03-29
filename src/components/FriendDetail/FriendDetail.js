import React, { useEffect, useState } from 'react';
import { useHistory, useParams, } from 'react-router';

const FriendDetail = () => {
    let { friendId } = useParams();
    const [friend, setFriend] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url).then(res => res.json()).then(data => setFriend(data))
    }, [])

    const history = useHistory()
    const handleGoBackBtn = () => {
        history.push('/friends')
    }

    return (
        <div>
            <h3>Friend detail of: {friendId}</h3>
            <h1>{friend.name}</h1>
            <h2>{friend.phone}</h2>
            <h4>{friend.website}</h4>
            <p>Works at: {friend.company?.name}</p>
            <button onClick={handleGoBackBtn}>go back</button>
        </div>
    );
};

export default FriendDetail;