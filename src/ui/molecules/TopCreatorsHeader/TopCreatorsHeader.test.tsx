import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useRouter } from 'next/navigation';
import { TopCreatorsHeader } from './TopCreatorsHeader';
import {
  RANKINGS_ROUTE,
  TOP_CREATORS_BUTTON_ARIA_LABEL,
  TOP_CREATORS_BUTTON_TEXT,
  TOP_CREATORS_HEADLINE,
  TOP_CREATORS_SUB_HEADLINE,
} from '@/constants';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('TopCreatorsHeader', () => {
  const mockPush = jest.fn();
  const mockUseRouter = useRouter as jest.Mock;

  beforeEach(() => {
    mockUseRouter.mockReturnValue({ push: mockPush });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the component', () => {
    render(<TopCreatorsHeader device="desktop" />);
    expect(screen.getByText(TOP_CREATORS_HEADLINE)).toBeInTheDocument();
    expect(screen.getByText(TOP_CREATORS_SUB_HEADLINE)).toBeInTheDocument();
  });

  it('renders the button with correct text', () => {
    render(<TopCreatorsHeader device="desktop" />);
    expect(screen.getByText(TOP_CREATORS_BUTTON_TEXT)).toBeInTheDocument();
  });

  it('calls router.push when button is clicked', async () => {
    const user = userEvent.setup();

    render(<TopCreatorsHeader device="desktop" />);
    const button = screen.getByRole('button', {
      name: TOP_CREATORS_BUTTON_ARIA_LABEL,
    });

    await user.click(button);
    expect(mockPush).toHaveBeenCalledWith(RANKINGS_ROUTE);
  });

  it('renders fullWidth button on mobile devices', () => {
    render(<TopCreatorsHeader device="mobile" />);
    const button = screen.getByRole('button', {
      name: TOP_CREATORS_BUTTON_ARIA_LABEL,
    });
    expect(button).toHaveClass('fullWidth');
  });
});
