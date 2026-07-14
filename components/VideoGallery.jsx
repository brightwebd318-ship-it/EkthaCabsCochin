'use client';

import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './VideoGallery.css';

const videoData = [
  { id: 1, src: '/videos/EkthaHero1.mp4', title: 'City Rides', description: 'Comfortable urban travel' },
  { id: 2, src: '/videos/EkthaHero2.mp4', title: 'Airport Transfer', description: 'Timely airport pickups & drops' },
  { id: 3, src: '/videos/EkthaHero3.mp4', title: 'Outstation Trips', description: 'Relaxing long-distance journeys' },
];

const VideoGallery = () => {
  const swiperRef = useRef(null);

  const handleMouseEnter = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) video.pause();
  };

  const handleMouseLeave = (e) => {
    const video = e.currentTarget.querySelector('video');
    if (video) video.play();
  };

  return (
    <section className="video-gallery-section">
      <div className="container">
        <div className="section-header">
          <h2>Our Service Highlights</h2>
          <p>Experience the journey in motion</p>
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
          className="video-swiper"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {videoData.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="video-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <div className="video-wrapper">
                  <video src={video.src} muted loop autoPlay playsInline className="gallery-video" />
                  <div className="video-overlay">
                    <div className="video-caption">
                      <h3>{video.title}</h3>
                      <p>{video.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default VideoGallery;
