import { memo, SVGProps } from 'react';
import { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from '@/constants';

type MagicWandIconProps = {
  size?: number;
  color?: string;
  title?: string;
} & SVGProps<SVGSVGElement>;

export const MagicWandIcon = memo(function MagicWandIcon({
  size = DEFAULT_ICON_SIZE,
  color = DEFAULT_ICON_COLOR,
  title,
  ...props
}: MagicWandIconProps) {
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
        d="M84.375 50V68.75"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M75 59.375H93.75"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.8125 15.625V31.25"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 23.4375H40.625"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M65.625 71.875V84.375"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M59.375 78.125H71.875"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M72.8218 14.6996L14.7341 72.7874C13.5137 74.0078 13.5137 75.9864 14.7341 77.2068L22.8134 85.286C24.0338 86.5064 26.0124 86.5064 27.2328 85.286L85.3205 27.1983C86.5409 25.9779 86.5409 23.9993 85.3205 22.7789L77.2413 14.6996C76.0209 13.4793 74.0422 13.4793 72.8218 14.6996Z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M56.25 31.25L68.75 43.75"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});
