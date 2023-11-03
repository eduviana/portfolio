"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./carousel.module.css";
import ArrowLeft from "../icons/ArrowLeft";
import ArrowRight from "../icons/ArrowRight";
import Technology from "../technology/Technology";
import Level from "../level/Level";

const Carousel = ({ images, technologies, level }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const selectedImage = images[currentImageIndex];

  return (
    <div className={styles.carousel}>
      <div className={styles.imageContainer}>
        <Image
          src={selectedImage}
          width="0"
          height="0"
          sizes="50vw"
          alt="Carousel"
          className={styles.image}
          priority
        />
        <button className={styles.previousButton} onClick={handlePreviousImage}>
          <ArrowLeft className={styles.icon} />
        </button>

        <button className={styles.nextButton} onClick={handleNextImage}>
          <ArrowRight className={styles.icon} />
        </button>

        <div className={styles.thumbnails}>
          {images.map((image, index) => (
            <Image
              key={index}
              width={144}
              height={112}
              className={styles.thumbnail}
              src={image}
              alt={`Thumbnail ${index}`}
              onClick={() => handleThumbnailClick(index)}
            />
          ))}
        </div>
        
      </div>
      <div className={styles.info}>
          <div className={styles.technologies}>
            {technologies.map((technology, index) => (
              <Technology key={index} technology={technology} />
            ))}
          </div>
          <Level level={level} />
        </div>
    </div>
  );
};

export default Carousel;
