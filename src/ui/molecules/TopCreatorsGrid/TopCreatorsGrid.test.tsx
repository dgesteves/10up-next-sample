import { render, screen, fireEvent } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { useRouter } from 'next/navigation';
import { TopCreatorsGrid } from './TopCreatorsGrid';
import { ARTISTS_ROUTE, TOP_CREATORS } from '@/constants';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('TopCreatorsGrid', () => {
  const mockPush = jest.fn();
  const device = 'desktop';

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders the correct number of creators based on device', () => {
    render(<TopCreatorsGrid device={device} />);
    const creators = screen.getAllByRole('article');
    expect(creators.length).toBe(TOP_CREATORS.length);
  });

  it('navigates to the correct artist page on click', async () => {
    const user = userEvent.setup();

    render(<TopCreatorsGrid device={device} />);
    const firstCreator = TOP_CREATORS[0];
    const firstCreatorElement = screen.getByLabelText(
      `View ${firstCreator.name}'s profile - Ranked ${firstCreator.position}`,
    );
    await user.click(firstCreatorElement);
    expect(mockPush).toHaveBeenCalledWith(`${ARTISTS_ROUTE}${firstCreator.id}`);
  });

  it('navigates to the correct artist page on keydown (Enter)', () => {
    render(<TopCreatorsGrid device={device} />);
    const firstCreator = TOP_CREATORS[0];
    const firstCreatorElement = screen.getByLabelText(
      `View ${firstCreator.name}'s profile - Ranked ${firstCreator.position}`,
    );
    fireEvent.keyDown(firstCreatorElement, { key: 'Enter' });
    expect(mockPush).toHaveBeenCalledWith(`${ARTISTS_ROUTE}${firstCreator.id}`);
  });

  it('navigates to the correct artist page on keydown (Space)', () => {
    render(<TopCreatorsGrid device={device} />);
    const firstCreator = TOP_CREATORS[0];
    const firstCreatorElement = screen.getByLabelText(
      `View ${firstCreator.name}'s profile - Ranked ${firstCreator.position}`,
    );
    fireEvent.keyDown(firstCreatorElement, { key: ' ' });
    expect(mockPush).toHaveBeenCalledWith(`${ARTISTS_ROUTE}${firstCreator.id}`);
  });
});
