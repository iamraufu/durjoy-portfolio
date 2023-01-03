import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Contact = () => {
    return (
        <div>
            <Navbar />
            <div className="container mt-5">
                <p>Phone Number: <b>01710974773</b></p>
                <p>Email: <b>shafayet.muttaky.msj@ulab.edu.bd</b></p>
            </div>
            <div className="fixed-bottom"><Footer /></div>
        </div>
    );
};

export default Contact;