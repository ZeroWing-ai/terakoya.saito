import { css } from '@emotion/react';
import type { Interpolation, Theme } from '@emotion/react';

type Style = Interpolation<Theme>;

export function combineStyles(...styles: Array<Style>): Style {
  return styles;
}

export function createStyle(styles: TemplateStringsArray, ...args: any[]) {
  return css(styles, ...args);
}
