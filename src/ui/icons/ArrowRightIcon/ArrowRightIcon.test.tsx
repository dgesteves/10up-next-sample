import { render, screen } from '@testing-library/react';
import { ArrowRightIcon } from './ArrowRightIcon';
import { DEFAULT_ICON_SIZE } from '@/constants';

describe('ArrowRightIcon', () => {
  it('renders with default props', () => {
    render(<ArrowRightIcon />);
    const svgElement = screen.getByRole('presentation', { hidden: true });
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', DEFAULT_ICON_SIZE.toString());
    expect(svgElement).toHaveAttribute('height', DEFAULT_ICON_SIZE.toString());
    expect(svgElement).toHaveAttribute('fill', 'none');
  });

  it('renders with custom size and color', () => {
    const customSize = 32;
    const customColor = 'red';
    render(<ArrowRightIcon size={customSize} color={customColor} />);
    const svgElement = screen.getByRole('presentation', { hidden: true });
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', customSize.toString());
    expect(svgElement).toHaveAttribute('height', customSize.toString());
    const pathElements = svgElement.querySelectorAll('path');
    pathElements.forEach((path) => {
      expect(path).toHaveAttribute('fill', customColor);
    });
  });

  it('renders with title', () => {
    const title = 'Arrow Right Icon';
    render(<ArrowRightIcon title={title} />);
    const svgElement = screen.getByRole('img');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('aria-label', title);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  it('does not render title when not provided', () => {
    render(<ArrowRightIcon />);
    const svgElement = screen.getByRole('presentation', { hidden: true });
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).not.toHaveAttribute('aria-label');
  });
});
