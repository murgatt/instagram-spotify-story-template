import { styled } from 'solid-styled-components';
import { createEffect } from 'solid-js';
import type { Component } from 'solid-js';
import gradientImg from '../assets/images/gradient.png';

type StoryTemplateProps = {
  color: string;
};

const Canvas = styled.canvas`
  width: 100%;
  max-width: 320px;
  border-radius: 12px;
`;

function drawTemplate({ canvas, color }: { canvas: HTMLCanvasElement; color: string }) {
  const ctx = canvas.getContext('2d');

  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color || 'transparent';
    console.log('DRAW', color);
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const gradient = new Image();
    gradient.src = gradientImg;
    gradient.onload = () => {
      if (canvas) {
        ctx.drawImage(gradient, 0, 0, canvas.width, canvas.height);
      }
    };
  }
}

const StoryTemplate: Component<StoryTemplateProps> = props => {
  let canvas: HTMLCanvasElement | undefined;

  createEffect(() => {
    if (!canvas || !props.color) return;

    drawTemplate({ canvas, color: props.color });
  });

  return <Canvas ref={canvas} width="1080" height="1920" />;
};

export default StoryTemplate;
