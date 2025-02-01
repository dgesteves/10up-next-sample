import { Creator } from '@/types';
import { DESKTOP_DEVICE, MOBILE_DEVICE, TABLET_DEVICE } from './ui';

export const TOP_CREATORS: Creator[] = [
  {
    id: 'keepitreal',
    position: 1,
    name: 'Keepitreal',
    imagePath: '/images/avatars/avatar_1.png',
    imageAlt:
      'Digital artist Keepitreal profile picture showing abstract art style',
    totalSales: 34.53,
    currency: 'ETH',
  },
  {
    id: 'digilab',
    position: 2,
    name: 'DigiLab',
    imagePath: '/images/avatars/avatar_2.png',
    imageAlt: 'DigiLab studio collective avatar featuring geometric patterns',
    totalSales: 28.85,
    currency: 'SOL',
  },
  {
    id: 'gravityone',
    position: 3,
    name: 'GravityOne',
    imagePath: '/images/avatars/avatar_3.png',
    imageAlt: 'GravityOne space-themed artist profile picture',
    totalSales: 45.12,
    currency: 'BTC',
  },
  {
    id: 'juanie',
    position: 4,
    name: 'Juanie',
    imagePath: '/images/avatars/avatar_4.png',
    imageAlt: 'Portrait of Juanie showing their signature cartoon style',
    totalSales: 23.76,
    currency: 'MATIC',
  },
  {
    id: 'bluewhale',
    position: 5,
    name: 'BlueWhale',
    imagePath: '/images/avatars/avatar_5.png',
    imageAlt: 'BlueWhale profile picture featuring ocean-inspired digital art',
    totalSales: 87.21,
    currency: 'ETH',
  },
  {
    id: 'mr-fox',
    position: 6,
    name: 'mr fox',
    imagePath: '/images/avatars/avatar_6.png',
    imageAlt: 'Mr Fox artist avatar showing their iconic fox character',
    totalSales: 15.98,
    currency: 'SOL',
  },
  {
    id: 'shroomie',
    position: 7,
    name: 'Shroomie',
    imagePath: '/images/avatars/avatar_7.png',
    imageAlt: 'Shroomie profile picture with psychedelic mushroom art',
    totalSales: 65.32,
    currency: 'ETH',
  },
  {
    id: 'robotica',
    position: 8,
    name: 'robotica',
    imagePath: '/images/avatars/avatar_8.png',
    imageAlt: 'Robotica artist profile showcasing cyberpunk robot design',
    totalSales: 32.91,
    currency: 'AVAX',
  },
  {
    id: 'rustyrobot',
    position: 9,
    name: 'RustyRobot',
    imagePath: '/images/avatars/avatar_9.png',
    imageAlt: 'RustyRobot profile picture with vintage robot artwork',
    totalSales: 42.15,
    currency: 'BNB',
  },
  {
    id: 'animakid',
    position: 10,
    name: 'animakid',
    imagePath: '/images/avatars/avatar_14.png',
    imageAlt: 'Animakid profile showing their anime-inspired character art',
    totalSales: 19.66,
    currency: 'ETH',
  },
  {
    id: 'dotgu',
    position: 11,
    name: 'Dotgu',
    imagePath: '/images/avatars/avatar_15.png',
    imageAlt: 'Dotgu artist profile with minimalist dot pattern design',
    totalSales: 52.44,
    currency: 'SOL',
  },
  {
    id: 'ghiblier',
    position: 12,
    name: 'Ghiblier',
    imagePath: '/images/avatars/avatar_17.png',
    imageAlt: 'Ghiblier profile featuring Studio Ghibli inspired artwork',
    totalSales: 28.17,
    currency: 'ETH',
  },
];

export const DEVICE_ARTISTS_LIMITS = {
  [DESKTOP_DEVICE]: 12,
  [TABLET_DEVICE]: 6,
  [MOBILE_DEVICE]: 5,
};

export const TOP_CREATORS_SECTION_ARIA_LABEL = 'Top Creators Section';

export const TOP_CREATORS_HEADLINE = 'Top creators';
export const TOP_CREATORS_SUB_HEADLINE =
  'Checkout Top Rated Creators on the NFT Marketplace';

export const TOP_CREATORS_CARD_TAB_INDEX = 0;

export const TOP_CREATORS_BUTTON_TEXT = 'View Rankings';
export const TOP_CREATORS_BUTTON_ARIA_LABEL = 'View Rankings Button';
export const TOP_CREATORS_BUTTON_VARIANT = 'secondary';
export const TOP_CREATORS_BUTTON_SIZE = 'md';
export const TOP_CREATORS_BUTTON_ICON_SIZE = 20;
export const TOP_CREATORS_BUTTON_ICON_COLOR = '#a259ff';

export const ACCESSIBILITY_SPACE_KEY = ' ';

export const TOP_CREATORS_GRID_ROLE = 'grid';
export const TOP_CREATORS_ARTIST_IMAGE_SIZE = 120;

export const TOP_CREATORS_ARTIST_TOTAL_SALES_LABEL = 'Total Sales:';
