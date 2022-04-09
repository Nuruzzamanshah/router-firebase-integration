import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register Now</h3>
            <form>
            <input type="text" placeholder='Your Name'></input>
            <br/>
            <input type="email" placeholder='Enter your Email'/>
            <br/>
            <input type="password" placeholder='password'></input>
            <br/>
            <input type="submit" value='Register' placeholder='submit'></input>
            </form>
        </div>
    );
};

export default Register;