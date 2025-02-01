import { render, screen } from '@testing-library/react';
import { PlusIcon } from './PlusIcon';
import { DEFAULT_ICON_SIZE } from '@/constants';

describe('PlusIcon', () => {
  it('renders with default props', () => {
    render(<PlusIcon />);
    const svgElement = screen.getByRole('presentation', { hidden: true });
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', DEFAULT_ICON_SIZE.toString());
    expect(svgElement).toHaveAttribute('height', DEFAULT_ICON_SIZE.toString());
    expect(svgElement).toHaveAttribute('fill', 'none');
  });

  it('renders with custom size and color', () => {
    const customSize = 32;
    const customColor = 'red';
    render(<PlusIcon size={customSize} color={customColor} />);
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
    const title = 'Plus Icon';
    render(<PlusIcon title={title} />);
    const svgElement = screen.getByRole('img');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('aria-label', title);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  it('does not render title when not provided', () => {
    render(<PlusIcon />);
    const svgElement = screen.getByRole('presentation', { hidden: true });
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).not.toHaveAttribute('aria-label');
  });
});
