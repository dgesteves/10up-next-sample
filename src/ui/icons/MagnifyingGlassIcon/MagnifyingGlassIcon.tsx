import { memo, SVGProps } from 'react';
import { DEFAULT_ICON_COLOR, DEFAULT_ICON_SIZE } from '@/constants';

type MagnifyingGlassIconProps = {
  size?: number;
  color?: string;
  title?: string;
} & SVGProps<SVGSVGElement>;

export const MagnifyingGlassIcon = memo(function MagnifyingGlassIcon({
  size = DEFAULT_ICON_SIZE,
  color = DEFAULT_ICON_COLOR,
  title,
  ...props
}: MagnifyingGlassIconProps) {
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
        d="M14.5 5C9.25329 5 5 9.25329 5 14.5C5 19.7467 9.25329 24 14.5 24C19.7467 24 24 19.7467 24 14.5C24 9.25329 19.7467 5 14.5 5ZM3 14.5C3 8.14873 8.14873 3 14.5 3C20.8513 3 26 8.14873 26 14.5C26 20.8513 20.8513 26 14.5 26C8.14873 26 3 20.8513 3 14.5Z"
        fill={color}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.2177 21.2177C21.6082 20.8272 22.2414 20.8272 22.6319 21.2177L28.7069 27.2927C29.0974 27.6832 29.0974 28.3164 28.7069 28.7069C28.3164 29.0974 27.6832 29.0974 27.2927 28.7069L21.2177 22.6319C20.8272 22.2414 20.8272 21.6082 21.2177 21.2177Z"
        fill={color}
      />
    </svg>
  );
});
