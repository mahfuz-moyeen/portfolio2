import React from 'react';
import { motion } from "framer-motion";
import TitleBar from '../TitleBar/TitleBar';
import { FaCode, FaLaptopCode, FaArrowsAlt, FaWordpressSimple } from 'react-icons/fa';
import { MdAnimation, MdOutlineColorLens, MdOutlineManageAccounts, MdOutlineDesignServices } from 'react-icons/md';
import MyTestimonial from '../MyTestimonial/MyTestimonial';

const MyServices = () => {
    return (
        <div className="mt-5 md:mt-0 md:min-h-screen flex bg-base-200 justify-center items-center">
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
            >
                <div className="w-10/12 h-[550px] md:w-[35rem] md:h-[50rem] lg:w-[70rem] lg:h-[35rem]  rounded-xl mx-auto bg-neutral overflow-y-auto">
                    <div>
                        <div className='text-center my-10' >
                            <p className='text-lg'>Services I Offer To My Clients</p>
                            <h1 className="text-4xl font-bold text-gray-200 my-3">My <span className='text-primary'>Services</span>
                            </h1>
                            <TitleBar />
                        </div>

                        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 w-11/12 mx-auto'>

                            {/* Web Devolopment */}
                            <div class="card bg-base-100 text-neutral-content hover:bg-primary hover:shadow-xl hover:shadow-gray-600 hover:text-base-100">
                                <div class="card-body items-center text-center">
                                    <FaCode className='w-16 h-16' />
                                    <h2 class="card-title">Web Devolopment</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>

                            {/* Web Design */}
                            <div class="card bg-base-100 text-neutral-content hover:bg-primary hover:shadow-xl hover:shadow-gray-600 hover:text-base-100">
                                <div class="card-body items-center text-center">
                                    <FaLaptopCode className='w-16 h-16' />
                                    <h2 class="card-title">Web Design</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>

                            {/* Fully Responsive  */}
                            <div class="card bg-base-100 text-neutral-content hover:bg-primary hover:shadow-xl hover:shadow-gray-600 hover:text-base-100">
                                <div class="card-body items-center text-center">
                                    <FaArrowsAlt className='w-16 h-16' />
                                    <h2 class="card-title">Fully Responsive</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>

                            {/* Animation  */}
                            <div class="card bg-base-100 text-neutral-content hover:bg-primary hover:shadow-xl hover:shadow-gray-600 hover:text-base-100">
                                <div class="card-body items-center text-center">
                                    <MdAnimation className='w-16 h-16' />
                                    <h2 class="card-title">Animation</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>

                            {/* Wordpress  */}
                            <div class="card bg-base-100 text-neutral-content hover:bg-primary hover:shadow-xl hover:shadow-gray-600 hover:text-base-100">
                                <div class="card-body items-center text-center">
                                    <FaWordpressSimple className='w-16 h-16' />
                                    <h2 class="card-title">Wordpress</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>

                            {/* UI/UX Design  */}
                            <div class="card bg-base-100 text-neutral-content hover:bg-primary hover:shadow-xl hover:shadow-gray-600 hover:text-base-100">
                                <div class="card-body items-center text-center">
                                    <MdOutlineColorLens className='w-16 h-16' />
                                    <h2 class="card-title">UI/UX Design</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>

                            {/* Management  */}
                            <div class="card bg-base-100 text-neutral-content hover:bg-primary hover:shadow-xl hover:shadow-gray-600 hover:text-base-100">
                                <div class="card-body items-center text-center">
                                    <MdOutlineManageAccounts className='w-16 h-16' />
                                    <h2 class="card-title">Management</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>

                            {/* Product Design  */}
                            <div class="card bg-base-100 text-neutral-content hover:bg-primary hover:shadow-xl hover:shadow-gray-600 hover:text-base-100">
                                <div class="card-body items-center text-center">
                                    <MdOutlineDesignServices className='w-16 h-16' />
                                    <h2 class="card-title">Product Design</h2>
                                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                                </div>
                            </div>

                        </div>

                        <MyTestimonial/>
                    </div>
                </div>

            </motion.div>
        </div>
    );
};

export default MyServices;