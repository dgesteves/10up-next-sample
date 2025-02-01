import { memo, SVGProps } from 'react';
import { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from '@/constants';

type PlanetIconProps = {
  size?: number;
  color?: string;
  title?: string;
} & SVGProps<SVGSVGElement>;

export const PlanetIcon = memo(function PlanetIcon({
  size = DEFAULT_ICON_SIZE,
  color = DEFAULT_ICON_COLOR,
  title,
  ...props
}: PlanetIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      role={title ? 'img' : 'presentation'}
      aria-hidden={!title}
      aria-label={title}
      {...props}
    >
      {title && <title>{title}</title>}
      <path
        d="M50 84.375C68.9848 84.375 84.375 68.9848 84.375 50C84.375 31.0152 68.9848 15.625 50 15.625C31.0152 15.625 15.625 31.0152 15.625 50C15.625 68.9848 31.0152 84.375 50 84.375Z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M71.9529 23.5557C82.7732 20.5869 90.8982 20.8604 93.3201 25.001C97.617 32.4619 81.7186 49.7276 57.8123 63.5166C33.9061 77.3057 11.0154 82.4619 6.6795 75.001C4.29669 70.8604 8.12481 63.6729 16.0936 55.7823"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});
