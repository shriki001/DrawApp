import React, { useRef, useEffect } from "react";

const AutoShape = ({ shape, color }) => {
  const canvasRef = useRef(null);
  const prevPosition = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = color;
    switch (shape) {
      case "circle":
        ctx.beginPath();
        ctx.arc(50, 50, 50, 0, 2 * Math.PI);
        ctx.fill();
        break;
      case "triangle":
        ctx.beginPath();
        ctx.moveTo(50, 0);
        ctx.lineTo(100, 100);
        ctx.lineTo(0, 100);
        ctx.fill();
        break;
      case "rectangle":
        ctx.fillRect(0, 0, 100, 100);
        break;
      case "line":
        const { x, y } = prevPosition.current;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(100, 100);
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.stroke();
        break;
      default:
        break;
    }
  }, [shape, color]);

  return <canvas ref={canvasRef} width={100} height={100} />;
};

export default AutoShape;
