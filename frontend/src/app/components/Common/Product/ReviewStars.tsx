import React from 'react';
import { Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';

type ReviewStarsProps = {
  rating: number;
  totalStars?: number;
  starHeight?: string | number;
  reviewCount?: number;
  onClick?: () => void;
};

export const ReviewStars = ({
  rating = 0,
  totalStars = 5,
  starHeight = '20px',
  reviewCount,
  onClick = null,
}: ReviewStarsProps) => {
  const fullStars = Math.floor(rating);
  const decimal = rating % 1;

  const hasHalfStar = decimal >= 0.3 && decimal < 0.75;
  const adjustedFullStars = Math.max(0, fullStars + (decimal >= 0.75 ? 1 : 0));
  const emptyStars = Math.max(
    0,
    totalStars - adjustedFullStars - (hasHalfStar ? 1 : 0)
  );

  return (
    <Box
      display="flex"
      onClick={onClick}
      sx={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {[...Array(adjustedFullStars)]?.map((_, i) => (
        <StarIcon
          key={`full-${i}`}
          sx={{ color: '#fc9003', width: starHeight, height: starHeight }}
        />
      ))}
      {hasHalfStar && (
        <StarHalfIcon
          sx={{ color: '#fc9003', width: starHeight, height: starHeight }}
        />
      )}
      {[...Array(emptyStars)]?.map((_, i) => (
        <StarBorderIcon
          key={`empty-${i}`}
          sx={{ color: '#fc9003', width: starHeight, height: starHeight }}
        />
      ))}
      {reviewCount !== undefined && (
        <Box sx={{ ml: 1, fontSize: '14px', color: '#999' }}>
          {reviewCount} {reviewCount === 1 ? 'Review' : 'Reviews'}
        </Box>
      )}
    </Box>
  );
};
