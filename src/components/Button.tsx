import type { Component, JSX } from 'solid-js';
import { styled } from 'solid-styled-components';

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {
  as?: string | Component;
  href?: string;
}

const StyledButton = styled.button`
  background-color: var(--primary);
  color: var(--color-dark);
  padding: 14px 32px;
  border-radius: var(--border-radius);
  text-transform: uppercase;
  letter-spacing: 2px;
  cursor: pointer;
  text-decoration: none;
  font-size: 0.875rem;
  font-family: 'Circular Bold', Helvetica, Arial, sans-serif;
  line-height: 1.25rem;
  border: none;
  outline: none;

  &:hover {
    background-color: var(--primary-hover);
  }

  &:focus {
    background-color: var(--primary-focus);
  }
`;

const Button: Component<ButtonProps> = props => <StyledButton {...props}>{props.children}</StyledButton>;

export default Button;
