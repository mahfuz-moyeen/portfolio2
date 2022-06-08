import React from 'react';
import { motion } from "framer-motion";
import TitleBar from '../TitleBar/TitleBar';
import Social from '../Social/Social';
import MyResume from '../MyResume/MyResume';

const About = () => {
    return (
        <div className="mt-5 md:mt-0 md:min-h-screen flex bg-base-200 justify-center items-center">
            <motion.div
                initial={{ scale: 0, rotate: 270 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
            >
                <div className="w-10/12 h-[700px] md:w-[35rem] md:h-[50rem] lg:w-[70rem] lg:h-[35rem] rounded-xl mx-auto bg-neutral overflow-y-auto">
                    <div>
                        <div className='text-center my-5' >
                            <p className='text-lg'>My Intro</p>
                            <h1 className="text-4xl font-bold text-gray-200 my-3">
                                About <span className='text-primary'>Me</span>
                            </h1>
                            <TitleBar />
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>
                            <div className='p-5'>
                                <img className='rounded-2xl' src="https://avstechnolabs.com/Themeforest/Gaspar/01/Dark/assets/images/profile/wrap.jpg" alt="profile" />
                            </div>
                            <div className='w-10/12 mx-auto lg:col-span-2 flex items-center'>
                                <div>
                                    <h1 className='text-left mb-10 text-2xl text-gray-200'>Personal <span className='text-primary'>Informations</span></h1>
                                    <div className='grid grid-cols-2 gap-5 lg:text-lg'>
                                        <h1>First Name: <span className='text-gray-200'>Mahfuz Zahan</span></h1>

                                        <h1>Email: <span className='text-primary break-words'>mahfuzmoyeen01@gmail.com</span></h1>

                                        <h1>Last Name: <span className='text-gray-200'>Moyeen</span></h1>

                                        <h1>Phone: <span className='text-primary'>(+880)1703099425</span></h1>

                                        <h1>Address: <span className='text-gray-200'>Rajshahi, Bangladesh</span></h1>

                                        <h1>Languages: <span className='text-gray-200'>Bengli, English</span></h1>

                                    </div>
                                    <button className='my-5 btn btn-accent block mx-auto lg:mx-0'>Download Resume</button>

                                    <div class="divider pt-10">
                                        <Social />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <MyResume />
                    </div>
                </div>

            </motion.div>
        </div>
    );
};

export default About;