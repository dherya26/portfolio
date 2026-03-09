import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header 
      className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <div className="max-w-7xl mx-auto flex h-20 items-center justify-between px-6">
        <motion.h1 
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
        >
          Dherya Jain
        </motion.h1>
        
        <div className="flex items-center space-x-4">
           {/* Add social links or CTA here if needed */}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
