"use client";
import { useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ onClose, children, isOpen }: ModalProps) {
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex backdrop-blur-md items-center justify-center p-4">
      <div className="relative min-w-0">
        <button
          className="absolute z-50 top-5 right-5 bg-black/50 rounded-full p-2 cursor-pointer transition-colors hover:bg-black/70"
          onClick={onClose}
        >
          <X size={20} className="text-white" />
        </button>

        <div className="w-full max-w-xl bg-surface rounded-xl overflow-hidden">
          <div className="max-h-[90vh] overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}
