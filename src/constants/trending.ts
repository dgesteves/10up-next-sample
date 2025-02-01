import { DESKTOP_DEVICE, MOBILE_DEVICE, TABLET_DEVICE } from '@/constants/ui';
import { Collection } from '@/types';

export const COLLECTIONS: Collection[] = [
  {
    id: 'dsgn-animals',
    title: 'DSGN Animals',
    mainImage: {
      id: 'dog-nft',
      src: '/images/nfts/dog_NFT.png',
      alt: 'Multi color dog with glasses NFT',
    },
    subImages: [
      {
        id: 'cat-nft',
        src: '/images/nfts/cat_NFT.png',
        alt: 'Cat with glasses and headphones NFT',
      },
      {
        id: 'bear-nft',
        src: '/images/nfts/bear_NFT.png',
        alt: 'Bear with glasses and a sweatshirt NFT',
      },
    ],
    totalItems: 1025,
    artist: {
      id: 'mrfox',
      name: 'MrFox',
      avatar: '/images/avatars/avatar_6.png',
    },
  },
  {
    id: 'magic-mushrooms',
    title: 'Magic Mushrooms',
    mainImage: {
      id: 'mushroom-1-nft',
      src: '/images/nfts/mushroom_1_NFT.png',
      alt: 'Colorful mushroom NFT artwork',
    },
    subImages: [
      {
        id: 'mushroom-2-nft',
        src: '/images/nfts/mushroom_2_NFT.png',
        alt: 'Second mushroom NFT in the collection',
      },
      {
        id: 'mushroom-3-nft',
        src: '/images/nfts/mushroom_3_NFT.png',
        alt: 'Third mushroom NFT in the collection',
      },
    ],
    totalItems: 308,
    artist: {
      id: 'shroomie',
      name: 'Shroomie',
      avatar: '/images/avatars/avatar_7.png',
    },
  },
  {
    id: 'disco_machines',
    title: 'Disco Machines',
    mainImage: {
      id: 'disco-1-nft',
      src: '/images/nfts/disco_1_NFT.png',
      alt: 'Disco-themed robot NFT',
    },
    subImages: [
      {
        id: 'disco-2-nft',
        src: '/images/nfts/disco_2_NFT.png',
        alt: 'Second disco robot NFT in the collection',
      },
      {
        id: 'disco-3-nft',
        src: '/images/nfts/disco_3_NFT.png',
        alt: 'Third disco robot NFT in the collection',
      },
    ],
    totalItems: 10,
    artist: {
      id: 'bekind2robots',
      name: 'BeKind2Robots',
      avatar: '/images/avatars/avatar_12.png',
    },
  },
];

export const DEVICE_CARD_LIMITS = {
  [DESKTOP_DEVICE]: 3,
  [TABLET_DEVICE]: 2,
  [MOBILE_DEVICE]: 1,
};

export const SECTION_ARIA_LABEL =
  'NFT Marketplace Trending Collections Section';
export const COLLECTIONS_ROW_ARIA_LABEL = 'Trending NFT Collections';
export const COLLECTION_NFT_ARIA_LABEL = 'NFT Collection';

export const ACCESSIBILITY_ENTER_KEY = 'Enter';

export const DEFAULT_TAB_INDEX = 0;
export const COLLECTION_MAIN_IMAGE_SIZE = 330;
export const COLLECTION_SUB_IMAGE_SIZE = 100;
export const ARTIST_AVATAR_SIZE = 24;
export const COLLECTION_NFTS_ROUTE = '/nfts/';
export const COLLECTIONS_ROUTE = '/collections/';
export const ARTISTS_ROUTE = '/artists/';

export const TRENDING_COLLECTIONS_HEADLINE = 'Trending Collections';
export const TRENDING_COLLECTIONS_SUB_HEADLINE =
  'Checkout our weekly updated trending collections.';
