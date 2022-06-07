import React from 'react';
import { motion } from "framer-motion";
import ReactTilt from 'react-universal-tilt';

function myFunc(el) {
    el.style.backgroundColor = '';
}

const Home = () => {
    const handleTiltChange = (e) => {
        console.log(e.tiltX, e.tiltY, e.angle);
    };

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

                    <div className=' grid grid-cols-1 lg:grid-cols-2 gap-3'>

                        <div className='p-10'>

                            <ReactTilt
                                settings={{ speed: 500 }}
                                callbacks={{ onMouseMove: (el) => myFunc(el), }}
                                onTiltChange={handleTiltChange}
                                className="tilt-elem my-tilt"
                            >
                                <img className='rounded-2xl' src="https://avstechnolabs.com/Themeforest/Gaspar/01/Dark/assets/images/profile/wrap.jpg" alt="profile" />
                            </ReactTilt>

                        </div>

                        <div>
                            <div>
                                <h1>Otis Smith</h1>
                                <p>WEB DEVELOPER</p>
                            </div>
                            <div>
                                iconsss
                            </div>
                            <div>
                                I am a freelancer based in the United Kingdom and i have been building noteworthy UX/UI designs and websites for years, which comply with the latest design trends. I help convert a vision and an idea into meaningful and useful products. Having a sharp eye for product evolution helps me prioritize tasks, iterate fast and deliver faster.
                            </div>
                            <div>
                                <button>hire me</button>
                                <button>about me</button>
                            </div>
                        </div>

                    </div>
                </div>

            </motion.div>
        </div>

    );
};

export default Home;