// 아이슬란드 빙하 풍경 배경: 오로라 하늘, 빙하 산맥, 유빙이 떠 있는 빙하 호수, 눈.
export default function GlacierBackdrop() {
  return (
    <div className="glacier-backdrop" aria-hidden="true">
      <div className="aurora aurora-a" />
      <div className="aurora aurora-b" />
      <div className="stars" />

      <svg
        className="glacier-svg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMax slice"
      >
        <defs>
          <linearGradient id="farPeak" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#c7dcef" />
            <stop offset="1" stopColor="#5f84a8" />
          </linearGradient>
          <linearGradient id="midPeak" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#f4fbff" />
            <stop offset="0.45" stopColor="#a9d4ee" />
            <stop offset="1" stopColor="#3d6f96" />
          </linearGradient>
          <linearGradient id="glacier" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="0.5" stopColor="#bfe9fb" />
            <stop offset="1" stopColor="#5cc3e8" />
          </linearGradient>
          <linearGradient id="lagoon" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#5fb9d9" />
            <stop offset="1" stopColor="#0d3552" />
          </linearGradient>
          <linearGradient id="berg" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#ffffff" />
            <stop offset="1" stopColor="#7fd3f2" />
          </linearGradient>
        </defs>

        {/* 먼 산맥 */}
        <path
          fill="url(#farPeak)"
          opacity="0.55"
          d="M0 560 L120 470 L210 520 L330 410 L450 500 L560 430 L690 520 L820 400 L950 490 L1060 420 L1190 510 L1310 440 L1440 500 L1440 900 L0 900 Z"
        />
        {/* 눈 덮인 중간 산맥 */}
        <path
          fill="url(#midPeak)"
          d="M0 620 L90 560 L170 590 L290 480 L380 560 L470 520 L600 600 L720 470 L840 590 L960 540 L1080 610 L1200 500 L1330 590 L1440 560 L1440 900 L0 900 Z"
        />
        <path
          fill="#ffffff"
          opacity="0.85"
          d="M290 480 L335 520 L310 515 L290 535 L270 512 L250 518 Z M720 470 L770 520 L742 512 L720 532 L700 510 L676 516 Z M1200 500 L1245 540 L1220 535 L1200 552 L1182 532 L1160 538 Z"
        />
        {/* 바다로 흘러내리는 빙하 혀 */}
        <path
          fill="url(#glacier)"
          d="M520 600 C600 590 820 588 920 604 L1010 690 L430 690 Z"
        />
        <path
          stroke="#7fcbe9"
          strokeWidth="2"
          opacity="0.6"
          fill="none"
          d="M560 620 L520 690 M640 612 L620 690 M720 608 L720 690 M800 610 L820 690 M880 616 L930 690"
        />
        {/* 빙하 호수 */}
        <rect y="688" width="1440" height="212" fill="url(#lagoon)" />
        <path
          fill="#ffffff"
          opacity="0.12"
          d="M0 700 H1440 V708 H0 Z M200 740 H620 V743 H200 Z M860 770 H1300 V773 H860 Z"
        />
        {/* 유빙 */}
        <g fill="url(#berg)">
          <path d="M140 760 L190 726 L250 732 L290 760 Z" />
          <path d="M1040 742 L1080 712 L1120 718 L1150 700 L1200 742 Z" />
          <path d="M600 800 L640 778 L690 784 L720 800 Z" />
          <path d="M1290 820 L1320 800 L1370 806 L1400 820 Z" />
        </g>
        <g fill="#9ee0f7" opacity="0.35">
          <path d="M140 760 L290 760 L240 790 L180 786 Z" />
          <path d="M1040 742 L1200 742 L1150 776 L1080 770 Z" />
          <path d="M600 800 L720 800 L680 818 L630 815 Z" />
        </g>
      </svg>

      <div className="snow snow-near" />
      <div className="snow snow-far" />
    </div>
  );
}
