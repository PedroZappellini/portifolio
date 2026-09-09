"use client";
import { useEffect } from "react";
import { X } from "lucide-react";
import useEscapeAndLockScroll from "@/src/Hooks/useEscapeAndLockScroll";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  closeButton?: boolean;
}

export function Modal({ onClose, children, isOpen, closeButton }: ModalProps) {
  useEscapeAndLockScroll(isOpen, onClose);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex backdrop-blur-md items-center justify-center p-4">
      <div className="relative min-w-0">
        {closeButton && (
          <button
            className="absolute z-50 -top-3 -right-3 rounded-full border border-surface-border bg-surface p-2 cursor-pointer shadow-sm transition-colors hover:bg-surface-border"
            onClick={onClose}
          >
            <X size={20} className="text-muted" />
          </button>
        )}

        <div className="w-full max-w-xl bg-surface rounded-xl overflow-hidden">
          <div className="max-h-[90vh] overflow-y-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}
