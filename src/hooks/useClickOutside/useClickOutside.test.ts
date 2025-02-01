import { renderHook } from '@testing-library/react';
import { useClickOutside } from './useClickOutside';

describe('useClickOutside', () => {
  it('should call handler when clicking outside the element', () => {
    const handler = jest.fn();
    const ref = { current: document.createElement('div') };
    document.body.appendChild(ref.current);

    renderHook(() => useClickOutside(ref, handler));

    const event = new MouseEvent('mousedown', { bubbles: true });
    document.body.dispatchEvent(event);

    expect(handler).toHaveBeenCalled();
  });

  it('should not call handler when clicking inside the element', () => {
    const handler = jest.fn();
    const ref = { current: document.createElement('div') };
    document.body.appendChild(ref.current);

    renderHook(() => useClickOutside(ref, handler));

    const event = new MouseEvent('mousedown', { bubbles: true });
    ref.current.dispatchEvent(event);

    expect(handler).not.toHaveBeenCalled();
  });

  it('should not call handler when clicking inside an excluded element', () => {
    const handler = jest.fn();
    const ref = { current: document.createElement('div') };
    const excludeRef = { current: document.createElement('div') };
    document.body.appendChild(ref.current);
    document.body.appendChild(excludeRef.current);

    renderHook(() => useClickOutside(ref, handler, [excludeRef]));

    const event = new MouseEvent('mousedown', { bubbles: true });
    excludeRef.current.dispatchEvent(event);

    expect(handler).not.toHaveBeenCalled();
  });

  it('should call handler when clicking outside the element and excluded elements', () => {
    const handler = jest.fn();
    const ref = { current: document.createElement('div') };
    const excludeRef = { current: document.createElement('div') };
    document.body.appendChild(ref.current);
    document.body.appendChild(excludeRef.current);

    renderHook(() => useClickOutside(ref, handler, [excludeRef]));

    const event = new MouseEvent('mousedown', { bubbles: true });
    document.body.dispatchEvent(event);

    expect(handler).toHaveBeenCalled();
  });

  it('should clean up event listeners on unmount', () => {
    const handler = jest.fn();
    const ref = { current: document.createElement('div') };
    document.body.appendChild(ref.current);

    const { unmount } = renderHook(() => useClickOutside(ref, handler));

    unmount();

    const event = new MouseEvent('mousedown', { bubbles: true });
    document.body.dispatchEvent(event);

    expect(handler).not.toHaveBeenCalled();
  });
});
