"use client";

import { useState } from "react";
import { inductedWorks } from "./books";

const decorativeShelves = [
  [
    { kind: "stack", colors: ["#7c6244", "#4b382d", "#8f6b46"] },
    { kind: "book", title: "Lore", height: 180, width: 48, spine: "#5a4230" },
    { kind: "slot" },
    { kind: "book", title: "Poetry", height: 194, width: 44, spine: "#31404a" },
    { kind: "slot" },
    { kind: "book", title: "Essays", height: 178, width: 46, spine: "#6a4936" },
    { kind: "slot" },
    { kind: "plant" },
    { kind: "book", title: "Letters", height: 170, width: 50, spine: "#4a332a" },
    { kind: "slot" },
    { kind: "vase" },
  ],
  [
    { kind: "book", title: "Archive", height: 186, width: 52, spine: "#3f3028" },
    { kind: "slot" },
    { kind: "book", title: "Ballads", height: 164, width: 42, spine: "#84704b" },
    { kind: "plant" },
    { kind: "slot" },
    { kind: "book", title: "Study", height: 196, width: 56, spine: "#6b543d" },
    { kind: "slot" },
    { kind: "stack", colors: ["#563c2f", "#7b6244", "#312925"] },
    { kind: "book", title: "Classic", height: 188, width: 48, spine: "#614937" },
    { kind: "slot" },
    { kind: "book", title: "Prose", height: 172, width: 44, spine: "#3a2b24" },
  ],
  [
    { kind: "vase" },
    { kind: "slot" },
    { kind: "book", title: "Writing", height: 182, width: 50, spine: "#6c523a" },
    { kind: "slot" },
    { kind: "book", title: "Volume I", height: 192, width: 48, spine: "#3d2d25" },
    { kind: "stack", colors: ["#836949", "#4d392d", "#624936"] },
    { kind: "slot" },
    { kind: "book", title: "Craft", height: 184, width: 46, spine: "#30404a" },
    { kind: "plant" },
    { kind: "slot" },
    { kind: "book", title: "Gold", height: 162, width: 42, spine: "#4b3328" },
  ],
];

function findInductedWork(shelfIndex, slotIndex) {
  return inductedWorks.find(
    (work) => work.shelf === shelfIndex && work.slot === slotIndex
  );
}

function BookOrnament() {
  return (
    <>
      <div className="absolute left-2 right-2 top-3 h-[2px] bg-[#d0b06e]/55" />
      <div className="absolute left-2 right-2 top-6 h-[1px] bg-[#edd5a0]/18" />
      <div className="absolute left-2 right-2 bottom-6 h-[1px] bg-[#edd5a0]/18" />
      <div className="absolute left-2 right-2 bottom-3 h-[2px] bg-[#d0b06e]/55" />
      <div className="absolute left-[10px] top-4 h-[6px] w-[6px] rotate-45 rounded-[2px] border border-[#d8bb7f]/25 bg-[#d8bb7f]/10" />
      <div className="absolute right-[10px] top-4 h-[6px] w-[6px] -rotate-45 rounded-[2px] border border-[#d8bb7f]/25 bg-[#d8bb7f]/10" />
      <div className="absolute left-1/2 top-1/2 h-9 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d8bb7f]/55" />
      <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#d8bb7f]/25" />
    </>
  );
}

