import { render, screen } from '@testing-library/react';
import { TrendingHeader } from './TrendingHeader';
import {
  TRENDING_COLLECTIONS_HEADLINE,
  TRENDING_COLLECTIONS_SUB_HEADLINE,
} from '@/constants';

describe('TrendingHeader', () => {
  test('renders the headline', () => {
    render(<TrendingHeader />);
    const headlineElement = screen.getByText(TRENDING_COLLECTIONS_HEADLINE);
    expect(headlineElement).toBeInTheDocument();
  });

  test('renders the sub-headline', () => {
    render(<TrendingHeader />);
    const subHeadlineElement = screen.getByText(
      TRENDING_COLLECTIONS_SUB_HEADLINE,
    );
    expect(subHeadlineElement).toBeInTheDocument();
  });

  test('applies the correct styles', () => {
    render(<TrendingHeader />);
    const headerElement = screen.getByRole('banner');
    expect(headerElement).toHaveClass('sectionHeadlineContainer');
    const headlineElement = screen.getByRole('heading', { level: 2 });
    expect(headlineElement).toHaveClass('sectionHeadline');
    const subHeadlineElement = screen.getByText(
      TRENDING_COLLECTIONS_SUB_HEADLINE,
    );
    expect(subHeadlineElement).toHaveClass('sectionSubHeadline');
  });
});
