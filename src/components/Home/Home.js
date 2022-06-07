import React from 'react';
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div class="h-screen flex bg-base-200 justify-center items-center">
            <motion.div
                initial={{ scale: 0, rotate: 360 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
            >

                <div class="w-[1080px] h-[500px] rounded-xl mx-auto bg-white">
                    
                </div>

            </motion.div>
        </div>

    );
};

export default Home;