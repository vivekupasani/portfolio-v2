"use client"
import { useRef, useEffect } from "react";
import { Globe, ArrowRight, Instagram, Twitter } from "lucide-react";

const liquidGlassStyle = `
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&display=swap');

.liquid-glass {
  background: rgba(255, 255, 255, 0.01);
  background-blend-mode: luminosity;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  border: none;
  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.1);
  position: relative;
  overflow: hidden;
}

.liquid-glass::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  padding: 1.4px;
  background: linear-gradient(
    180deg,
    rgba(255,255,255,0.45) 0%,
    rgba(255,255,255,0.15) 20%,
    rgba(255,255,255,0) 40%,
    rgba(255,255,255,0) 60%,
    rgba(255,255,255,0.15) 80%,
    rgba(255,255,255,0.45) 100%
  );
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}
`;

export default function HeroSection() {
    const videoRef = useRef<HTMLVideoElement>(null);
    const animFrameRef = useRef<number | null>(null);
    const fadingOutRef = useRef(false);

    useEffect(() => {
        const video = videoRef.current!;
        if (!video) return;

        function cancelAnim() {
            if (animFrameRef.current !== null) {
                cancelAnimationFrame(animFrameRef.current);
                animFrameRef.current = null;
            }
        }

        function fadeIn(fromOpacity?: number) {
            cancelAnim();
            const currentOpacity = parseFloat(video.style.opacity);
            const startOpacity = fromOpacity !== undefined ? fromOpacity : (isNaN(currentOpacity) ? 0 : currentOpacity);
            const startTime = performance.now();
            const duration = 500;

            function step(now: number) {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                video.style.opacity = String(startOpacity + (1 - startOpacity) * progress);
                if (progress < 1) {
                    animFrameRef.current = requestAnimationFrame(step);
                } else {
                    animFrameRef.current = null;
                }
            }
            animFrameRef.current = requestAnimationFrame(step);
        }

        function fadeOut(fromOpacity?: number) {
            cancelAnim();
            const currentOpacity = parseFloat(video.style.opacity);
            const startOpacity = fromOpacity !== undefined ? fromOpacity : (isNaN(currentOpacity) ? 1 : currentOpacity);
            const startTime = performance.now();
            const duration = 500;

            function step(now: number) {
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1);
                video.style.opacity = String(startOpacity * (1 - progress));
                if (progress < 1) {
                    animFrameRef.current = requestAnimationFrame(step);
                } else {
                    animFrameRef.current = null;
                }
            }
            animFrameRef.current = requestAnimationFrame(step);
        }

        function handleTimeUpdate() {
            if (!video.duration) return;
            const remaining = video.duration - video.currentTime;
            if (remaining <= 0.55 && !fadingOutRef.current) {
                fadingOutRef.current = true;
                const currentOpacity = parseFloat(video.style.opacity);
                const opacity = isNaN(currentOpacity) ? 1 : currentOpacity;
                fadeOut(opacity);
            }
        }

        function handleEnded() {
            fadingOutRef.current = false;
            cancelAnim();
            video.style.opacity = "0";
            setTimeout(() => {
                video.currentTime = 0;
                video.play().then(() => {
                    fadeIn(0);
                }).catch(() => { });
            }, 100);
        }

        function handleCanPlay() {
            video.style.opacity = "0";
            fadeIn(0);
        }

        video.style.opacity = "0";
        video.addEventListener("canplay", handleCanPlay, { once: true });
        video.addEventListener("timeupdate", handleTimeUpdate);
        video.addEventListener("ended", handleEnded);

        return () => {
            cancelAnim();
            video.removeEventListener("canplay", handleCanPlay);
            video.removeEventListener("timeupdate", handleTimeUpdate);
            video.removeEventListener("ended", handleEnded);
        };
    }, []);

    return (
        <>
            <style>{liquidGlassStyle}</style>
            <div className="min-h-screen bg-black overflow-hidden relative flex flex-col">
                {/* Background Video */}
                <div className="absolute inset-0 z-0">
                    <video
                        ref={videoRef}
                        className="absolute inset-0 w-full h-full object-cover translate-y-[17%]"
                        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_115001_bcdaa3b4-03de-47e7-ad63-ae3e392c32d4.mp4"
                        muted
                        autoPlay
                        playsInline
                        loop={false}
                        style={{ opacity: 0 }}
                    />
                    {/* Dark cinematic overlay */}
                    <div className="absolute inset-0 bg-black/30" />
                </div>

                {/* Navigation */}
                <nav className="relative z-20 pl-6 pr-6 py-6">
                    <div className="liquid-glass rounded-full px-6 py-3 flex items-center justify-between max-w-5xl mx-auto">
                        {/* Left: Logo + Nav Links */}
                        <div className="flex items-center gap-8">
                            {/* Logo */}
                            <div className="flex items-center gap-2">
                                <Globe size={24} className="text-white" />
                                <span className="text-white font-semibold text-lg">ugc</span>
                            </div>
                            {/* Nav Links */}
                            <div className="hidden md:flex items-center gap-8">
                                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                                    Features
                                </a>
                                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                                    Pricing
                                </a>
                                <a href="#" className="text-white/80 hover:text-white transition-colors text-sm font-medium">
                                    About
                                </a>
                            </div>
                        </div>
                        {/* Right: Auth buttons */}
                        <div className="flex items-center gap-4">
                            <button className="text-white text-sm font-medium hover:text-white/80 transition-colors">
                                Sign Up
                            </button>
                            <button className="liquid-glass rounded-full px-6 py-2 text-white text-sm font-medium hover:bg-white/5 transition-colors">
                                Login
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Hero Content */}
                <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-6 py-12 text-center -translate-y-[20%]">
                    {/* Heading */}
                    <h1
                        className="text-5xl md:text-6xl lg:text-7xl text-white mb-8 tracking-tight whitespace-nowrap"
                        style={{ fontFamily: "'Instrument Serif', serif" }}
                    >
                        Built for the curious
                    </h1>

                    {/* Input + Subtitle + Manifesto */}
                    <div className="max-w-xl w-full space-y-4">
                        {/* Email input bar */}
                        <div className="liquid-glass rounded-full pl-6 pr-2 py-2 flex items-center gap-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 bg-transparent text-white placeholder:text-white/40 text-base outline-none min-w-0"
                            />
                            <button className="bg-white rounded-full p-3 text-black flex items-center justify-center flex-shrink-0 hover:bg-white/90 transition-colors">
                                <ArrowRight size={20} />
                            </button>
                        </div>
                        {/* Subtitle */}
                        <p className="text-white text-sm leading-relaxed px-4">
                            Stay updated with the latest news and insights. Subscribe to our newsletter today and never miss out on
                            exciting updates.
                        </p>
                        {/* Manifesto button */}
                        <div className="flex justify-center">
                            <button className="liquid-glass rounded-full px-8 py-3 text-white text-sm font-medium hover:bg-white/5 transition-colors">
                                Read our manifesto
                            </button>
                        </div>
                    </div>
                </div>

                {/* Social Icons Footer */}
                <div className="relative z-10 flex justify-center gap-4 pb-12">
                    <button
                        aria-label="Instagram"
                        className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
                    >
                        <Instagram size={20} />
                    </button>
                    <button
                        aria-label="Twitter"
                        className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
                    >
                        <Twitter size={20} />
                    </button>
                    <button
                        aria-label="Website"
                        className="liquid-glass rounded-full p-4 text-white/80 hover:text-white hover:bg-white/5 transition-all"
                    >
                        <Globe size={20} />
                    </button>
                </div>
            </div>
        </>
    );
}