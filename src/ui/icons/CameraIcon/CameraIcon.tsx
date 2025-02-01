import { memo, SVGProps } from 'react';
import { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from '@/constants';

type CameraIconProps = {
  size?: number;
  color?: string;
  title?: string;
} & SVGProps<SVGSVGElement>;

export const CameraIcon = memo(function CameraIcon({
  size = DEFAULT_ICON_SIZE,
  color = DEFAULT_ICON_COLOR,
  title,
  ...props
}: CameraIconProps) {
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
        d="M81.25 81.25H18.75C17.0924 81.25 15.5027 80.5915 14.3306 79.4194C13.1585 78.2473 12.5 76.6576 12.5 75V31.25C12.5 29.5924 13.1585 28.0027 14.3306 26.8306C15.5027 25.6585 17.0924 25 18.75 25H31.25L37.5 15.625H62.5L68.75 25H81.25C82.9076 25 84.4973 25.6585 85.6694 26.8306C86.8415 28.0027 87.5 29.5924 87.5 31.25V75C87.5 76.6576 86.8415 78.2473 85.6694 79.4194C84.4973 80.5915 82.9076 81.25 81.25 81.25Z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 65.625C57.7665 65.625 64.0625 59.329 64.0625 51.5625C64.0625 43.796 57.7665 37.5 50 37.5C42.2335 37.5 35.9375 43.796 35.9375 51.5625C35.9375 59.329 42.2335 65.625 50 65.625Z"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
});
