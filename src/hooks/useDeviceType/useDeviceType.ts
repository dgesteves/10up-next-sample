import { useMemo } from 'react';
import { useWindowSize } from '@/hooks';
import {
  DESKTOP_DEVICE,
  MAX_MOBILE_WIDTH,
  MAX_TABLET_WIDTH,
  MOBILE_DEVICE,
  TABLET_DEVICE,
} from '@/constants';

export function useDeviceType() {
  const { width } = useWindowSize();

  return useMemo(() => {
    if (!width) return null;

    return width > MAX_TABLET_WIDTH
      ? DESKTOP_DEVICE
      : width > MAX_MOBILE_WIDTH && width <= MAX_TABLET_WIDTH
        ? TABLET_DEVICE
        : MOBILE_DEVICE;
  }, [width]);
}
