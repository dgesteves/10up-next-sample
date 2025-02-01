import { renderHook } from '@testing-library/react';
import { useDeviceType } from './useDeviceType';
import { useWindowSize } from '@/hooks';
import {
  DESKTOP_DEVICE,
  MAX_MOBILE_WIDTH,
  MAX_TABLET_WIDTH,
  MOBILE_DEVICE,
  TABLET_DEVICE,
} from '@/constants';

jest.mock('../../hooks', () => ({
  useWindowSize: jest.fn(),
}));

describe('useDeviceType', () => {
  it('should return null if width is not defined', () => {
    (useWindowSize as jest.Mock).mockReturnValue({ width: undefined });
    const { result } = renderHook(() => useDeviceType());
    expect(result.current).toBeNull();
  });

  it('should return MOBILE_DEVICE if width is less than or equal to MAX_MOBILE_WIDTH', () => {
    (useWindowSize as jest.Mock).mockReturnValue({ width: MAX_MOBILE_WIDTH });
    const { result } = renderHook(() => useDeviceType());
    expect(result.current).toBe(MOBILE_DEVICE);
  });

  it('should return TABLET_DEVICE if width is greater than MAX_MOBILE_WIDTH and less than or equal to MAX_TABLET_WIDTH', () => {
    (useWindowSize as jest.Mock).mockReturnValue({ width: MAX_TABLET_WIDTH });
    const { result } = renderHook(() => useDeviceType());
    expect(result.current).toBe(TABLET_DEVICE);
  });

  it('should return DESKTOP_DEVICE if width is greater than MAX_TABLET_WIDTH', () => {
    (useWindowSize as jest.Mock).mockReturnValue({
      width: MAX_TABLET_WIDTH + 1,
    });
    const { result } = renderHook(() => useDeviceType());
    expect(result.current).toBe(DESKTOP_DEVICE);
  });
});
