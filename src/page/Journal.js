import React from 'react';
import { useSpring, animated } from 'react-spring';

const NotFound = () => {
    
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div style={fadeIn} className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-lg">Sorry, the page you are looking for does not exist.</p>
    </animated.div>
  );
};

export default NotFound;
