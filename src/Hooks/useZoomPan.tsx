import { useEffect, useRef, useState } from "react";

export default function useZoomPan<T extends HTMLElement>(isOpen: boolean) {
  const ref = useRef<T>(null);
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const pointers = useRef(new Map<number, { x: number; y: number }>());
  const drag = useRef({
    isDragging: false,
    startX: 0,
    startY: 0,
    offsetStart: { x: 0, y: 0 },
  });
  const pinch = useRef({ startDistance: 0, startScale: 1 });

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

  function getDistance(
    a: { x: number; y: number },
    b: { x: number; y: number },
  ) {
    return Math.hypot(a.x - b.x, a.y - b.y);
  }

  function onPointerDown(e: React.PointerEvent) {
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.current.size === 2) {
      const [a, b] = Array.from(pointers.current.values());
      pinch.current.startDistance = getDistance(a, b);
      pinch.current.startScale = scale;
      drag.current.isDragging = false;
    } else if (pointers.current.size === 1 && scale > 1) {
      drag.current.isDragging = false;
      drag.current.startX = e.clientX;
      drag.current.startY = e.clientY;
      drag.current.offsetStart = offset;
    }
  }

  function onPointerMove(e: React.PointerEvent) {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.current.size === 2) {
      const [a, b] = Array.from(pointers.current.values());
      const ratio = getDistance(a, b) / pinch.current.startDistance;
      const next = pinch.current.startScale * ratio;
      setScale(Math.min(MAX_SCALE, Math.max(MIN_SCALE, next)));
      return;
    }

    if (pointers.current.size === 1 && scale > 1) {
      const dx = e.clientX - drag.current.startX;
      const dy = e.clientY - drag.current.startY;

      if (!drag.current.isDragging) {
        if (Math.hypot(dx, dy) < DRAG_THRESHOLD) return;
        drag.current.isDragging = true;
        ref.current?.setPointerCapture(e.pointerId);
      }

      setOffset({
        x: drag.current.offsetStart.x + dx,
        y: drag.current.offsetStart.y + dy,
      });
    }
  }

  function onPointerUp(e: React.PointerEvent) {
    pointers.current.delete(e.pointerId);
    drag.current.isDragging = false;

    if (pointers.current.size === 1) {
      const [point] = Array.from(pointers.current.values());
      drag.current.startX = point.x;
      drag.current.startY = point.y;
      drag.current.offsetStart = offset;
    }

    if (scale <= MIN_SCALE) setOffset({ x: 0, y: 0 });
  }

  return {
    ref,
    scale,
    offset,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel: onPointerUp,
  };
}
