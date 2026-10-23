"use client";

import { Plus } from "lucide-react";

export default function FloatingActionButton({
  onClick,
}: {
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-6 right-6 z-30 inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-gradient-to-br from-white via-sky-200 to-sky-500 text-sky-900 shadow-[0_0_28px_rgba(125,211,252,0.65),inset_0_1px_0_rgba(255,255,255,0.9)] transition hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(186,230,253,0.9),inset_0_1px_0_rgba(255,255,255,0.9)] focus:outline-none focus:ring-4 focus:ring-sky-200/60 sm:bottom-8 sm:right-8"
      aria-label="새 메모 작성"
    >
      <Plus className="h-7 w-7" strokeWidth={2.4} />
    </button>
  );
}
