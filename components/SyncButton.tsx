"use client";

import { RefreshCw } from "lucide-react";

export default function SyncButton({
  onSync,
  syncing,
}: {
  onSync: () => void;
  syncing: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onSync}
      disabled={syncing}
      className="inline-flex h-10 items-center gap-2 rounded-xl border px-3 text-sm font-medium border-white/25 bg-white/10 text-sky-50 shadow-sm backdrop-blur transition hover:bg-white/20 disabled:cursor-wait disabled:opacity-60"
      aria-label="메모 동기화"
    >
      <RefreshCw className={`h-4 w-4 ${syncing ? "animate-spin" : ""}`} />
      <span className="hidden sm:inline">동기화</span>
    </button>
  );
}
