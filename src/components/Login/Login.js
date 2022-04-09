import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase();
    return (
        <div>
            <h2>Plase login in mama</h2>
            <div style={{margin: '20px'}}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
            </div>
            <form>
            <input type="email" placeholder='Enter your Email'/>
            <br/>
            <input type="password" placeholder='password'></input>
            <br/>
            <input type="submit" value='Login' placeholder='submit'></input>
            </form>
        </div>
    );
};

export default Login;