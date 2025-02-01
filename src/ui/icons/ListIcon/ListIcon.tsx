import { memo, SVGProps } from 'react';
import { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from '@/constants';

type ListIconProps = {
  size?: number;
  color?: string;
  title?: string;
} & SVGProps<SVGSVGElement>;

export const ListIcon = memo(function ListIcon({
  size = DEFAULT_ICON_SIZE,
  color = DEFAULT_ICON_COLOR,
  title,
  ...props
}: ListIconProps) {
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
        d="M4 16C4 15.4477 4.44772 15 5 15H27C27.5523 15 28 15.4477 28 16C28 16.5523 27.5523 17 27 17H5C4.44772 17 4 16.5523 4 16Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 8C4 7.44772 4.44772 7 5 7H20C20.5523 7 21 7.44772 21 8C21 8.55228 20.5523 9 20 9H5C4.44772 9 4 8.55228 4 8Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 24C4 23.4477 4.44772 23 5 23H20C20.5523 23 21 23.4477 21 24C21 24.5523 20.5523 25 20 25H5C4.44772 25 4 24.5523 4 24Z"
        fill={color}
      />
    </svg>
  );
});
