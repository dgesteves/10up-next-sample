import { render, screen } from '@testing-library/react';
import { Trending } from './Trending';
import { useDeviceType } from '@/hooks';
import {
  COLLECTIONS,
  SECTION_ARIA_LABEL,
  COLLECTIONS_ROW_ARIA_LABEL,
} from '@/constants';

jest.mock('../../hooks', () => ({
  useDeviceType: jest.fn(),
}));
jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Trending Component', () => {
  it('should render null if device type is not available', () => {
    (useDeviceType as jest.Mock).mockReturnValue(null);
    const { container } = render(<Trending />);
    expect(container.firstChild).toBeNull();
  });

  it('should render the section with the correct aria-label', () => {
    (useDeviceType as jest.Mock).mockReturnValue('desktop');
    render(<Trending />);
    expect(screen.getByLabelText(SECTION_ARIA_LABEL)).toBeInTheDocument();
  });

  it('should render the correct number of collection cards based on device type', () => {
    (useDeviceType as jest.Mock).mockReturnValue('desktop');
    render(<Trending />);
    const collectionCards = screen.getAllByRole('article'); // Assuming CollectionCard uses <article> tag
    expect(collectionCards.length).toBe(COLLECTIONS.length); // Adjust based on DEVICE_CARD_LIMITS if needed
  });

  it('should render the collection cards row with the correct aria-label', () => {
    (useDeviceType as jest.Mock).mockReturnValue('desktop');
    render(<Trending />);
    expect(
      screen.getByLabelText(COLLECTIONS_ROW_ARIA_LABEL),
    ).toBeInTheDocument();
  });
});
