'use client';

import { ReactLenis } from 'lenis/react';

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.08,
        duration: 1.2,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        // touchMultiplier: 0 — do not intercept native touch scroll on Android/iOS.
        // Lenis smooth-wheel runs on desktop; touch devices use native scroll so
        // the browser's IntersectionObserver stays in sync and framer-motion
        // whileInView animations trigger correctly on Android.
        touchMultiplier: 0,
      }}
    >
      {children}
    </ReactLenis>
  );
}
