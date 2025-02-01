import { render, screen, fireEvent } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { CollectionCard } from './CollectionCard';
import { Collection } from '@/types';
import { useRouter } from 'next/navigation';
import { COLLECTION_NFT_ARIA_LABEL } from '@/constants';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const mockPush = jest.fn();
(useRouter as jest.Mock).mockReturnValue({ push: mockPush });

const mockCollection: Collection = {
  id: '1',
  title: 'Test Collection',
  mainImage: {
    src: '/test-image.jpg',
    alt: 'Test Image',
    id: '1',
  },
  subImages: [],
  totalItems: 1,
  artist: {
    id: 'artist-1',
    name: 'Test Artist',
    avatar: '/test-artist-avatar.jpg',
  },
};

describe('CollectionCard', () => {
  it('renders the collection title and main image', () => {
    render(<CollectionCard collection={mockCollection} />);

    expect(screen.getByAltText('Test Image')).toBeInTheDocument();
    expect(
      screen.getByLabelText(`${COLLECTION_NFT_ARIA_LABEL} Test Collection`),
    ).toBeInTheDocument();
  });

  it('navigates to the correct path on image click', async () => {
    const user = userEvent.setup();

    render(<CollectionCard collection={mockCollection} />);

    const image = screen.getByAltText('Test Image');
    await user.click(image);

    expect(mockPush).toHaveBeenCalledWith('/nfts/1');
  });

  it('navigates to the correct path on Enter key press', () => {
    render(<CollectionCard collection={mockCollection} />);

    const image = screen.getByAltText('Test Image');
    fireEvent.keyDown(image, { key: 'Enter' });

    expect(mockPush).toHaveBeenCalledWith('/nfts/1');
  });
});