function DecorativeBook({ item }) {
  return (
    <div
      className="relative rounded-t-md border border-black/35 shadow-[0_12px_28px_rgba(0,0,0,0.5)]"
      style={{
        height: `${item.height}px`,
        width: `${item.width}px`,
        background: `linear-gradient(to bottom, ${item.spine}, #17110e)`,
      }}
    >
      <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#d8bb7f]/70 to-transparent" />
      <div className="absolute left-0 right-0 bottom-[2px] h-[1px] bg-gradient-to-r from-transparent via-[#d8bb7f]/45 to-transparent" />
      <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#d8bb7f]/18" />
      <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-[#d8bb7f]/12" />
      <div className="absolute left-[4px] top-0 h-full w-[4px] bg-black/18" />
      <div className="absolute right-[3px] top-0 h-full w-[2px] bg-white/6" />
      <div className="absolute inset-y-0 left-1/2 w-[1px] -translate-x-1/2 bg-[#d8bb7f]/15" />
      <BookOrnament />

      <div className="flex h-full items-center justify-center px-1">
        <span
          className="text-[8px] uppercase tracking-[0.22em] text-stone-200/90"
          style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
        >
          {item.title}
        </span>
      </div>
    </div>
  );
}

function InductedBook({ work, onOpen }) {
  return (
    <div className="group relative">
      <div className="absolute inset-x-[-16px] top-2 bottom-1 rounded-2xl bg-amber-300/35 blur-2xl opacity-85" />
      <div className="absolute inset-x-[-6px] top-7 bottom-3 rounded-xl border border-amber-200/15 opacity-80" />

      <button
        onClick={() => onOpen(work)}
        className="relative rounded-t-md border border-black/35 shadow-[0_12px_28px_rgba(0,0,0,0.55)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_18px_44px_rgba(0,0,0,0.72)] focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-200/30"
        style={{
          height: `${work.height}px`,
          width: `${work.width}px`,
          background: `linear-gradient(to bottom, ${work.spine}, #17110e)`,
        }}
      >
        <div className="absolute left-0 right-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-[#d8bb7f]/75 to-transparent" />
        <div className="absolute left-0 right-0 bottom-[2px] h-[1px] bg-gradient-to-r from-transparent via-[#d8bb7f]/45 to-transparent" />
        <div className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#d8bb7f]/18" />
        <div className="absolute right-0 top-0 bottom-0 w-[1px] bg-[#d8bb7f]/12" />
        <div className="absolute left-[4px] top-0 h-full w-[4px] bg-black/18" />
        <div className="absolute right-[3px] top-0 h-full w-[2px] bg-white/6" />
        <div className="absolute inset-y-0 left-1/2 w-[1px] -translate-x-1/2 bg-[#d8bb7f]/15" />
        <BookOrnament />

        <div className="flex h-full items-center justify-center px-1">
          <span
            className="text-[8px] uppercase tracking-[0.22em] text-amber-100"
            style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
          >
            {work.title}
          </span>
        </div>
      </button>

      <div className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 hidden w-64 -translate-x-1/2 rounded-2xl border border-amber-200/20 bg-[#17110d]/95 p-4 text-left opacity-0 shadow-[0_35px_90px_rgba(0,0,0,0.7)] transition duration-300 group-hover:opacity-100 md:block">
        <p className="text-sm font-semibold text-amber-100">{work.title}</p>
        <p className="mt-1 text-xs text-stone-300">{work.author}</p>
        <p className="mt-1 text-[11px] text-stone-400">
          Edited by: {work.editor}
        </p>
        <span className="mt-3 inline-block rounded-full border border-amber-300/20 bg-amber-300/10 px-2 py-1 text-[10px] uppercase tracking-[0.18em] text-amber-200">
          Inducted
        </span>
      </div>
    </div>
  );
}

function EmptySlot() {
  return (
    <div className="relative flex items-end justify-center">
      <div className="h-[190px] w-[60px] rounded-md border border-dashed border-amber-200/15 bg-white/[0.02] shadow-[inset_0_0_0_1px_rgba(216,187,127,0.06)]" />
    </div>
  );
}

function HorizontalStack({ colors }) {
  return (
    <div className="flex w-[104px] flex-col justify-end gap-1 pb-1">
      {colors.map((color, i) => (
        <div
          key={i}
          className="relative h-6 rounded-sm border border-black/25 shadow-md"
          style={{ background: `linear-gradient(to right, ${color}, #1c1512)` }}
        >
          <div className="absolute inset-y-[5px] left-3 right-3 border-t border-[#d8bb7f]/25" />
        </div>
      ))}
    </div>
  );
}

function DecorativePlant() {
  return (
    <div className="flex h-[190px] w-[110px] items-end justify-center">
      <div className="relative flex items-end justify-center">
        <div className="h-12 w-16 rounded-t-md border border-black/20 bg-[#7b5a3f]" />
        <div className="absolute bottom-8 left-1/2 h-16 w-[2px] -translate-x-1/2 bg-[#607255]" />
        <div className="absolute bottom-16 left-5 h-14 w-7 rotate-[-30deg] rounded-full bg-[#5f7456]" />
        <div className="absolute bottom-20 left-10 h-16 w-7 rotate-[15deg] rounded-full bg-[#708860]" />
        <div className="absolute bottom-14 right-5 h-12 w-7 rotate-[28deg] rounded-full bg-[#556b4f]" />
      </div>
    </div>
  );
}

function DecorativeVase() {
  return (
    <div className="flex h-[190px] w-[82px] items-end justify-center">
      <div className="relative h-24 w-14 rounded-t-full rounded-b-[35%] border border-black/20 bg-[#ae8d69] shadow-lg">
        <div className="absolute left-1/2 top-2 h-3 w-8 -translate-x-1/2 rounded-full bg-[#c9a47b]" />
      </div>
    </div>
  );
}

function ShelfPillar() {
  return (
    <div className="hidden w-10 shrink-0 md:block">
      <div className="h-full rounded-xl bg-[linear-gradient(to_bottom,#5a3926,#2c1a12)] shadow-[inset_2px_0_0_rgba(255,255,255,0.05),inset_-2px_0_0_rgba(0,0,0,0.22)]" />
    </div>
  );
}

export default function Home() {
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <main className="relative min-h-screen bg-[#0b0807] text-white overflow-hidden">
      <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,_rgba(212,175,55,0.14),_transparent_22%),linear-gradient(to_bottom,_#1a120d,_#0b0807)] px-4 py-8 md:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(216,187,127,0.06)_0,rgba(216,187,127,0.06)_1px,transparent_1px,transparent_14px),repeating-linear-gradient(-45deg,rgba(216,187,127,0.045)_0,rgba(216,187,127,0.045)_1px,transparent_1px,transparent_14px)] opacity-25" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(216,187,127,0.10),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(212,175,55,0.12),transparent_35%)] opacity-80 mix-blend-screen" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mb-8 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.42em] text-amber-300">
              Archive of Excellence
            </p>
            <h1 className="text-4xl text-amber-50 md:text-6xl [font-family:Georgia,serif]">
              Gold Standard Library
            </h1>
          </div>

          <div className="rounded-[2.2rem] border border-amber-100/10 bg-[linear-gradient(to_bottom,rgba(30,18,12,0.92),rgba(15,10,8,0.95))] p-4 shadow-[0_35px_100px_rgba(0,0,0,0.65)] md:p-6">
            <div className="flex gap-4">
              <ShelfPillar />

              <div className="flex-1 space-y-10">
                {decorativeShelves.map((shelf, shelfIndex) => (
                  <div key={shelfIndex} className="relative">
                    <div className="absolute bottom-0 left-0 right-0 h-6 rounded-sm bg-[linear-gradient(to_right,#3c2619,#6f4730,#3c2619)] shadow-[0_10px_18px_rgba(0,0,0,0.4)]" />
                    <div className="relative flex flex-wrap items-end justify-center gap-4 px-3 pb-6 pt-3 md:gap-6">
                      {shelf.map((item, slotIndex) => {
                        const inducted =
                          item.kind === "slot"
                            ? findInductedWork(shelfIndex, slotIndex)
                            : null;

                        if (inducted) {
                          return (
                            <InductedBook
                              key={inducted.id}
                              work={inducted}
                              onOpen={setSelectedWork}
                            />
                          );
                        }

                        if (item.kind === "plant") {
                          return <DecorativePlant key={`${shelfIndex}-${slotIndex}`} />;
                        }

                        if (item.kind === "vase") {
                          return <DecorativeVase key={`${shelfIndex}-${slotIndex}`} />;
                        }

                        if (item.kind === "stack") {
                          return (
                            <HorizontalStack
                              key={`${shelfIndex}-${slotIndex}`}
                              colors={item.colors}
                            />
                          );
                        }

                        if (item.kind === "slot") {
                          return <EmptySlot key={`${shelfIndex}-${slotIndex}`} />;
                        }

                        return (
                          <DecorativeBook
                            key={`${shelfIndex}-${slotIndex}`}
                            item={item}
                          />
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              <ShelfPillar />
            </div>
          </div>
        </div>

        {selectedWork && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-4 backdrop-blur-sm"
            onClick={() => setSelectedWork(null)}
          >
            <div
              className="relative w-full max-w-xl rounded-[2rem] border border-amber-200/15 bg-[linear-gradient(to_bottom,_rgba(42,27,18,0.98),_rgba(17,11,8,0.98))] p-7 shadow-[0_30px_120px_rgba(0,0,0,0.72)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-stone-300 hover:bg-white/10"
                onClick={() => setSelectedWork(null)}
              >
                ✕
              </button>

              <div className="mb-5 flex justify-center rounded-xl bg-white p-3">
                <img src="/logo.png" alt="Software Finder" className="h-10 w-auto" />
              </div>

              <p className="mb-3 text-xs uppercase tracking-[0.35em] text-amber-300">
                Inducted work
              </p>

              <h3 className="text-3xl md:text-4xl leading-tight text-amber-50 [font-family:Georgia,serif]">
                {selectedWork.title}
              </h3>

              <p className="mt-2 text-sm text-stone-400">
                By {selectedWork.author}
              </p>

              <p className="mt-1 text-sm text-stone-400">
                Edited by: {selectedWork.editor}
              </p>

              <div className="my-6 flex items-center gap-3">
                <div className="h-px flex-1 bg-gradient-to-r from-transparent to-amber-200/30" />
                <div className="h-2 w-2 rounded-full bg-amber-300/60" />
                <div className="h-px flex-1 bg-gradient-to-l from-transparent to-amber-200/30" />
              </div>

              <p className="text-base leading-7 text-stone-300">
                {selectedWork.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={selectedWork.link}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full bg-amber-300 px-5 py-3 text-sm font-medium text-black hover:opacity-90"
                >
                  View piece
                </a>

                <button
                  className="rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm text-stone-200 hover:bg-white/10"
                  onClick={() => setSelectedWork(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}