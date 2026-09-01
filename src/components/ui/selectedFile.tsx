"use client";

import { Trash } from "lucide-react";
import { ExcelIcon, PdfIcon, TxtIcon, WordIcon } from "@/src/utils/icons";
import { ComponentType, SVGProps } from "react";

interface SelectedFileProps {
  image: boolean;
  src: string;
  alt: string;
  extension: string;
  onRemove: () => void;
}

type FileIconComponent = ComponentType<
  SVGProps<SVGSVGElement> & { size?: number }
>;

const fileIcons: Record<string, FileIconComponent> = {
  pdf: PdfIcon,
  doc: WordIcon,
  docx: WordIcon,
  xls: ExcelIcon,
  xlsx: ExcelIcon,
  txt: TxtIcon,
};

export function SelectedFile({
  image,
  src,
  alt,
  extension,
  onRemove,
}: SelectedFileProps) {
  const Icon = fileIcons[extension];

  function truncateFileName(name: string, maxTotalLength = 13) {
    const lastDot = name.lastIndexOf(".");
    if (lastDot === -1) return name;

    const base = name.slice(0, lastDot);
    const ext = name.slice(lastDot);
    const ellipsis = "...";

    const maxBaseLength = maxTotalLength - ext.length - ellipsis.length;

    if (base.length <= maxBaseLength) return name;

    return `${base.slice(0, maxBaseLength)}...${ext}`;
  }

  const shortText = truncateFileName(alt);

  return (
    <div className="flex flex-col gap-1">
      <div className="relative w-20 h-20">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="absolute -right-2 -top-2 bg-surface border border-surface-border rounded-full p-1 cursor-pointer"
        >
          <Trash size={14} className="text-danger" />
        </button>

        {image ? (
          <img
            src={src}
            alt={alt}
            className="w-20 h-20 object-cover rounded-md border border-surface-border"
          />
        ) : (
          <div className="border border-surface-border rounded-md w-20 h-20 flex items-center justify-center bg-background-elevated">
            <Icon className="w-15 h-15" />
          </div>
        )}
      </div>
      <p className="overflow-hidden whitespace-nowrap w-20 text-xs text-muted text-center">
        {shortText}
      </p>
    </div>
  );
}
