import type { Component } from 'solid-js';
import type { IconProps } from './types/IconPropTypes';

const SearchIcon: Component<IconProps> = props => (
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
    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
  </svg>
);

export default SearchIcon;
