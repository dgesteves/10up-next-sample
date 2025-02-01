import { render, screen, fireEvent } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { CollectionSubImages } from './CollectionSubImages';
import { Collection } from '@/types';
import {
  COLLECTION_NFTS_ROUTE,
  COLLECTIONS_ROUTE,
  DEFAULT_TAB_INDEX,
  COLLECTION_SUB_IMAGE_SIZE,
} from '@/constants';

const mockCollection: Collection = {
  id: '1',
  title: 'Test Collection',
  mainImage: { id: 'main1', src: '/images/main.png', alt: 'Main Image' },
  artist: { id: 'artist1', name: 'Test Artist', avatar: '/images/artist.png' },
  subImages: [
    { id: 'sub1', src: '/images/sub1.png', alt: 'Sub Image 1' },
    { id: 'sub2', src: '/images/sub2.png', alt: 'Sub Image 2' },
  ],
  totalItems: 10,
};

const mockHandleNavigation = jest.fn();

describe('CollectionSubImages', () => {
  it('renders sub images correctly', () => {
    render(
      <CollectionSubImages
        collection={mockCollection}
        handleNavigation={mockHandleNavigation}
      />,
    );

    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(mockCollection.subImages.length);

    images.forEach((image, index) => {
      const src = image.getAttribute('src');
      if (src) {
        const decodedSrc = decodeURIComponent(src);
        expect(decodedSrc).toContain(mockCollection.subImages[index].src);
      }

      expect(image).toHaveAttribute('alt', mockCollection.subImages[index].alt);
      expect(image).toHaveAttribute('tabIndex', DEFAULT_TAB_INDEX.toString());
      expect(image).toHaveAttribute(
        'width',
        COLLECTION_SUB_IMAGE_SIZE.toString(),
      );
      expect(image).toHaveAttribute(
        'height',
        COLLECTION_SUB_IMAGE_SIZE.toString(),
      );
    });
  });

  it('handles navigation on image click', async () => {
    const user = userEvent.setup();

    render(
      <CollectionSubImages
        collection={mockCollection}
        handleNavigation={mockHandleNavigation}
      />,
    );

    const image = screen.getByAltText('Sub Image 1');
    await user.click(image);

    expect(mockHandleNavigation).toHaveBeenCalledWith(
      expect.any(Object),
      `${COLLECTION_NFTS_ROUTE}sub1`,
    );
  });

  it('handles navigation on image key down', () => {
    render(
      <CollectionSubImages
        collection={mockCollection}
        handleNavigation={mockHandleNavigation}
      />,
    );

    const image = screen.getByAltText('Sub Image 1');
    fireEvent.keyDown(image, { key: 'Enter', code: 'Enter' });

    expect(mockHandleNavigation).toHaveBeenCalledWith(
      expect.any(Object),
      `${COLLECTION_NFTS_ROUTE}sub1`,
    );
  });

  it('renders link to view all items', () => {
    render(
      <CollectionSubImages
        collection={mockCollection}
        handleNavigation={mockHandleNavigation}
      />,
    );

    const link = screen.getByRole('link', {
      name: `View all ${mockCollection.totalItems} items in ${mockCollection.title}`,
    });
    expect(link).toHaveAttribute(
      'href',
      `${COLLECTIONS_ROUTE}${mockCollection.id}`,
    );
    expect(link).toHaveTextContent(`${mockCollection.totalItems}+`);
  });
});
