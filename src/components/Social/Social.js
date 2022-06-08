import React from 'react';
import { FaLinkedinIn, FaGithub, FaFacebookF, FaInstagram } from 'react-icons/fa';

const Social = () => {
    return (
        <div className='flex justify-center gap-5'>
            <a href="">
                <FaLinkedinIn className='w-8 h-8 hover:text-accent' />
            </a>

            <a href="">
                <FaGithub className='w-8 h-8 hover:text-accent' />
            </a>

            <a href="">
                <FaFacebookF className='w-8 h-8 hover:text-accent' />
            </a>

            <a href="">
                <FaInstagram className='w-8 h-8 hover:text-accent' />
            </a>
        </div>
    );
};

export default Social;