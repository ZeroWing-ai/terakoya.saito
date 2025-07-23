import { css } from '@emotion/react';
import { theme } from '../theme';

export const globalStyles = css`
  /* Modern CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Base Styles */
  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-rendering: optimizeLegibility;
    font-size: 16px;
    line-height: ${theme.lineHeights.normal};
    scroll-behavior: smooth;
  }

  body {
    font-family: ${theme.fonts.main};
    color: ${theme.colors.text};
    background-color: ${theme.colors.background};
    line-height: ${theme.lineHeights.relaxed};
    overflow-x: hidden;
  }

  /* Typography */
  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.bold};
    line-height: ${theme.lineHeights.tight};
    margin-bottom: ${theme.spacing[4]};
    color: ${theme.colors.gray900};
  }

  h1 {
    font-size: ${theme.fontSizes['4xl']};
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes['5xl']};
    }
  }

  h2 {
    font-size: ${theme.fontSizes['3xl']};
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes['4xl']};
    }
  }

  h3 {
    font-size: ${theme.fontSizes['2xl']};
    @media (min-width: ${theme.breakpoints.md}) {
      font-size: ${theme.fontSizes['3xl']};
    }
  }

  p {
    margin-bottom: ${theme.spacing[4]};
    font-size: ${theme.fontSizes.base};
    line-height: ${theme.lineHeights.relaxed};
    color: ${theme.colors.gray700};
  }

  /* Links */
  a {
    color: ${theme.colors.primary};
    text-decoration: none;
    transition: ${theme.transitions.default};
    
    &:hover {
      color: ${theme.colors.primaryDark};
      text-decoration: underline;
    }
  }

  /* Buttons */
  button {
    font-family: inherit;
    cursor: pointer;
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    outline: none;
  }

  /* Images */
  img, svg, video, canvas, picture {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Lists */
  ul, ol {
    padding-left: ${theme.spacing[6]};
    margin-bottom: ${theme.spacing[4]};
  }

  /* Forms */
  input, button, textarea, select {
    font: inherit;
  }

  /* Accessibility */
  .sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
  }

  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-track {
    background: ${theme.colors.gray100};
  }

  ::-webkit-scrollbar-thumb {
    background: ${theme.colors.gray400};
    border-radius: ${theme.radii.full};
    
    &:hover {
      background: ${theme.colors.gray500};
    }
  }
`;
