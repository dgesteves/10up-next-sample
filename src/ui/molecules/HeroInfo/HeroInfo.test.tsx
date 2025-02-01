import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/navigation';
import { HeroInfo } from './HeroInfo';
import {
  CONNECT_WALLET_ROUTE,
  GET_STARTED_BUTTON_TEXT,
  HERO_GET_STARTED_BUTTON_ARIA_LABEL,
  HERO_HEADING_TEXT,
  HERO_INFO_ITEMS,
  HERO_SUB_HEADING_TEXT,
  MOBILE_DEVICE,
} from '@/constants';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('HeroInfo', () => {
  const mockPush = jest.fn();
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the hero heading and subheading', () => {
    render(<HeroInfo device="desktop" />);
    expect(screen.getByText(HERO_HEADING_TEXT)).toBeInTheDocument();
    expect(screen.getByText(HERO_SUB_HEADING_TEXT)).toBeInTheDocument();
  });

  it('renders the get started button with correct text and aria-label', () => {
    render(<HeroInfo device="desktop" />);
    const button = screen.getByRole('button', {
      name: HERO_GET_STARTED_BUTTON_ARIA_LABEL,
    });
    expect(button).toBeInTheDocument();
    expect(screen.getByText(GET_STARTED_BUTTON_TEXT)).toBeInTheDocument();
  });

  it('navigates to the connect wallet route when the button is clicked', async () => {
    const user = userEvent.setup();

    render(<HeroInfo device="desktop" />);
    const button = screen.getByRole('button', {
      name: HERO_GET_STARTED_BUTTON_ARIA_LABEL,
    });
    await user.click(button);
    expect(mockPush).toHaveBeenCalledWith(CONNECT_WALLET_ROUTE);
  });

  it('renders hero info items correctly', () => {
    render(<HeroInfo device="desktop" />);
    HERO_INFO_ITEMS.forEach(({ label, value }) => {
      expect(screen.getByText(label)).toBeInTheDocument();
      const valueElements = screen.getAllByText(value);
      expect(valueElements.length).toBeGreaterThan(0);
      valueElements.forEach((element) => {
        expect(element).toBeInTheDocument();
      });
    });
  });

  it('renders the button with full width on mobile devices', () => {
    render(<HeroInfo device={MOBILE_DEVICE} />);
    const button = screen.getByRole('button', {
      name: HERO_GET_STARTED_BUTTON_ARIA_LABEL,
    });
    expect(button).toHaveClass('fullWidth');
  });
});
