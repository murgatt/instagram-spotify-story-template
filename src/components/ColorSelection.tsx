import type { Component } from 'solid-js';
import { styled } from 'solid-styled-components';
import { For } from 'solid-js';

type ColorSelectionProps = {
  colors: string[];
  onColorChange: (color: string) => void;
  selectedColor: string;
};

const Wrapper = styled.div`
  margin: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Color = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50px;
  padding: 4px;
  background-color: transparent;
  border: 2px solid transparent;
  transition: border-color 250ms ease-in-out;
  cursor: pointer;

  &.active {
    border-color: var(--primary-focus);
  }

  &:before {
    content: '';
    background-color: ${props => props.color};
    display: block;
    height: 100%;
    border-radius: 50px;
  }
`;

const ColorList = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

const CustomColor = styled.div`
  margin-top: 16px;

  & > label {
    margin-right: 16px;
  }
`;

const ColorSelection: Component<ColorSelectionProps> = props => {
  const handleColorClick = (color: string) => () => {
    props.onColorChange(color);
  };

  const handleCustomColorChange = (e: Event) => {
    const color = (e.currentTarget as HTMLInputElement).value;
    props.onColorChange(color);
  };

  return (
    <Wrapper>
      <ColorList>
        <For each={props.colors}>
          {color => (
            <Color
              color={color}
              class={color === props.selectedColor ? 'active' : ''}
              onClick={handleColorClick(color)}
            />
          )}
        </For>
      </ColorList>
      <CustomColor>
        <label for="customColor">Custom color:</label>
        <input
          type="color"
          value={props.selectedColor}
          name="customColor"
          id="customColor"
          onChange={handleCustomColorChange}
        />
      </CustomColor>
    </Wrapper>
  );
};

export default ColorSelection;
