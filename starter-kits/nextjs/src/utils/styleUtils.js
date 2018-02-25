import { css } from 'styled-components';

export const media = {
  handheld: (...args) => css`
    @media (max-width: 420px) {
      ${css(...args)};
    }
  `,
  web: (...args) => css`
    @media only screen and (min-width: 1200px) {
      ${css(...args)};
    }
  `,
};
