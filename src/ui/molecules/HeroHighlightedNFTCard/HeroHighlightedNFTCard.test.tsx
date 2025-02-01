import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/navigation';
import { HeroHighlightedNFTCard } from './HeroHighlightedNFTCard';
import {
  ARTICLE_ARIA_LABEL,
  ENTER_KEY,
  NFT_HIGHLIGHTED_ARTIST,
  NFT_HIGHLIGHTED_ARTIST_IMAGE_ALT,
  NFT_HIGHLIGHTED_ARTIST_LINK_ARIA_LABEL,
  NFT_HIGHLIGHTED_ARTIST_ROUTE,
  NFT_HIGHLIGHTED_IMAGE_ALT,
  NFT_HIGHLIGHTED_NAME,
  NFT_SPACE_WALKING_ROUTE,
  SPACE_KEY,
} from '@/constants';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('HeroHighlightedNFTCard', () => {
  const mockPush = jest.fn();
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the highlighted NFT card with correct information', () => {
    render(<HeroHighlightedNFTCard device="desktop" />);
    expect(
      screen.getByRole('button', { name: ARTICLE_ARIA_LABEL }),
    ).toBeInTheDocument();
    expect(screen.getByAltText(NFT_HIGHLIGHTED_IMAGE_ALT)).toBeInTheDocument();
    expect(screen.getByText(NFT_HIGHLIGHTED_NAME)).toBeInTheDocument();
    expect(
      screen.getByAltText(NFT_HIGHLIGHTED_ARTIST_IMAGE_ALT),
    ).toBeInTheDocument();
    expect(screen.getByText(NFT_HIGHLIGHTED_ARTIST)).toBeInTheDocument();
  });

  it('navigates to the NFT route when the card is clicked', async () => {
    const user = userEvent.setup();
    render(<HeroHighlightedNFTCard device="desktop" />);
    const article = screen.getByRole('button', { name: ARTICLE_ARIA_LABEL });
    await user.click(article);
    expect(mockPush).toHaveBeenCalledWith(NFT_SPACE_WALKING_ROUTE);
  });

  it('navigates to the NFT route when Enter or Space key is pressed', () => {
    render(<HeroHighlightedNFTCard device="desktop" />);
    const article = screen.getByRole('button', { name: ARTICLE_ARIA_LABEL });
    fireEvent.keyDown(article, { key: ENTER_KEY });
    expect(mockPush).toHaveBeenCalledWith(NFT_SPACE_WALKING_ROUTE);
    fireEvent.keyDown(article, { key: SPACE_KEY });
    expect(mockPush).toHaveBeenCalledWith(NFT_SPACE_WALKING_ROUTE);
  });

  it('does not navigate to the artist route when artist link is clicked', async () => {
    const user = userEvent.setup();
    render(<HeroHighlightedNFTCard device="desktop" />);
    const artistLink = screen.getByRole('link', {
      name: NFT_HIGHLIGHTED_ARTIST_LINK_ARIA_LABEL,
    });
    await user.click(artistLink);
    expect(mockPush).not.toHaveBeenCalledWith(NFT_HIGHLIGHTED_ARTIST_ROUTE);
  });
});
