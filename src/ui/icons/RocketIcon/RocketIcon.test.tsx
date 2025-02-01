import { render, screen } from '@testing-library/react';
import { RocketIcon } from './RocketIcon';
import { DEFAULT_ICON_SIZE } from '@/constants';

describe('RocketIcon', () => {
  it('renders with default props', () => {
    render(<RocketIcon />);
    const svgElement = screen.getByRole('presentation', { hidden: true });
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('width', DEFAULT_ICON_SIZE.toString());
    expect(svgElement).toHaveAttribute('height', DEFAULT_ICON_SIZE.toString());
    expect(svgElement).toHaveAttribute('fill', 'none');
  });

  it('renders with custom size and color', () => {
    const customSize = 32;
    const customColor = 'red';
    render(<RocketIcon size={customSize} color={customColor} />);
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
    const title = 'Rocket Icon';
    render(<RocketIcon title={title} />);
    const svgElement = screen.getByRole('img');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('aria-label', title);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  it('does not render title when not provided', () => {
    render(<RocketIcon />);
    const svgElement = screen.getByRole('presentation', { hidden: true });
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).not.toHaveAttribute('aria-label');
  });
});
