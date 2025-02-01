import { render, screen } from '@testing-library/react';
import { TopCreators } from './TopCreators';
import { useDeviceType } from '@/hooks';
import { TOP_CREATORS_SECTION_ARIA_LABEL } from '@/constants/topCreators';

jest.mock('../../hooks', () => ({
  useDeviceType: jest.fn(),
}));

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

describe('TopCreators', () => {
  it('renders null if device is not available', () => {
    (useDeviceType as jest.Mock).mockReturnValue(null);
    const { container } = render(<TopCreators />);
    expect(container.firstChild).toBeNull();
  });

  it('renders the section with the correct aria-label when device is available', () => {
    (useDeviceType as jest.Mock).mockReturnValue('desktop');
    render(<TopCreators />);
    const section = screen.getByLabelText(TOP_CREATORS_SECTION_ARIA_LABEL);
    expect(section).toBeInTheDocument();
  });

  it('renders TopCreatorsHeader and TopCreatorsGrid components when device is available', () => {
    (useDeviceType as jest.Mock).mockReturnValue('desktop');
    render(<TopCreators />);
    expect(screen.getByText('Top creators')).toBeInTheDocument();
    expect(screen.getByTestId('top-creators-grid')).toBeInTheDocument();
  });
});
