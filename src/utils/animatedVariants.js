// Fade Variants
export const fadeIn = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1.2,
      delay: 0.5,
    },
  },
};

export const fadeinY = (delay) => ({
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      delay: delay,
    },
  },
});

// Input Variants
export const inputVariants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
  },
};

// Button Variants
export const buttonVariants = {
  tap: {
    scale: 0.9,
  },
  hover: {
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 500,
      damping: 10,
    },
  },
};

// Modal Variants
export const modalVariants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      delay: 0.35,
      type: "spring",
      damping: 10,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const modalVariants2 = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: 1,
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  },
  exit: {
    opacity: 0,
  },
};

// Check Variants
export const checkVariants = {
  initial: {
    scale: 0,
  },
  animate: {
    scale: [0, 1.2, 1],
    transition: {
      type: "spring",
      delay: 1,
    },
  },
};

// ProgressBar Variants
export const progressBarVariants = {
  initial: {
    width: 0,
  },
  animate: {
    width: "78%",
    transition: {
      duration: 3,
      delay: 0.8,
      type: "spring",
    },
  },
};
