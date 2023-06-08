import React, { useRef, useEffect } from "react";

const Shape = ({ color }) => {
  const canvasRef = useRef(null);
  const isDrawing = useRef(false);
  const path = useRef([]);
  const prevPosition = useRef({ x: 0, y: 0 });

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  useEffect(() => {
    if (color === "transparent") clearCanvas();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const getBoundingRect = (event) => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      path.current.push({ x, y });
      prevPosition.current = { x, y };
      return { x, y };
    };

    const handleMouseDown = (event) => {
      isDrawing.current = true;
      getBoundingRect(event);
    };

    const handleMouseMove = (event) => {
      if (!isDrawing.current) return;

      const { x, y } = getBoundingRect(event);
      ctx.beginPath();
      ctx.moveTo(prevPosition.current.x, prevPosition.current.y);
      ctx.lineTo(x, y);
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.stroke();
      drawPath();
    };

    const drawPath = () => {
      ctx.beginPath();
      ctx.moveTo(path.current[0].x, path.current[0].y);
      for (let i = 1; i < path.current.length; i++) {
        ctx.lineTo(path.current[i].x, path.current[i].y);
      }
      ctx.strokeStyle = color;
      ctx.lineWidth = 1;
      ctx.stroke();
    };

    const handleMouseUp = () => {
      isDrawing.current = false;
      ctx.fillStyle = color;
      ctx.fill();
      path.current = [];
    };

    canvas.addEventListener("mousedown", handleMouseDown);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvas.removeEventListener("mousedown", handleMouseDown);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseup", handleMouseUp);
    };
  }, [color]);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
      }}
    >
      <canvas
        ref={canvasRef}
        width={window.innerWidth - 20}
        height={window.innerHeight - 220}
      />
    </div>
  );
};

export default Shape;
