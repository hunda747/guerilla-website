import { motion } from 'framer-motion';

export const usePageTransition = () => {
  const transitionSpringPhysics = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  };

  const transitionColor = "#333";

  const PageTransitionWrapper = ({ children }) => (
    <motion.div>
      <motion.div
        style={{
          backgroundColor: transitionColor,
          position: "fixed",
          width: "100vw",
          zIndex: 1000,
          bottom: 0,
        }}
        transition={transitionSpringPhysics}
        animate={{ height: "0vh" }}
        exit={{ height: "100vh" }}
      />
      {/* <motion.div
        style={{
          backgroundColor: transitionColor,
          position: "fixed",
          width: "100vw",
          zIndex: 1000,
          top: 0,
        }}
        transition={transitionSpringPhysics}
        initial={{ height: "100vh" }}
        animate={{ height: "0vh", transition: { delay: 0.05 } }}
      /> */}
      {children}
    </motion.div>
  );

  return { PageTransitionWrapper };
};