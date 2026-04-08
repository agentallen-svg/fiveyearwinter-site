// app/page.tsx
"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [blindfoldOpacity, setBlindfoldOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Blindfolds start fading in once user scrolls past hero (~600px) and max out around 900px
      const progress = Math.min(Math.max((scrollY - 600) / 300, 0), 1);
      setBlindfoldOpacity(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style jsx global>{`
        @keyframes glitch {
          0% { transform: translate(0); }
          20% { transform: translate(-2px, 2px); }
          40% { transform: translate(-2px, -2px); }
          60% { transform: translate(2px, 2px); }
          80% { transform: translate(2px, -2px); }
          100% { transform: translate(0); }
        }
        .glitch {
          animation: glitch 0.3s infinite linear alternate;
          text-shadow: 
            -2px 0 #ff0000,
             2px 0 #00ffff;
        }
        .vignette {
          position: relative;
        }
        .vignette::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at center, transparent 60%, rgba(0, 0, 0, 0.85) 100%);
          pointer-events: none;
          z-index: 2;
        }
        .blindfold {
          position: absolute;
          background: rgba(0, 0, 0, 0.92);
          border-top: 6px solid #ff0000;
          border-bottom: 6px solid #ff0000;
          box-shadow: 0 0 20px #ff0000;
          z-index: 3;
          pointer-events: none;
        }
      `}</style>

      <div className="min-h-screen bg-black text-white font-sans">
        {/* HERO - EP Focal Point */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
          {/* EP Artwork as visible background treatment */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay"
            style={{ backgroundImage: "url('/og-image.jpg')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black" />
          
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <h1 className="text-[5.5rem] md:text-[7rem] font-black tracking-[-0.07em] leading-none glitch text-white mb-4">
              FIVE YEAR WINTER
            </h1>
            <p className="text-4xl md:text-6xl font-light tracking-widest text-red-500 mb-8">
              A MATTER OF CONVICTION
            </p>
            <div className="flex gap-6 justify-center">
              <a
                href="https://open.spotify.com/artist/0hgxOKytNracFDmmeKvBEl"
                target="_blank"
                className="px-8 py-4 bg-red-600 hover:bg-red-700 transition-colors text-lg font-medium"
              >
                LISTEN ON SPOTIFY
              </a>
              <a
                href="https://fiveyearwinter.printful.me/"
                target="_blank"
                className="px-8 py-4 border border-red-500 hover:bg-red-500/10 transition-colors text-lg font-medium"
              >
                MERCH
              </a>
            </div>
          </div>

          {/* Subtle red glow at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-red-500/10 to-transparent" />
        </section>

        {/* BAND PHOTO with vignette + scroll blindfold effect */}
        <section className="relative py-16 px-6 max-w-5xl mx-auto">
          <div className="vignette mx-auto max-w-4xl relative">
            <img
              src="/band-photo.jpg"
              alt="Five Year Winter"
              className="w-full rounded-lg shadow-2xl"
            />
            
            {/* Blindfold overlays (fade in on scroll) - positions approximate for typical band photo; tweak as needed */}
            {/* Blindfold 1 - left member eyes */}
            <div
              className="blindfold left-[18%] top-[38%] w-[22%] h-[14%]"
              style={{ opacity: blindfoldOpacity }}
            />
            {/* Blindfold 2 - center member eyes */}
            <div
              className="blindfold left-[38%] top-[35%] w-[24%] h-[14%]"
              style={{ opacity: blindfoldOpacity }}
            />
            {/* Blindfold 3 - right member eyes */}
            <div
              className="blindfold left-[62%] top-[37%] w-[22%] h-[14%]"
              style={{ opacity: blindfoldOpacity }}
            />
            
            {/* Optional red glow line across blindfolds */}
            <div
              className="absolute left-0 right-0 top-1/2 h-px bg-red-500/30 pointer-events-none z-10"
              style={{ opacity: blindfoldOpacity * 0.6 }}
            />
          </div>
          <p className="text-center text-xs text-red-500/60 mt-4 tracking-widest">
            SCROLL FOR THE CONVICTION
          </p>
        </section>

        {/* ABOUT */}
        <section className="max-w-3xl mx-auto px-6 py-16 border-t border-red-900">
          <p className="text-lg leading-relaxed text-gray-300">
            Five Year Winter is a post-hardcore/metalcore band from Nashville, Tennessee, formed in 2024. Heavily influenced by the raw energy and emotional intensity of the early 2000s metalcore scene, we fuse aggressive guitar riffs with haunting melodies and emotional vocals. Recently finished recording our upcoming EP - release is imminent.
          </p>
        </section>

        {/* UPCOMING SHOWS */}
        <section className="bg-zinc-950 py-16 px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-red-500 text-3xl font-bold mb-10 text-center">UPCOMING SHOWS</h2>
            
            <div className="space-y-8">
              {/* Show 1 */}
              <div className="flex flex-col md:flex-row gap-6 items-start border-l-4 border-red-500 pl-6">
                <div className="md:w-48">
                  <div className="text-sm font-medium">APRIL 23, 2026</div>
                  <div className="text-2xl font-bold">7:00 PM</div>
                </div>
                <div className="flex-1">
                  <div className="text-xl">The Cobra Nashville</div>
                  <div className="text-red-400">w/ The Broken View, Devil&apos;s Cut, Crooked Souls</div>
                  <a
                    href="https://www.bandsintown.com/t/105012345" // replace with actual BIT link
                    target="_blank"
                    className="inline-block mt-3 px-6 py-2 border border-red-500 hover:bg-red-500 hover:text-black transition-colors text-sm font-medium"
                  >
                    BUY TICKETS
                  </a>
                </div>
              </div>

              {/* Show 2 */}
              <div className="flex flex-col md:flex-row gap-6 items-start border-l-4 border-red-500 pl-6">
                <div className="md:w-48">
                  <div className="text-sm font-medium">JUNE 16, 2026</div>
                  <div className="text-2xl font-bold">7:00 PM</div>
                </div>
                <div className="flex-1">
                  <div className="text-xl">The Cobra Nashville</div>
                  <div className="text-red-400">w/ SavingVice, Roderick, Resider, Valor</div>
                  <span className="inline-block mt-3 px-6 py-2 border border-red-500/30 text-red-500/50 text-sm font-medium">
                    TICKETS: COMING SOON
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MUSIC - Spotify embed, no header */}
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <iframe
            style={{ borderRadius: "12px" }}
            src="https://open.spotify.com/embed/artist/0hgxOKytNracFDmmeKvBEl?utm_source=generator"
            width="100%"
            height="380"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
            className="mx-auto"
          ></iframe>
        </section>

        {/* BUTTON ROW */}
        <div className="max-w-3xl mx-auto px-6 pb-16 flex flex-wrap gap-4 justify-center">
          <a
            href="https://open.spotify.com/artist/0hgxOKytNracFDmmeKvBEl"
            target="_blank"
            className="px-10 py-4 bg-[#1DB954] hover:bg-[#1ed760] text-black font-medium flex items-center gap-2"
          >
            <span>SPOTIFY</span>
          </a>
          <a
            href="https://music.apple.com/us/artist/five-year-winter/1234567890" // replace with real Apple link when available
            target="_blank"
            className="px-10 py-4 border border-white hover:bg-white hover:text-black font-medium"
          >
            APPLE MUSIC
          </a>
          <a
            href="https://fiveyearwinter.printful.me/"
            target="_blank"
            className="px-10 py-4 border border-red-500 hover:bg-red-500 hover:text-black font-medium"
          >
            MERCH
          </a>
          <a
            href="https://www.bandsintown.com/a/12345678-five-year-winter" // replace with real BIT artist link
            target="_blank"
            className="px-10 py-4 border border-white hover:bg-white hover:text-black font-medium"
          >
            TICKETS
          </a>
        </div>

        {/* FOOTER SOCIALS (keep your current links) */}
        <footer className="border-t border-red-900 py-8 text-center text-xs text-red-500/60">
          <div className="flex justify-center gap-8 mb-4">
            <a href="https://x.com/fiveyearwinter" target="_blank">X</a>
            <a href="https://instagram.com/fiveyearwinter" target="_blank">INSTAGRAM</a>
            <a href="https://tiktok.com/@fiveyearwinter" target="_blank">TIKTOK</a>
            {/* add any other platforms you use */}
          </div>
          <p>© 2026 FIVE YEAR WINTER • NASHVILLE, TN</p>
        </footer>
      </div>
    </>
  );
}