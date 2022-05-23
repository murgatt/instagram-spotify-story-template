const FILE_NAME = 'story-template.jpg';

function downloadImageFromCanvas(canvas: HTMLCanvasElement) {
  const url = canvas.toDataURL('image/jpg');
  const link = document.createElement('a');
  link.download = FILE_NAME;
  link.href = url;
  link.click();
}

function shareImageFromCanvas(canvas: HTMLCanvasElement) {
  canvas.toBlob(blob => {
    if (!blob) return;
    const file = new File([blob], FILE_NAME, { type: blob.type });
    const data = {
      files: [file],
    };

    if (navigator.share && navigator.canShare(data)) {
      navigator.share(data);
    } else {
      downloadImageFromCanvas(canvas);
    }
  });
}

export function downloadOrShareFromCanvas(canvas: HTMLCanvasElement) {
  if (!navigator.share) {
    downloadImageFromCanvas(canvas);
  } else {
    shareImageFromCanvas(canvas);
  }
}
