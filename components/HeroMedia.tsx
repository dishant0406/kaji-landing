"use client";

import { useEffect, useRef, useState } from "react";

type NetworkConnection = {
  effectiveType?: string;
  saveData?: boolean;
};

function shouldSkipVideo() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const connection = (navigator as Navigator & { connection?: NetworkConnection }).connection;
  const slowNetwork = connection?.saveData || ["slow-2g", "2g"].includes(connection?.effectiveType ?? "");

  return reducedMotion || slowNetwork;
}

export function HeroMedia() {
  const ref = useRef<HTMLVideoElement>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    const video = ref.current;

    if (!video || shouldSkipVideo()) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setEnabled(true);
        observer.disconnect();
      },
      { rootMargin: "300px" },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!enabled) {
      return;
    }

    ref.current?.load();
    ref.current?.play().catch(() => undefined);
  }, [enabled]);

  return (
    <section className="w-full pb-16 pt-12 md:pt-16">
      <video
        ref={ref}
        aria-label="Kaji app demo"
        autoPlay={enabled}
        className="mx-auto block h-auto w-full max-w-7xl object-contain"
        loop
        muted
        playsInline
        poster="/media/kaji-hero-poster.webp"
        preload="none"
      >
        {enabled ? (
          <>
            <source media="(max-width: 767px)" src="/media/kaji-hero-mobile.webm" type="video/webm" />
            <source media="(max-width: 767px)" src="/media/kaji-hero-mobile.mp4" type="video/mp4" />
            <source src="/media/kaji-hero-desktop.webm" type="video/webm" />
            <source src="/media/kaji-hero-desktop.mp4" type="video/mp4" />
          </>
        ) : null}
      </video>
    </section>
  );
}
