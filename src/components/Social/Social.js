import React from 'react';
import { FaLinkedinIn, FaGithub, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Social = () => {
    return (
        <div className='flex justify-center gap-5'>
            <a href="https://www.linkedin.com/in/mahfuz-moyeen/" target='blank'>
                <FaLinkedinIn className='w-8 h-8 hover:text-accent' />
            </a>

            <a href="https://github.com/mahfuz-moyeen" target='blank'>
                <FaGithub className='w-8 h-8 hover:text-accent' />
            </a>

            <a href="https://www.facebook.com/mahfuz.moyeen.111" target="blank">
                <FaFacebookF className='w-8 h-8 hover:text-accent' />
            </a>

            <a href="https://www.instagram.com/mahfuz.moyeen/?hl=en" target='blank'>
                <FaInstagram className='w-8 h-8 hover:text-accent' />
            </a>
        </div>
    );
};

export default Social;