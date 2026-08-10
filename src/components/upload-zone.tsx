"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FileUp, FileCheck2, X } from "lucide-react";

import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface UploadZoneProps {
  label: string;
  hint: string;
  cta: string;
  uploadedPrefix: string;
}

function formatSize(bytes: number) {
  if (bytes < 1024 * 1024) return `${Math.max(1, Math.round(bytes / 1024))} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function UploadZone({ label, hint, cta, uploadedPrefix }: UploadZoneProps) {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [dragOver, setDragOver] = React.useState(false);
  const [file, setFile] = React.useState<File | null>(null);
  const [progress, setProgress] = React.useState(0);

  function simulateUpload(selected: File) {
    setFile(selected);
    setProgress(0);
    const start = Date.now();
    const duration = 1100;
    const tick = () => {
      const elapsed = Date.now() - start;
      const pct = Math.min(100, Math.round((elapsed / duration) * 100));
      setProgress(pct);
      if (pct < 100) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  function handleFiles(files: FileList | null) {
    const selected = files?.[0];
    if (selected) simulateUpload(selected);
  }

  return (
    <div>
      <label className="mb-2 block text-sm font-medium text-foreground">{label}</label>
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          handleFiles(e.dataTransfer.files);
        }}
        onClick={() => inputRef.current?.click()}
        className={cn(
          "flex cursor-pointer flex-col items-center gap-2 rounded-2xl border-2 border-dashed p-6 text-center transition-colors",
          dragOver ? "border-brand-yellow bg-brand-yellow-soft" : "border-border-subtle bg-surface-muted hover:border-foreground/25",
        )}
      >
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={(e) => handleFiles(e.target.files)}
        />

        <AnimatePresence mode="wait">
          {!file ? (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-2"
            >
              <span className="flex size-10 items-center justify-center rounded-full bg-surface text-muted-foreground">
                <FileUp className="size-5" />
              </span>
              <p className="text-sm text-muted-foreground">{hint}</p>
              <span className="mt-1 rounded-full border border-border-subtle bg-surface px-3 py-1.5 text-xs font-semibold text-foreground">
                {cta}
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="file"
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex w-full flex-col items-center gap-2"
              onClick={(e) => e.stopPropagation()}
            >
              <span
                className={cn(
                  "flex size-10 items-center justify-center rounded-full",
                  progress >= 100 ? "bg-brand-emerald-soft text-brand-emerald" : "bg-surface text-muted-foreground",
                )}
              >
                <FileCheck2 className="size-5" />
              </span>
              <p className="max-w-full truncate text-sm font-medium text-foreground">
                {uploadedPrefix} {file.name}
              </p>
              <p className="text-xs text-muted-foreground">{formatSize(file.size)}</p>
              {progress < 100 && <Progress value={progress} className="mt-1 w-full max-w-48" />}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setFile(null);
                  setProgress(0);
                  if (inputRef.current) inputRef.current.value = "";
                }}
                className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground"
              >
                <X className="size-3" />
                remove
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
