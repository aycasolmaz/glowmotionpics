import React, { useEffect } from 'react';
import AnimationVideo from '../assets/AnimationVideo.mp4'; // Replace with your animation video

const AnimationScreen = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location.href = '/home'; // Redirect to the home page after 5 seconds (adjust as needed)
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div style={{ width: '100vw', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <video autoPlay muted style={{ width: '100%', height: '100%' }}>
        <source src={AnimationVideo} type="video/mp4" />
      </video>
    </div>
  );
};

export default AnimationScreen;
