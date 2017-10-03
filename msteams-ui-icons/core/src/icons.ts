import { style } from 'typestyle';

export function plus(): string {
  return style({ $nest: { '&::before': { content: '"\\e415"' }}});
}

export function file(): string {
  return style({ $nest: { '&::before': { content: '"\\e306"' }}});
}

export function monkey(): string {
  return style({ $nest: { '&::before': { content: '"\\e633"' }}});
}
