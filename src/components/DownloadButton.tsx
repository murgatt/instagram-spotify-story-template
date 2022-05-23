import type { Component } from 'solid-js';
import { downloadOrShareFromCanvas } from '../services/download.services';
import Button from './Button';

const DownloadButton: Component = () => {
  const handleClick = () => {
    const canvas = document.getElementById('story-template') as HTMLCanvasElement;
    downloadOrShareFromCanvas(canvas);
  };

  return <Button onClick={handleClick}>Download / Share</Button>;
};

export default DownloadButton;
