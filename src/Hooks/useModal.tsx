"use client";
import { useState } from "react";

export default function useModal<T>() {
  const [data, setData] = useState<T | null>(null);

  const open = (item: T) => {
    setData(item);
  };

  const close = () => {
    setData(null);
  };

  const isOpen = data !== null;

  return { open, close, isOpen, data };
}
