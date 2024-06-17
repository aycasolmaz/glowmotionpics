import React, { useEffect, useState } from 'react';
import { fetchVideos } from '../api/server'; // Make sure this is correctly imported
import { Link } from 'react-router-dom';
import '../styles/Home.css'; // Make sure this is correctly linked
import LandingPage from '../assets/LandingPage.mp4'

const Home = () => {
  const [featuredVideos, setFeaturedVideos] = useState([]);

  // Fetch videos tagged as "featured"
  useEffect(() => {
    fetchVideos('featured').then(videos => {
      setFeaturedVideos(videos);  // Assuming videos have the necessary structure
    }).catch(error => console.error('Error fetching featured videos:', error));
  }, []);

  fetchVideos('featured').then(videos => {
    console.log("Fetched videos:", videos);
    setFeaturedVideos(videos);
  }).catch(error => console.error('Error fetching featured videos:', error));


  return (
    <>
      <div className="homepage">
        <section className="video-container">
          <video autoPlay loop muted src={LandingPage} type="video/mp4">
            Your browser does not support the video tag.
          </video>
        </section>
        <section className="featuring-section">
          <h2>FEATURING</h2>
          <div className="features">
            {featuredVideos.map((video, index) => (
              <div
                key={index}
                className="video-box"
                style={{
                  backgroundImage: `url(${video.pictures.sizes.find(size => size.width >= 150 && size.height >= 200).link})`,
                  backgroundSize: 'cover',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '168.75px',
                  width: '300px'
                }}
              >
                <div className="video-name">
                  <Link key={index} to={`/video/${video.uri.split('/').pop()}`} className="invisible-link">{video.name}</Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
