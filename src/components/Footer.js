import React from 'react';

const Footer = () => {
    return (
        <footer style={{backgroundColor:'#e4e4dc'}} className='py-3'>
            <p className='text-center mt-3'>&copy; {new Date().getFullYear()} | Shafayet Muttaky Durjoy</p>
        </footer>
    );
};

export default Footer;