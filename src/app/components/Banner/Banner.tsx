"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const Banner = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const brushWrapperRef = useRef<HTMLDivElement>(null);
  const powderRef = useRef<HTMLDivElement>(null);
  const textContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      const createSplash = () => {
        const colors = ["#d63384", "#f472b6", "#ffffff"];
        for (let i = 0; i < 40; i++) {
          const p = document.createElement("div");
          p.className =
            "absolute w-2 h-2 rounded-full z-20 pointer-events-none";
          p.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];
          powderRef.current?.appendChild(p);

          const angle = Math.random() * -Math.PI;
          const velocity = 80 + Math.random() * 200;

          gsap.to(p, {
            x: Math.cos(angle) * velocity,
            y: Math.sin(angle) * velocity,
            opacity: 0,
            scale: 0,
            duration: 1,
            ease: "power2.out",
            onComplete: () => p.remove(),
          });
        }
      };

      // Main Drop Animation
      tl.fromTo(
        brushWrapperRef.current,
        { scale: 5, opacity: 0, filter: "blur(20px)", y: -150 },
        {
          scale: 1,
          opacity: 1,
          filter: "blur(0px)",
          y: 0,
          duration: 0.8,
          ease: "power4.in",
          onComplete: () => {
            createSplash();
            gsap.to(containerRef.current, {
              x: 3,
              y: 3,
              duration: 0.05,
              repeat: 5,
              yoyo: true,
              clearProps: "all",
            });
          },
        },
      );

      tl.fromTo(
        textContentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" },
        "-=0.1",
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen bg-white overflow-hidden flex items-center justify-center"
    >
      {/* THE BRUSH (BACKGROUND) */}
      <div
        ref={brushWrapperRef}
        className="relative w-full h-full z-10 flex items-center justify-center"
      >
        <Image
          src="/images/banner.webp"
          alt="Makeup Brush"
          fill
          priority
          className="object-cover opacity-90"
          // INLINE STYLE FOR PRECISE CENTERING
          // 80% focuses on the right-side brush. 50% is standard center.
          style={{
            objectPosition: "clamp(50%, 75%, 85%) 30%",
          }}
        />

        {/* POINT OF SPLASH - Centered for Mobile */}
        <div
          ref={powderRef}
          className="absolute top-[35%] left-1/2 -translate-x-1/2 min-[1200px]:left-auto min-[1200px]:translate-x-0 min-[1200px]:top-[30%] min-[1200px]:right-[30%] w-1 h-1"
        ></div>
      </div>

      {/* THE TEXT CONTENT */}
      <div
        ref={textContentRef}
        className="absolute inset-0 z-30 flex flex-col items-center justify-center px-4 pointer-events-none select-none"
      >
        <h1 className="text-5xl md:text-7xl min-[1200px]:text-9xl font-bold text-center flex flex-col min-[1200px]:block leading-tight drop-shadow-lg">
          <span className="text-black">NAGA</span>
          <span className="text-pink-500 min-[1200px]:ml-10">SUSHMITHA</span>
        </h1>
        <h4 className="text-lg md:text-2xl min-[1200px]:text-4xl font-bold text-black pt-6 md:pt-10 tracking-[0.2em] uppercase">
          Bridal Makeup Artist
        </h4>
      </div>
    </div>
  );
};

export default Banner;
