import type { Component } from 'solid-js';
import type { IconProps } from './types/IconPropTypes';

const ArrowRightIcon: Component<IconProps> = props => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    stroke-width="2"
    width={props.size}
    height={props.size}
  >
    <path stroke-linecap="round" stroke-linejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export default ArrowRightIcon;
