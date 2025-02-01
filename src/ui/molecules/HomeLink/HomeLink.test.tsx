import { render, screen } from '@testing-library/react';
import { HomeLink } from './HomeLink';
import {
  APP_LOGO_ICON_DESKTOP_SIZE,
  APP_LOGO_ICON_MOBILE_SIZE,
  APP_LOGO_ICON_TEST_ID,
  APP_TEXT_LOGO_DESKTOP_HEIGHT,
  APP_TEXT_LOGO_DESKTOP_WIDTH,
  APP_TEXT_LOGO_MOBILE_HEIGHT,
  APP_TEXT_LOGO_MOBILE_WIDTH,
  APP_TEXT_LOGO_TEST_ID,
  HOME_ARIA_LABEL,
  HOME_ROUTE,
} from '@/constants';

describe('HomeLink', () => {
  it('renders correctly for desktop', () => {
    render(<HomeLink isDesktop={true} />);

    const linkElement = screen.getByRole('link', { name: HOME_ARIA_LABEL });
    expect(linkElement).toHaveAttribute('href', HOME_ROUTE);

    const appLogoIcon = screen.getByTestId(APP_LOGO_ICON_TEST_ID);
    expect(appLogoIcon).toHaveAttribute(
      'width',
      `${APP_LOGO_ICON_DESKTOP_SIZE}`,
    );
    expect(appLogoIcon).toHaveAttribute(
      'height',
      `${APP_LOGO_ICON_DESKTOP_SIZE}`,
    );

    const appTextLogoIcon = screen.getByTestId(APP_TEXT_LOGO_TEST_ID);
    expect(appTextLogoIcon).toHaveAttribute(
      'width',
      `${APP_TEXT_LOGO_DESKTOP_WIDTH}`,
    );
    expect(appTextLogoIcon).toHaveAttribute(
      'height',
      `${APP_TEXT_LOGO_DESKTOP_HEIGHT}`,
    );
  });

  it('renders correctly for mobile', () => {
    render(<HomeLink isDesktop={false} />);

    const linkElement = screen.getByRole('link', { name: HOME_ARIA_LABEL });
    expect(linkElement).toHaveAttribute('href', HOME_ROUTE);

    const appLogoIcon = screen.getByTestId(APP_LOGO_ICON_TEST_ID);
    expect(appLogoIcon).toHaveAttribute(
      'width',
      `${APP_LOGO_ICON_MOBILE_SIZE}`,
    );
    expect(appLogoIcon).toHaveAttribute(
      'height',
      `${APP_LOGO_ICON_MOBILE_SIZE}`,
    );

    const appTextLogoIcon = screen.getByTestId(APP_TEXT_LOGO_TEST_ID);
    expect(appTextLogoIcon).toHaveAttribute(
      'width',
      `${APP_TEXT_LOGO_MOBILE_WIDTH}`,
    );
    expect(appTextLogoIcon).toHaveAttribute(
      'height',
      `${APP_TEXT_LOGO_MOBILE_HEIGHT}`,
    );
  });
});
