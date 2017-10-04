import { style } from 'typestyle';

export function msteamsLogo(): string {
  return style({ $nest: { '&::before': { content: '"\\e016"' }}});
}

export function pencil(): string {
  return style({ $nest: { '&::before': { content: '"\\e40d"' }}});
}

export function checkmark(): string {
  return style({ $nest: { '&::before': { content: '"\\e412"' }}});
}

export function plus(): string {
  return style({ $nest: { '&::before': { content: '"\\e415"' }}});
}

export function magnifyingGlass(): string {
  return style({ $nest: { '&::before': { content: '"\\e446"' }}});
}

export function file(): string {
  return style({ $nest: { '&::before': { content: '"\\e306"' }}});
}

export function monkey(): string {
  return style({ $nest: { '&::before': { content: '"\\e633"' }}});
}
