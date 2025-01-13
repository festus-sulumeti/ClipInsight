import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/app');
    };

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4">
            <motion.h1
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                Welcome to ClipInsight
            </motion.h1>
            <motion.p
                className="text-lg sm:text-xl mb-8 text-center max-w-2xl"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
            >
                ClipInsight provides concise summaries of YouTube videos, helping you quickly grasp key insights from video content. Gain valuable understanding without watching the entire video.
            </motion.p>
            <motion.button
                className="bg-white text-blue-600 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-bold hover:bg-gray-200 transition"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleGetStarted}
            >
                Get Started
            </motion.button>
        </div>
    );
};

export default LandingPage;
