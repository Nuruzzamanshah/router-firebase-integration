import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Home = () => {
    const {user} = useFirebase();
    return (
        <div>
            <h2>This is home page</h2>
            <p>current user is : {user? user.displayName : 'no body'}</p>
        </div>
    );
};

export default Home;