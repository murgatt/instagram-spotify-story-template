import { styled } from 'solid-styled-components';
import { createEffect } from 'solid-js';
import type { Component } from 'solid-js';

type StoryTemplateProps = {
  color: string;
  coverUrl: string;
  isCoverDisplayed: boolean;
  onClick: () => void;
};

const Canvas = styled.canvas`
  width: 100%;
  max-width: 320px;
  border-radius: 12px;
`;

function drawTemplate({
  canvas,
  color,
  coverUrl,
  isCoverDisplayed,
}: {
  canvas: HTMLCanvasElement;
  color: string;
  coverUrl: string;
  isCoverDisplayed: boolean;
}) {
  const ctx = canvas.getContext('2d');

  if (ctx) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color || 'transparent';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
    gradient.addColorStop(0, '#121212');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 0.6)');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (isCoverDisplayed) {
      const cover = new Image();
      cover.src = coverUrl;
      cover.crossOrigin = '*';

      cover.onload = () => {
        const x = canvas.width / 2 - cover.width / 2;
        const y = canvas.height / 2 - cover.height / 2;
        ctx.drawImage(cover, x, y, 640, 640);
      };
    }
  }
}

const StoryTemplate: Component<StoryTemplateProps> = props => {
  let canvas: HTMLCanvasElement | undefined;

  createEffect(() => {
    if (!canvas || !props.color) return;

    drawTemplate({ canvas, color: props.color, coverUrl: props.coverUrl, isCoverDisplayed: props.isCoverDisplayed });
  });

  return <Canvas ref={canvas} width="1080" height="1920" id="story-template" onClick={props.onClick} />;
};

export default StoryTemplate;
