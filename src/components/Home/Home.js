import React from 'react';
import { motion } from "framer-motion";
import ReactTilt from 'react-universal-tilt';
import TitleBar from '../TitleBar/TitleBar';
import { Typewriter } from 'react-simple-typewriter';
import { useTypewriter } from 'react-simple-typewriter'
import { useMediaQuery } from 'react-responsive'


function myFunc(el) {
    el.style.backgroundColor = '';
}


const TypewriterHook = () => {

    const { text } = useTypewriter({
        words: ['Hello', 'From', 'Typewriter', 'Hook!'],
        loop: 0, // Infinit
    })

    return (
        <div>
            <span>{text}</span>
        </div>
    )
}

const Home = () => {
    const handleTiltChange = (e) => {
        console.log(e.tiltX, e.tiltY, e.angle);
    };

    const handleDone = () => {
        console.log("done from typewriter component");
    };

    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
      })
      const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })

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

                        {/* img section  */}
                        <div className='p-10 hidden lg:block'>
                            {
                                (isDesktopOrLaptop || isBigScreen) &&

                                <ReactTilt
                                    settings={{ speed: 500 }}
                                    callbacks={{ onMouseMove: (el) => myFunc(el), }}
                                    onTiltChange={handleTiltChange}
                                    className="tilt-elem my-tilt"
                                >
                                    <img className='rounded-2xl' src="https://avstechnolabs.com/Themeforest/Gaspar/01/Dark/assets/images/profile/wrap.jpg" alt="profile" />
                                </ReactTilt>
                            }
                        </div>

                        <div className='p-10 block lg:hidden'>
                            <img className='rounded-2xl' src="https://avstechnolabs.com/Themeforest/Gaspar/01/Dark/assets/images/profile/wrap.jpg" alt="profile" />
                        </div>

                        {/* title section  */}
                        <div>
                            <div className='text-center py-10'>
                                <p className='text-xl'> Hello, I'm </p>
                                <h1 className="text-5xl font-bold text-gray-200 my-3">
                                    Mahfuz <span className='text-primary'>Moyeen</span>
                                </h1>
                                <TitleBar />

                                <h1 className='my-5 h-8 text-3xl text-accent'>
                                    <TypewriterHook />
                                </h1>

                                {/* icon  */}
                                <div>
                                    iconsss
                                </div>
                                <div className='p-5'>
                                    <p>
                                        <Typewriter
                                            words={[`          As a full-stack web developer, I am passionate about working for a software company where I can harness my talents in web design, front-end, back-end, UI and UX design web development to provide excellent customer service.
                                        `]}
                                            loop={1}
                                            typeSpeed={40}
                                            cursor
                                            cursorStyle="_"
                                            onLoopDone={handleDone}
                                        />
                                    </p>
                                </div>
                            </div>
                            <div className='w-10/12 mx-auto flex justify-evenly'>
                                <button className='btn btn-outline btn-primary'>Hire me</button>
                                <button className='btn btn-outline btn-primary'>About me</button>
                            </div>
                        </div>

                    </div>
                </div>

            </motion.div>
        </div>

    );
};

export default Home;