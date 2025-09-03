import BedroomImage from 'app/assets/images/bedroom.png';
import DecorImage from 'app/assets/images/decorDept.png';
import DiningRoomImage from 'app/assets/images/diningRoom.png';
import LivingRoomImage from 'app/assets/images/chicLivingRoom.png';
import OutdoorImage from 'app/assets/images/outdoor.png';

export const MOCK_DEPARTMENTS = [
    {
      name: 'livingRoom',
      description: 'Living Room',
      image: LivingRoomImage,
      altText: 'Living Room Department',
      path: '/living-room',
    },
    {
      name: 'kitchen+dining',
      description: 'Dining',
      image: DiningRoomImage,
      altText: 'Dining Room Department',
      path: '/kitchen-dining',
    },
    {
      name: 'bedroom',
      description: 'Bedroom',
      image: BedroomImage,
      altText: 'Bedroom Department',
      path: '/bedroom',
    },
    {
      name: 'outdoor',
      description: 'Outdoor',
      image: OutdoorImage,
      altText: 'Outdoor Department',
      path: '/outdoor',
    },
    {
      name: 'decor',
      description: 'Decor',
      image: DecorImage,
      altText: 'Decor Department',
      path: '/decor',
    },
  ];