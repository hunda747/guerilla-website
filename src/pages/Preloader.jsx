import { motion } from 'framer-motion';

function Preloader() {
  return (
    <motion.div
      className="preloader"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      style={{
        background: 'black',
        width: '100vw',
        height: '100vh',
        position: 'fixed',
        top: 0,
        left: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ color: 'white' }}
      >
        Loading...
      </motion.h1>
    </motion.div>
  );
}

export default Preloader;
