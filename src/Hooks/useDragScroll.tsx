"use client";
import { useRef } from "react";

const DRAG_THRESHOLD = 6;

export default function useDragScroll<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const drag = useRef({
    isPressed: false,
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
    pointerId: 0,
  });

  function onPointerDown(e: React.PointerEvent) {
    if (e.pointerType !== "mouse" || !ref.current) return;
    drag.current.isPressed = true;
    drag.current.isDragging = false;
    drag.current.startX = e.clientX;
    drag.current.scrollLeft = ref.current.scrollLeft;
    drag.current.pointerId = e.pointerId;
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!drag.current.isPressed || !ref.current) return;
    const delta = e.clientX - drag.current.startX;

    if (!drag.current.isDragging) {
      if (Math.abs(delta) < DRAG_THRESHOLD) return;
      drag.current.isDragging = true;
      ref.current.setPointerCapture(drag.current.pointerId);
    }

    ref.current.scrollLeft = drag.current.scrollLeft - delta;
  }

  function stopDrag() {
    drag.current.isPressed = false;
    drag.current.isDragging = false;
  }

  return {
    ref,
    onPointerDown,
    onPointerMove,
    onPointerUp: stopDrag,
    onPointerCancel: stopDrag,
  };
}
