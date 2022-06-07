import React from 'react';
import { motion } from "framer-motion";

const Home = () => {
    return (
        <div>
            <motion.div
                initial={{ scale: 0, rotate: 360 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{
                    type: "spring",
                    stiffness: 260,
                    damping: 20
                }}
            >
                <div>
                    <h1>Home</h1>
                </div>
            </motion.div>
        </div>
    );
};

export default Home;