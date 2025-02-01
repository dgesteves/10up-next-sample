import { render, screen } from '@testing-library/react';
import { Hero } from './Hero';
import {
  DESKTOP_DEVICE,
  HERO_SECTION_ARIA_LABEL,
  MOBILE_DEVICE,
  TABLET_DEVICE,
} from '@/constants';
import { useDeviceType } from '@/hooks';
import { useRouter } from 'next/navigation';

jest.mock('../../hooks', () => ({
  useDeviceType: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('Hero', () => {
  const mockUseDeviceType = useDeviceType as jest.Mock;
  const mockPush = jest.fn();

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders HeroInfo and HeroHighlightedNFTCard for desktop devices', () => {
    mockUseDeviceType.mockReturnValue(DESKTOP_DEVICE);
    render(<Hero />);
    expect(screen.getByLabelText(HERO_SECTION_ARIA_LABEL)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Get Started with NFT Marketplace/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /Space Walking NFT - Click to view details/i,
      }),
    ).toBeInTheDocument();
  });

  it('renders HeroInfo and HeroHighlightedNFTCard for tablet devices', () => {
    mockUseDeviceType.mockReturnValue(TABLET_DEVICE);
    render(<Hero />);
    expect(screen.getByLabelText(HERO_SECTION_ARIA_LABEL)).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /Get Started with NFT Marketplace/i,
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /Space Walking NFT - Click to view details/i,
      }),
    ).toBeInTheDocument();
  });

  it('renders HeroInfo and HeroHighlightedNFTCard for mobile devices', () => {
    mockUseDeviceType.mockReturnValue(MOBILE_DEVICE);
    render(<Hero />);
    expect(screen.getByLabelText(HERO_SECTION_ARIA_LABEL)).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /Get Started with NFT Marketplace/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', {
        name: /Space Walking NFT - Click to view details/i,
      }),
    ).toBeInTheDocument();
  });

  it('does not render anything if device type is not available', () => {
    mockUseDeviceType.mockReturnValue(null);
    const { container } = render(<Hero />);
    expect(container.firstChild).toBeNull();
  });
});
