"use client";
import { useEffect, useRef } from "react";

let openLayersStack: symbol[] = [];

export default function useEscapeAndLockScroll(
  isOpen: boolean,
  onClose: () => void,
) {
  const idRef = useRef<symbol | undefined>(undefined);
  if (!idRef.current) idRef.current = Symbol();

  useEffect(() => {
    if (!isOpen) return;

    const id = idRef.current!;
    openLayersStack.push(id);
    document.body.style.overflow = "hidden";

    function handleEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      const isTopmost = openLayersStack[openLayersStack.length - 1] === id;
      if (isTopmost) onClose();
    }

    document.addEventListener("keydown", handleEscape);

    return () => {
      openLayersStack = openLayersStack.filter((layerId) => layerId !== id);
      if (openLayersStack.length === 0) {
        document.body.style.overflow = "";
      }
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen, onClose]);
}
