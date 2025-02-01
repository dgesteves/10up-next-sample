import { memo, SVGProps } from 'react';
import { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from '@/constants';

type CopyIconProps = {
  size?: number;
  color?: string;
  title?: string;
} & SVGProps<SVGSVGElement>;

export const CopyIcon = memo(function CopyIcon({
  size = DEFAULT_ICON_SIZE,
  color = DEFAULT_ICON_COLOR,
  title,
  ...props
}: CopyIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      role={title ? 'img' : 'presentation'}
      aria-hidden={!title}
      aria-label={title}
      {...props}
    >
      {title && <title>{title}</title>}
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 5C10 4.44772 10.4477 4 11 4H27C27.5523 4 28 4.44772 28 5V21C28 21.5523 27.5523 22 27 22H21C20.4477 22 20 21.5523 20 21C20 20.4477 20.4477 20 21 20H26V6H12V11C12 11.5523 11.5523 12 11 12C10.4477 12 10 11.5523 10 11V5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 11C4 10.4477 4.44772 10 5 10H21C21.5523 10 22 10.4477 22 11V27C22 27.5523 21.5523 28 21 28H5C4.44772 28 4 27.5523 4 27V11ZM6 12V26H20V12H6Z"
        fill={color}
      />
    </svg>
  );
});
