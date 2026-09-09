"use client";

import useEscapeAndLockScroll from "@/src/Hooks/useEscapeAndLockScroll";
import useZoomPan from "@/src/Hooks/useZoomPan";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface ImageProps {
  image: string;
}

export function ImageViewer({ image }: ImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  useEscapeAndLockScroll(isOpen, () => setIsOpen(false));
  const {
    ref,
    scale,
    offset,
    onPointerDown,
    onPointerMove,
    onPointerUp,
    onPointerCancel,
  } = useZoomPan<HTMLDivElement>(isOpen);

  if (!isOpen) {
    return (
      <div
        className="relative w-full h-full bg-black cursor-pointer"
        onClick={() => setIsOpen(true)}
      >
        <Image
          src={image}
          alt=""
          fill
          loading="eager"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  if (isOpen) {
    return (
      <div className="fixed inset-0 z-60 flex items-center justify-center bg-black">
        <button
          className="absolute top-10 right-10 bg-white hover:bg-gray-200 rounded-full p-2 cursor-pointer transition-colors"
          onClick={() => setIsOpen(false)}
        >
          <X size={20} className="text-black" />
        </button>
        <div
          ref={ref}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={onPointerUp}
          onPointerCancel={onPointerCancel}
          onDragStart={(e) => e.preventDefault()}
          className={scale > 1 ? "cursor-grab active:cursor-grabbing" : ""}
        >
          <Image
            src={image}
            alt=""
            width={1600}
            height={900}
            loading="eager"
            className="w-full lg:max-w-[80vw] lg:max-h-[80vh]"
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
            }}
          />
        </div>
      </div>
    );
  }
}
