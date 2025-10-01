"use client";

import { motion } from "framer-motion";
import { Button } from "./button";

interface WelcomeOverlayProps {
  onEnter: () => void;
}

const WelcomeOverlay: React.FC<WelcomeOverlayProps> = ({ onEnter }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1 // Stagger children animations by 0.1 seconds
      }
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 200, damping: 20 }
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 overflow-hidden"
    >
      {/* Animated background element */}
      <motion.div
        animate={{
          scale: [1, 1.05, 1],
          rotate: [0, 5, 0],
          opacity: [0.1, 0.2, 0.1]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full -z-10 blur-2xl"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="bg-card text-card-foreground rounded-lg shadow-xl p-8 max-w-md text-center border border-border relative overflow-hidden"
      >
        <motion.h1 
          variants={itemVariants}
          className="text-4xl font-bold mb-4 font-display"
        >
          Welcome to My Creative World
        </motion.h1>
        <motion.p 
          variants={itemVariants}
          className="text-lg mb-6 text-muted-foreground"
        >
          Where innovation meets design to development. Explore my projects and see how creativity transforms ideas into meaningful digital experiences.
        </motion.p>
        <motion.div variants={itemVariants} className="flex justify-center">
          <Button
            onClick={onEnter}
            className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 text-white flex items-center gap-2"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(168, 85, 247, 0.8)" }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-music"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg> */}
            About Me
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WelcomeOverlay;