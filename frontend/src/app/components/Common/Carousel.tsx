import React, { useState, useRef } from 'react';
import { makeStyles } from 'tss-react/mui';
import { Button, Box, IconButton, useMediaQuery } from '@mui/material';
import { ArrowForwardIos } from '@mui/icons-material';
import { IProductImage } from 'app/models/Product/product';
import { theme } from 'styles/global-styles';

const useStyles = makeStyles()(() => ({
  carouselContainer: {
    position: 'relative',
    width: '100%',
    maxWidth: '800px',
    margin: '0 auto',
    overflow: 'hidden',
  },
  imageContainer: {
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
  },
  image: {
    minWidth: '100%',
    height: '250px',
    objectFit: 'cover',
    '@media (min-width: 768px)': {
      height: '500px',
    },
    '@media (min-width: 1024px)': {
      height: '600px',
    },
  },
  dotsContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10px',
  },
  dot: {
    width: '12px',
    height: '12px',
    margin: '0 5px',
    borderRadius: '50%',
    backgroundColor: 'gray',
    border: '2px solid transparent',
    transition: 'all 0.5s ease',
    cursor: 'pointer',
  },
  activeDot: {
    backgroundColor: 'transparent',
    border: '2px solid gray',
    transition: 'transform 0.5s ease-in-out',
  },
  thumbnailContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '16px',
    gap: '10px',
  },
  thumbnail: {
    width: '60px',
    height: '40px',
    objectFit: 'cover',
    border: '2px solid transparent',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'border 0.3s',
    '&:hover': {
      border: '2px solid #666',
    },
  },
  activeThumbnail: {
    border: '2px solid black',
  },
  magnifier: {
    position: 'absolute',
    width: '150px',
    height: '150px',
    border: '2px solid rgba(255, 255, 255, 0.7)',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    pointerEvents: 'none',
  },
  magnifiedView: {
    position: 'absolute',
    width: '200px',
    height: '200px',
    overflow: 'hidden',
    right: '-220px',
    border: '2px solid #ccc',
    backgroundColor: 'white',
  },
  magnifiedImage: {
    position: 'absolute',
    transform: 'scale(2)',
    transformOrigin: 'top left',
  },
}));

interface ImageCarouselProps {
  images: IProductImage[];
}

export const Carousel: React.FC<ImageCarouselProps> = ({ images }) => {
  const { classes } = useStyles();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);
  const isLargeScreen = useMediaQuery('(min-width:1024px)');
  const [hoverPosition, setHoverPosition] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const difference = touchStartX.current - touchEndX.current;
      if (difference > 50) {
        nextSlide();
      } else if (difference < -50) {
        prevSlide();
      }
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const handleDotTransition = (prevIndex: number, clickedIndex: number) => {
    if (isTransitioning || prevIndex === clickedIndex) return;
    setIsTransitioning(true);

    const step = clickedIndex > prevIndex ? 1 : -1;

    const animate = (index: number) => {
      setTimeout(() => {
        setCurrentIndex(index);
        const nextIndex = index + step;
        if (
          (step > 0 && nextIndex <= clickedIndex) ||
          (step < 0 && nextIndex >= clickedIndex)
        ) {
          animate(nextIndex);
        } else {
          setIsTransitioning(false);
        }
      }, 70); // delay between dot transitions
    };
    animate(prevIndex + step);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setHoverPosition({ x: e.clientX - left, y: e.clientY - top });
  };

  const handleMouseLeave = () => {
    setHoverPosition(null);
  };

  return (
    <Box
      className={classes.carouselContainer}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Box
        className={classes.imageContainer}
        sx={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.imageUrl}
            alt={`Slide ${index + 1}`}
            className={classes.image}
          />
        ))}
      </Box>
      {!isSmallScreen && images?.length > 0 && (
        <IconButton
          disabled={isTransitioning}
          sx={{
            position: 'absolute',
            top: '50%',
            left: '10px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.2)' },
            '&:disabled': { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
          }}
          onClick={() =>
            handleDotTransition(
              currentIndex,
              currentIndex === 0 ? images.length - 1 : currentIndex - 1
            )
          }
        >
          <ArrowForwardIos
            sx={{ color: 'white', transform: 'rotate(180deg)' }}
          />
        </IconButton>
      )}
      {!isSmallScreen && images?.length > 0 && (
        <IconButton
          disabled={isTransitioning}
          sx={{
            position: 'absolute',
            top: '50%',
            right: '10px',
            transform: 'translateY(-50%)',
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
            '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.2)' },
            '&:disabled': { backgroundColor: 'rgba(0, 0, 0, 0.1)' },
          }}
          onClick={() =>
            handleDotTransition(
              currentIndex,
              currentIndex === images.length - 1 ? 0 : currentIndex + 1
            )
          }
        >
          <ArrowForwardIos sx={{ color: 'white' }} />
        </IconButton>
      )}
      <Box className={classes.dotsContainer}>
        {images.map((_, index) => (
          <Button
            key={index}
            className={`${classes.dot} ${
              currentIndex === index ? classes.activeDot : ''
            }`}
            onClick={() => handleDotTransition(currentIndex, index)}
            disableRipple
            sx={{
              minWidth: '12px',
              height: '12px',
              padding: 0,
              borderRadius: '50%',
            }}
          />
        ))}
      </Box>
      {isLargeScreen && (
        <Box className={classes.thumbnailContainer}>
          {images.map((img, index) => (
            <img
              key={index}
              src={img.imageUrl}
              alt={`Thumbnail ${index + 1}`}
              className={`${classes.thumbnail} ${
                currentIndex === index ? classes.activeThumbnail : ''
              }`}
              onClick={() => handleDotTransition(currentIndex, index)}
            />
          ))}
        </Box>
      )}
    </Box>
  );
};
