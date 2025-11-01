'use client';

import Link from 'next/link';

export function LandingHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] border-b border-[#e0e0e0] dark:border-slate-800 bg-[rgba(250,250,250,0.95)] dark:bg-[rgba(15,23,42,0.95)] backdrop-blur-[10px] px-[60px] py-5 max-md:px-[30px]" style={{ fontFamily: "var(--font-roboto-mono), 'Roboto Mono', monospace" }}>
      <div className="flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-2 font-['Roboto_Mono',monospace] text-xl font-medium text-[#1a1a1a] dark:text-white no-underline hover:opacity-80 transition-opacity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 108 112"
            preserveAspectRatio="xMidYMid meet"
            className="inline-block h-[30px] w-[30px]"
            aria-hidden="true"
          >
            <g transform="translate(0,112) scale(0.05,-0.05)" fill="currentColor" stroke="currentColor" strokeWidth="12" strokeLinejoin="round">
              <path d="M1046 1895 c-63 -116 -26 -525 50 -550 78 -26 108 333 45 540 -28 92 -50 94 -95 10z"/>
              <path d="M460 1693 c0 -101 169 -285 344 -375 236 -121 49 197 -207 353 -133 82 -137 82 -137 22z"/>
              <path d="M1590 1649 c-148 -77 -427 -471 -298 -421 17 7 43 12 57 12 70 0 371 341 371 419 0 30 -61 26 -130 -10z"/>
              <path d="M959 1183 c-98 -79 -30 -250 100 -250 83 0 141 57 141 140 0 129 -140 192 -241 110z"/>
              <path d="M293 1171 c-124 -35 -133 -46 -77 -92 88 -71 492 -59 569 18 74 74 -295 130 -492 74z"/>
              <path d="M1590 1125 c-96 -11 -270 -65 -270 -83 0 -102 581 -109 615 -7 18 53 -189 107 -345 90z"/>
              <path d="M730 897 c-105 -58 -330 -334 -330 -404 0 -109 271 92 391 290 88 143 66 183 -61 114z"/>
              <path d="M1220 839 c0 -114 306 -419 420 -419 126 0 -97 285 -326 416 -93 54 -94 54 -94 3z"/>
              <path d="M972 752 c-58 -122 -20 -552 48 -552 79 0 110 308 51 511 -37 127 -55 134 -99 41z"/>
            </g>
          </svg>
          <span>Suminos</span>
        </Link>
        <div className="inline-flex items-center gap-3">
          <Link href="/learn" className="px-3 py-2 font-['Roboto_Mono',monospace] text-sm text-[#4b5563] dark:text-slate-300 no-underline transition-colors hover:text-[#111827] dark:hover:text-white">
            Learn
          </Link>
          <a href="https://app.suminos.ai" className="px-3 py-2 font-['Roboto_Mono',monospace] text-sm text-[#4b5563] dark:text-slate-300 no-underline transition-colors hover:text-[#111827] dark:hover:text-white">
            Sign In
          </a>
        </div>
      </div>
    </header>
  );
}
