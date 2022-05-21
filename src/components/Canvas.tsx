import { onMount } from 'solid-js';
import type { Component } from 'solid-js';
import gradientImg from '../assets/images/gradient.png';

const Canvas: Component = () => {
  let canvas: HTMLCanvasElement | undefined;

  onMount(() => {
    if (!canvas) return;

    const ctx = canvas.getContext('2d');

    if (ctx) {
      ctx.fillStyle = 'blue';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradient = new Image();
      gradient.src = gradientImg;
      gradient.onload = () => {
        if (canvas) {
          ctx.drawImage(gradient, 0, 0, canvas.width, canvas.height);
        }
      };
    }
  });

  return <canvas ref={canvas} width="1080" height="1920" />;
};

export default Canvas;
