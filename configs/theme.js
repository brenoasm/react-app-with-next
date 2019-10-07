import { css } from 'styled-components';

export default {
  primaryColor: '#0080ff',
  red: '#b00020',
  yellow: '#ffff00',
  blue: '#428bca',
  green: '#04af02',
  white: '#fff',
  grey100: '#f8f9fa',
  grey200: '#f8f9fa',
  grey300: '#dee2e6',
  grey400: '#ced4da',
  grey500: '#adb5bd',
  grey600: '#6c757d',
  grey700: '#0c0c0c',
  grey800: '#343a40',
  grey900: '#212529',
  black: '#000',
  fontSizeBase: '16px',
  fontSize12px: '12px',
  fontSize14px: '14px',
  fontSize16px: '16px',
  fontSize18px: '18px',
  fontSize20px: '20px',
  fontSize22px: '22px',
  fontSize24px: '24px',
  fontSize26px: '26px',
  fontSize28px: '28px',
  fontSize30px: '30px',
  fontSize32px: '32px',
  fontSize34px: '34px',
  sizes: {
    appBarHeight: '60px',
  },
};

export const viewPorts = {
  xs: 0,
  sm: 500,
  md: 768,
  lg: 992,
  xl: 1260,
};

export const media = Object.keys(viewPorts).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${viewPorts[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});
