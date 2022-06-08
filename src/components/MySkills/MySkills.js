import React from 'react';
import TitleBar from '../TitleBar/TitleBar';
import { Progress } from 'react-daisyui';


const MySkills = () => {
    return (
        <div className='pt-10'>
            <div className='text-center my-5' >
                <p className='text-lg'>My Level Of Knowledge In Some Tools</p>
                <h1 className="text-4xl font-bold text-gray-200 my-3">My <span className='text-primary'>Skills</span>
                </h1>
                <TitleBar />

                <div className='grid grid-cols-1 pt-10 lg:grid-cols-2 gap-4'>
                    {/* fronend */}
                    <div className="card w-11/12 mx-auto bg-base-100 shadow-xl">
                        <div className="card-body text-gray-300">
                            <h2 className="card-title mx-auto mb-3">Front-End</h2>
                            <p className='flex p-1 justify-evenly items-center'>
                                <span className='text-lg'>React.js </span>
                                <Progress className="progress progress-info bg-slate-600 w-56" value={85} max={100} />
                            </p>
                            <p className='flex p-1 justify-evenly items-center'>
                                <span className='text-lg'>Tailwind</span>
                                <Progress className="progress progress-info bg-slate-600 w-56" value={93} max={100} />
                            </p>
                            <p className='flex p-1 justify-evenly items-center'>
                                <span className='text-lg'>Bootstrap</span>
                                <Progress className="progress progress-info bg-slate-600 w-56" value={90} max={100} />
                            </p>
                            <p className='flex p-1 justify-evenly items-center'>
                                <span className='text-lg'>JavaScript</span>
                                <Progress className="progress progress-info bg-slate-600 w-56" value={85} max={100} />
                            </p>
                            <p className='flex p-1 justify-evenly items-center'>
                                <span className='text-lg'>HTML5</span>
                                <Progress className="progress progress-info bg-slate-600 w-56" value={95} max={100} />
                            </p>
                            <p className='flex p-1 justify-evenly items-center'>
                                <span className='text-lg'>CSS3</span>
                                <Progress className="progress progress-info bg-slate-600 w-56" value={90} max={100} />
                            </p>


                        </div>
                    </div>
                    {/* backend  */}
                    <div className="card w-11/12 mx-auto bg-base-100 shadow-xl">
                        <div className="card-body text-gray-300">
                            <h2 className="card-title mx-auto mb-3">Back-End</h2>
                            <p className='flex p-1 justify-evenly items-center'>
                                <span className='text-lg'>Node.js</span>
                                <Progress className="progress progress-info bg-slate-600 w-56" value={80} max={100} />
                            </p>
                            <p className='flex p-1 justify-evenly items-center'>
                                <span className='text-lg'>Express.js</span>
                                <Progress className="progress progress-info bg-slate-600 w-56" value={72} max={100} />
                            </p>
                            <p className='flex p-1 justify-evenly items-center'>
                                <span className='text-lg'>MongoDB</span>
                                <Progress className="progress progress-info bg-slate-600 w-56" value={75} max={100} />
                            </p>
                            <p className='flex p-1 justify-evenly items-center'>
                                <span className='text-lg'>JWT </span>
                                <Progress className="progress progress-info bg-slate-600 w-56" value={70} max={100} />
                            </p>

                        </div>
                    </div>

                    {/* other  */}
                    <div className="card w-11/12 mx-auto bg-base-100 shadow-xl">
                        <div className="card-body text-gray-300">
                            <h2 className="card-title mx-auto mb-3">Other</h2>
                            <p className='text-lg'>
                                DaisyUI, Flowbite, AOS, React Router, React Hook form, React Query,
                                Swiper.js, Material UI, stripe,js, React-Toastify
                            </p>
                        </div>
                    </div>
                    {/* tool  */}
                    <div className="card w-11/12 mx-auto bg-base-100 shadow-xl">
                        <div className="card-body text-gray-300">
                            <h2 className="card-title mx-auto mb-3">Tools</h2>
                            <p className='text-lg'>
                                VS Code, Chrome Dev-tool, Github, Codepen, Terminal, Photoshop, Illustrator, Figma
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MySkills;