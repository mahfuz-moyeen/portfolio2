import React from 'react';
import { motion } from "framer-motion";
import TitleBar from '../TitleBar/TitleBar';
import project01 from '../../Image/project01.png'
import project02 from '../../Image/project02.png'
import project03 from '../../Image/project03.png'
import style from './Project.module.css'


const Project = () => {
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
                <div className="p-3 md:p-0 h-[550px] md:w-[35rem] md:h-[50rem] lg:w-[70rem] lg:h-[35rem] rounded-xl mx-auto bg-neutral overflow-y-auto">
                    <div>
                        <div className='text-center my-5' >
                            <p className='text-lg'>Showcasing Some Of My Best Work</p>
                            <h1 className="text-4xl font-bold text-gray-200 my-3">
                                My <span className='text-primary'>Project</span>
                            </h1>
                            <TitleBar />
                        </div>

                        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2'>

                            <div class={`${style.card} h-60 mx-10 lg:mx-16 my-2 lg:my-12`}>
                                <div class={`${style.cardSide} ${style.front} h-60 lg:h-80`}>
                                    <div className=''>
                                        <img src={project01} alt="Project" className="rounded-xl h-60 lg:h-80" />
                                    </div>
                                </div>
                                <div class={`${style.cardSide} ${style.back} h-60 lg:h-80`}>
                                    <div className='h-60 lg:h-80 card'>
                                        <div className="h-60 lg:h-80 flex flex-col p-5 justify-center items-center gap-4">
                                            <h2 className="card-title">Dronezia</h2>
                                            <span className='badge badge-outline'>Fullstack</span>
                                            <p className='text-center'>It is a warhouse website.
                                            </p>
                                            <a href="https://dronezia.web.app/" className="btn btn-primary">Live Site</a>
                                            {/* <div className="card-actions flex-col">
                                                
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div class={`${style.card} h-60 mx-10 lg:mx-16 my-2 lg:my-12`}>
                                <div class={`${style.cardSide} ${style.front} h-60 lg:h-80`}>
                                    <div className=''>
                                        <img src={project02} alt="Project" className="rounded-xl h-60 lg:h-80" />
                                    </div>
                                </div>
                                <div class={`${style.cardSide} ${style.back} h-60 lg:h-80`}>
                                    <div className='h-60 lg:h-80 card'>
                                        <div className="h-60 lg:h-80 flex flex-col p-5 justify-center items-center gap-4">
                                            <h2 className="card-title">Tesla-m3</h2>
                                            <span className='badge badge-outline'>front-end</span>
                                            <p className='text-center'>It is a Reviews website.
                                            </p>
                                            <a href="https://tesla-m3.netlify.app/" className="btn btn-primary">Live Site</a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class={`${style.card} h-60 mx-10 lg:mx-16 my-2 lg:my-12`}>
                                <div class={`${style.cardSide} ${style.front} h-60 lg:h-80`}>
                                    <div className=''>
                                        <img src={project03} alt="Project" className="rounded-xl h-60 lg:h-80" />
                                    </div>
                                </div>
                                <div class={`${style.cardSide} ${style.back} h-60 lg:h-80`}>
                                    <div className='h-60 lg:h-80 card'>
                                        <div className="h-60 lg:h-80 flex flex-col p-5 justify-center items-center gap-4">
                                            <h2 className="card-title">Mr time watch shop</h2>
                                            <span className='badge badge-outline'>Js,htlm,css</span>
                                            <p className='text-center'>A Random chooses product website.
                                            </p>
                                            <a href="https://mr-time-watch-shop.netlify.app/" className="btn btn-primary">Live Site</a>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>

                    </div>
                </div>

            </motion.div >
        </div >
    );
};

export default Project;