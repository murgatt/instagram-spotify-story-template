import type { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

type CustomColorInputProps = {
  color: string;
  onChange: (color: string) => void;
};

const Wrapper = styled.div`
  position: relative;
`;

const Label = styled.label`
  display: block;
  position: relative;
  background-color: var(--color-main);
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
`;

const Input = styled.input`
  opacity: 0;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const CustomColorInput: Component<CustomColorInputProps> = props => {
  const handleCustomColorChange = (e: Event) => {
    const color = (e.currentTarget as HTMLInputElement).value;
    props.onChange(color);
  };

  return (
    <Wrapper>
      <Label for="customColor">Custom color</Label>
      <Input type="color" value={props.color} name="customColor" id="customColor" onChange={handleCustomColorChange} />
    </Wrapper>
  );
};

export default CustomColorInput;
