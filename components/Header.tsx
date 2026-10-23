"use client";

import { Search, Share2, Shield } from "lucide-react";
import SyncButton from "./SyncButton";

export default function Header({
  search,
  onSearch,
  onSync,
  syncing,
  onShare,
  onAdmin,
  isAdmin,
}: {
  search: string;
  onSearch: (value: string) => void;
  onSync: () => void;
  syncing: boolean;
  onShare: () => void;
  onAdmin: () => void;
  isAdmin: boolean;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/15 bg-slate-950/35 backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1500px] items-center gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <span className="text-[10px] font-bold tracking-[0.32em] text-sky-200/80">
              INSTANT BOARD
            </span>
            {isAdmin && (
              <span className="rounded-full border border-sky-200/50 bg-sky-300/20 px-2 py-0.5 text-[10px] font-bold text-sky-100">
                ADMIN MODE
              </span>
            )}
          </div>
          <div className="mt-0.5 flex items-baseline gap-3">
            <h1 className="ice-logo truncate text-3xl leading-tight sm:text-4xl">
              hadlet
            </h1>
            <p className="hidden text-sm text-sky-100/75 md:block">
              개인용 메모 보드
            </p>
          </div>
        </div>

        <label className="relative hidden w-full max-w-xs md:block">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-sky-100/70" />
          <input
            value={search}
            onChange={(event) => onSearch(event.target.value)}
            placeholder="메모 검색"
            className="h-10 w-full rounded-xl border border-white/25 bg-white/10 pl-9 pr-3 text-sm text-white outline-none backdrop-blur transition placeholder:text-sky-100/60 focus:border-sky-200 focus:bg-white/20 focus:ring-4 focus:ring-sky-300/25"
          />
        </label>

        <div className="flex items-center gap-2">
          <SyncButton onSync={onSync} syncing={syncing} />
          <button
            type="button"
            onClick={onShare}
            className="inline-flex h-10 items-center gap-2 rounded-xl border px-3 text-sm font-medium border-white/25 bg-white/10 text-sky-50 shadow-sm backdrop-blur transition hover:bg-white/20"
            aria-label="보드 공유 링크 복사"
          >
            <Share2 className="h-4 w-4" />
            <span className="hidden sm:inline">공유</span>
          </button>
          <button
            type="button"
            onClick={onAdmin}
            className={`inline-flex h-10 items-center gap-2 rounded-xl border px-3 text-sm font-medium shadow-sm backdrop-blur transition ${
              isAdmin
                ? "border-sky-200/70 bg-sky-300/30 text-white hover:bg-sky-300/40"
                : "border-white/25 bg-white/10 text-sky-50 hover:bg-white/20"
            }`}
            aria-label="관리자 패널 열기"
          >
            <Shield className="h-4 w-4" />
            <span className="hidden lg:inline">관리자</span>
          </button>
        </div>
      </div>
    </header>
  );
}
