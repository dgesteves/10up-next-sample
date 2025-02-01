import { render, screen } from '@testing-library/react';
import { AppTextLogoIcon } from './AppTextLogoIcon';
import {
  DEFAULT_ICON_COLOR,
  DEFAULT_TEXT_ICON_WIDTH,
  DEFAULT_TEXT_ICON_HEIGHT,
} from '@/constants';

describe('AppTextLogoIcon', () => {
  test('renders without crashing', () => {
    render(<AppTextLogoIcon />);
    const svgElement = screen.getByRole('presentation', { hidden: true });
    expect(svgElement).toBeInTheDocument();
  });

  test('renders with default color', () => {
    render(<AppTextLogoIcon />);
    const pathElement = screen
      .getByRole('presentation', { hidden: true })
      .querySelector('path');
    expect(pathElement).toHaveAttribute('fill', DEFAULT_ICON_COLOR);
  });

  test('renders with provided color', () => {
    const customColor = '#ff0000';
    render(<AppTextLogoIcon color={customColor} />);
    const pathElement = screen
      .getByRole('presentation', { hidden: true })
      .querySelector('path');
    expect(pathElement).toHaveAttribute('fill', customColor);
  });

  test('renders with default width and height', () => {
    render(<AppTextLogoIcon />);
    const svgElement = screen.getByRole('presentation', { hidden: true });
    expect(svgElement).toHaveAttribute(
      'width',
      DEFAULT_TEXT_ICON_WIDTH.toString(),
    );
    expect(svgElement).toHaveAttribute(
      'height',
      DEFAULT_TEXT_ICON_HEIGHT.toString(),
    );
  });

  test('renders with provided width and height', () => {
    const customWidth = 150;
    const customHeight = 16;
    render(<AppTextLogoIcon width={customWidth} height={customHeight} />);
    const svgElement = screen.getByRole('presentation', { hidden: true });
    expect(svgElement).toHaveAttribute('width', customWidth.toString());
    expect(svgElement).toHaveAttribute('height', customHeight.toString());
  });

  test('renders with title', () => {
    const title = 'App Logo';
    render(<AppTextLogoIcon title={title} />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('aria-label', title);
  });

  test('is accessible without title', () => {
    render(<AppTextLogoIcon />);
    expect(screen.getByRole('presentation', { hidden: true })).toHaveAttribute(
      'aria-hidden',
      'true',
    );
  });
});
