import React from 'react';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, Construction } from 'lucide-react';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4">
            <div className="text-center">
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="mb-8"
                >
                    <div className="w-24 h-24 bg-primary-600/10 rounded-3xl flex items-center justify-center mx-auto mb-6">
                        <Construction className="text-primary-500 w-12 h-12" />
                    </div>
                    <h1 className="text-9xl font-black text-white/5 absolute -translate-x-1/2 left-1/2 -z-10 select-none">404</h1>
                    <h2 className="text-4xl font-bold text-white mb-4">Under Construction</h2>
                    <p className="text-slate-400 max-w-md mx-auto mb-10">
                        Oops! The page you're looking for doesn't exist or is currently being moved through the DevOps pipeline.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <a href="/" className="btn-primary">
                        <Home size={18} /> Back to Portfolio
                    </a>
                    <button onClick={() => window.history.back()} className="btn-secondary">
                        <ArrowLeft size={18} /> Go Back
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default NotFound;
