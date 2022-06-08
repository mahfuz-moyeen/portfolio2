import React from 'react';
import { motion } from "framer-motion";

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
                <div className="w-10/12 h-[700px] md:w-[35rem] md:h-[50rem] lg:w-[70rem] lg:h-[35rem] rounded-xl mx-auto bg-neutral overflow-y-auto">
                    <div>


                    </div>
                </div>

            </motion.div>
        </div>
    );
};

export default Project;