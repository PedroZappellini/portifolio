"use client";
import { useEffect, useRef, useState } from "react";

export default function useZoomPan<T extends HTMLElement>(isOpen: boolean) {
  const ref = useRef<T>(null);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const drag = useRef({
    isPressed: false,
    isDragging: false,
    startX: 0,
    startY: 0,
    offsetStart: { x: 0, y: 0 },
    pointerId: 0,
  });

  const MIN_SCALE = 1;
  const MAX_SCALE = 4;
  const DRAG_THRESHOLD = 6;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    function handleWheel(e: WheelEvent) {
      e.preventDefault();
      setScale((current) => {
        const next = current + (e.deltaY < 0 ? 0.2 : -0.2);
        const clamped = Math.min(MAX_SCALE, Math.max(MIN_SCALE, next));
        if (clamped === MIN_SCALE) setOffset({ x: 0, y: 0 });
        return clamped;
      });
    }

    node.addEventListener("wheel", handleWheel, { passive: false });
    return () => node.removeEventListener("wheel", handleWheel);
  }, [isOpen]);

  function onPointerDown(e: React.PointerEvent) {
    if (scale <= 1) return;
    drag.current.isPressed = true;
    drag.current.isDragging = false;
    drag.current.startX = e.clientX;
    drag.current.startY = e.clientY;
    drag.current.offsetStart = offset;
    drag.current.pointerId = e.pointerId;
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!drag.current.isPressed || !ref.current) return;
    const dx = e.clientX - drag.current.startX;
    const dy = e.clientY - drag.current.startY;

    if (!drag.current.isDragging) {
      if (Math.hypot(dx, dy) < DRAG_THRESHOLD) return;
      drag.current.isDragging = true;
      ref.current.setPointerCapture(drag.current.pointerId);
    }

    setOffset({
      x: drag.current.offsetStart.x + dx,
      y: drag.current.offsetStart.y + dy,
    });
  }

  function stopDrag() {
    drag.current.isPressed = false;
    drag.current.isDragging = false;
  }

  return {
    ref,
    scale,
    offset,
    onPointerDown,
    onPointerMove,
    onPointerUp: stopDrag,
    onPointerCancel: stopDrag,
  };
}
