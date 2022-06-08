import React from 'react';
import TitleBar from '../TitleBar/TitleBar';

const MyResume = () => {
    return (
        <div className='pt-10'>
            <div className='text-center my-5' >
                <p className='text-lg'>Check Out My Resume</p>
                <h1 className="text-4xl font-bold text-gray-200 my-3">My <span className='text-primary'>Resume</span>
                </h1>
                <TitleBar />
                <div class="flex flex-col w-11/12 mx-auto pt-10 lg:flex-row">

                    {/* Education  */}
                    <div class="grid flex-grow justify-center">
                        <h1 className='text-2xl text-gray-200'>Education</h1>

                        <div class="card w-11/12 mx-auto lg:w-96 mt-5 bg-base-100 text-neutral-content">
                            <div class="card-body items-center text-center">
                                <h2 class="card-title text-gray-200">B.sc ( 2021-Present )</h2>
                                <p>Electrical and Electronic Engineering (EEE)</p>
                                <p>Green University of Bangladesh, Dhaka, Bangladesh</p>
                                
                            </div>
                        </div>

                        <div class="card w-11/12 mx-auto lg:w-96 mt-5 bg-base-100 text-neutral-content">
                            <div class="card-body items-center text-center">
                                <h2 class="card-title text-gray-200">Diploma in Engineering ( 2016 - 2019 )</h2>
                                <p>Electronics Engineering</p>
                                <p>Rajshahi Polytechnic Institute, Rajshahi,Bangladesh</p>
                                
                            </div>
                        </div>

                    </div>

                    <div class="divider lg:divider-horizontal"></div>

                    {/* Experience */}
                    <div class="grid flex-grow justify-center">
                        <h1 className='text-2xl text-gray-200'>Experience</h1>

                        <div class="card w-11/12 mx-auto lg:w-96 mt-5 bg-base-100 text-neutral-content">
                            <div class="card-body items-center text-center">
                                <h2 class="card-title text-gray-200">Professional Training</h2>
                                <p>Complete Web Development Course</p>
                                <p>Programming Hero Batch-5, 2022</p>
                                
                            </div>
                        </div>

                        <div class="card w-11/12 mx-auto lg:w-96 mt-5 bg-base-100 text-neutral-content">
                            <div class="card-body items-center text-center">
                                <h2 class="card-title text-gray-200">Professional Training</h2>
                                <p>HTML5, CSS3 and Bootstrap 4 For Web Development</p>
                                <p>Bohubrihi - 2022</p>
                                
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};

export default MyResume;