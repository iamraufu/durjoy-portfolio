import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='container'>
            <h1 className='mt-5 text-center text-danger fw-bold'>404<br />NOT FOUND</h1>
            <Link to='/'><button className='mx-auto d-block mt-5 btn btn-primary px-5 py-2'>Go Home</button></Link>
        </div>
    );
};

export default NotFound;