import { memo, SVGProps } from 'react';
import { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from '@/constants';

type ArrowRightIconProps = {
  size?: number;
  color?: string;
  title?: string;
} & SVGProps<SVGSVGElement>;

export const ArrowRightIcon = memo(function ArrowRightIcon({
  size = DEFAULT_ICON_SIZE,
  color = DEFAULT_ICON_COLOR,
  title,
  ...props
}: ArrowRightIconProps) {
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
        d="M17.2929 6.29289C17.6834 5.90237 18.3166 5.90237 18.7071 6.29289L27.7071 15.2929C28.0976 15.6834 28.0976 16.3166 27.7071 16.7071L18.7071 25.7071C18.3166 26.0976 17.6834 26.0976 17.2929 25.7071C16.9024 25.3166 16.9024 24.6834 17.2929 24.2929L25.5858 16L17.2929 7.70711C16.9024 7.31658 16.9024 6.68342 17.2929 6.29289Z"
        fill={color}
      />
    </svg>
  );
});
