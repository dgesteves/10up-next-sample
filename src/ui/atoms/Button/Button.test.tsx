import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { Button } from './Button';

describe('Button component', () => {
  it('renders with default props', () => {
    render(<Button>Click me</Button>);
    const buttonElement = screen.getByText('Click me');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveClass('button');
  });

  it('applies the correct variant class', () => {
    render(<Button variant="primary">Primary Button</Button>);
    const buttonElement = screen.getByText('Primary Button');
    expect(buttonElement).toHaveClass('primary');
  });

  it('applies the correct size class', () => {
    render(<Button size="lg">Large Button</Button>);
    const buttonElement = screen.getByText('Large Button');
    expect(buttonElement).toHaveClass('lg');
  });

  it('handles click events', async () => {
    const handleClick = jest.fn();
    const user = userEvent.setup();

    render(<Button onClick={handleClick}>Click me</Button>);
    const buttonElement = screen.getByText('Click me');

    await user.click(buttonElement);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('forwards additional props to the button element', () => {
    render(<Button data-testid="custom-button">Click me</Button>);
    const buttonElement = screen.getByTestId('custom-button');
    expect(buttonElement).toBeInTheDocument();
  });

  it('sets aria-label based on children when aria-label is not provided', () => {
    render(<Button>Accessible Button</Button>);
    const buttonElement = screen.getByRole('button', {
      name: 'Accessible Button',
    });
    expect(buttonElement).toHaveAttribute('aria-label', 'Accessible Button');
  });

  it('does not set aria-label when children is not a string and aria-label is not provided', () => {
    render(
      <Button>
        <span>Accessible Button</span>
      </Button>,
    );
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).not.toHaveAttribute('aria-label');
  });
});
