import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface FortCarouselProps {
  images: string[];
  alt?: string;
}

const FortCarousel: React.FC<FortCarouselProps> = ({ images, alt = "Fort image" }) => {
  if (!images || images.length === 0) {
    return null;
  }
  return (
    <Carousel
      showThumbs={false}
      infiniteLoop
      autoPlay
      interval={4000}
      showStatus={false}
      className="relative"
    >
      {images.map((src, idx) => (
        <div key={idx} className="h-[50vh] md:h-[60vh] overflow-hidden">
          <img src={src} alt={`${alt} ${idx + 1}`} className="object-cover w-full h-full" />
        </div>
      ))}
    </Carousel>
  );
};

export default FortCarousel;
