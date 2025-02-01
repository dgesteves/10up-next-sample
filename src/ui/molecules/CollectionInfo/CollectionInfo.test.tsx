import { render, screen } from '@testing-library/react';
import { CollectionInfo } from './CollectionInfo';
import { Collection } from '@/types';

const mockCollection: Collection = {
  id: '1',
  title: 'Sample Collection',
  artist: {
    id: 'artist1',
    name: 'Sample Artist',
    avatar: '/path/to/avatar.jpg',
  },
  mainImage: { id: 'main1', src: '/path/to/mainImage.jpg', alt: 'Main Image' },
  subImages: [
    { id: 'sub1', src: '/path/to/subImage1.jpg', alt: 'Sub Image 1' },
    { id: 'sub2', src: '/path/to/subImage2.jpg', alt: 'Sub Image 2' },
  ],
  totalItems: 10,
};

describe('CollectionInfo', () => {
  it('renders collection title with correct link', () => {
    render(<CollectionInfo collection={mockCollection} />);
    const titleLink = screen.getByLabelText(
      `View ${mockCollection.title} collection`,
    );
    expect(titleLink).toBeInTheDocument();
    expect(titleLink).toHaveAttribute(
      'href',
      `/collections/${mockCollection.id}`,
    );
  });

  it('renders artist name with correct link and avatar', () => {
    render(<CollectionInfo collection={mockCollection} />);
    const artistLink = screen.getByLabelText(
      `View artist ${mockCollection.artist.name}'s profile`,
    );
    expect(artistLink).toBeInTheDocument();
    expect(artistLink).toHaveAttribute(
      'href',
      `/artists/${mockCollection.artist.id}`,
    );

    const artistAvatar = screen.getByAltText(
      `Avatar of ${mockCollection.artist.name}`,
    );
    expect(artistAvatar).toBeInTheDocument();
    const src = artistAvatar.getAttribute('src');
    if (src) {
      const decodedSrc = decodeURIComponent(src);
      expect(decodedSrc).toContain(mockCollection.artist.avatar);
    }
  });
});
