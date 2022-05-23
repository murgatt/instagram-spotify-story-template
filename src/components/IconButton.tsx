import type { Component, JSX } from 'solid-js';
import { styled } from 'solid-styled-components';

type IconButtonProps = JSX.ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled.button`
  background-color: var(--primary);
  color: var(--color-dark);
  border-radius: var(--border-radius);
  cursor: pointer;
  border: none;
  outline: none;
  width: 56px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: var(--primary-hover);
  }

  &:focus {
    background-color: var(--primary-focus);
  }
`;

const Icon = styled.span`
  width: 28px;
  height: 28px;
`;

const IconButton: Component<IconButtonProps> = props => (
  <StyledButton {...props}>
    <Icon>{props.children}</Icon>
  </StyledButton>
);

export default IconButton;
