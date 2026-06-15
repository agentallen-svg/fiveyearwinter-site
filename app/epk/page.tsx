"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function EPK() {
  const [bookingCopied, setBookingCopied] = useState(false);

  function copyBookingEmail() {
    navigator.clipboard.writeText('FiveYearWinterBand@gmail.com').then(() => {
      setBookingCopied(true);
      setTimeout(() => setBookingCopied(false), 2000);
    });
  }

  return (
    <main className="min-h-screen flex flex-col bg-ink text-charcoal font-body">

      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end justify-start overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/5YW_website_back.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="relative z-10 px-8 md:px-16 pb-16 max-w-4xl"
        >
          <p className="text-xs uppercase tracking-[0.4em] text-stone/70 mb-4">Electronic Press Kit</p>
          <h1 className="font-display text-6xl md:text-8xl font-black uppercase tracking-tight text-linen leading-none mb-3">
            Five Year<br />Winter
          </h1>
          <p className="text-stone/80 uppercase tracking-widest text-sm">Nashville, TN · Post-Hardcore</p>
        </motion.div>
      </section>

      {/* Quick links bar */}
      <nav className="border-y border-stone/10 bg-[#0f0e0c] py-4 px-8 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-6 justify-center">
          {['About', 'Music', 'Live', 'Press', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-xs uppercase tracking-[0.25em] text-stone/70 hover:text-linen transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </div>
      </nav>

      {/* About */}
      <section id="about" className="py-24 px-8 md:px-16 bg-[#0f0e0c]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xs uppercase tracking-[0.35em] text-stone/60 mb-4">About</p>
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-linen leading-tight mb-8">
              The Band
            </h2>
            <div className="space-y-5 text-stone/80 leading-relaxed">
              <p>
                Five Year Winter is a Nashville, TN based post-hardcore band blending the aggression and
                emotion of early 2000s post-hardcore and metalcore with a modern approach to songwriting.
              </p>
              <p>
                Drawing influence from seminal acts including Glassjaw, Poison the Well, Norma Jean, and
                Underoath, the band delivers a sound that balances heavy instrumentation, dynamic
                arrangements, and emotionally charged performances.
              </p>
              <p>
                Five Year Winter has shared the stage with Vampires Everywhere!, Saving Vice, and Cultus Black,
                continuing to establish its presence within the heavy music scene.
              </p>
              <p>
                As the band continues to evolve, Five Year Winter is currently writing its first full-length
                album, shifting toward a more experimental post-hardcore sound inspired by At the Drive-In and
                Fear Before the March of Flames. The album is slated for release in mid-2027.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-8"
          >
            {/* Members */}
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-stone/60 mb-4">Members</p>
              <div className="space-y-2">
                {['Zach — Vocals', 'Christian — Guitar', 'Luke — Bass'].map((m) => (
                  <p key={m} className="text-linen/80 text-sm tracking-wide">{m}</p>
                ))}
              </div>
            </div>

            <div className="w-full h-px bg-stone/10" />

            {/* Credits */}
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-stone/60 mb-4">Production</p>
              <div className="space-y-3 text-sm text-stone/80">
                <p><span className="text-stone/50">Produced &amp; Mixed by</span><br />
                  <span className="text-linen/80">Nathan Yarborough</span><br />
                  <span className="text-stone/50 text-xs">Deftones · Korn · Code Orange · Alice in Chains</span>
                </p>
                <p><span className="text-stone/50">Mastered by</span><br />
                  <span className="text-linen/80">Gene "Machine" Freeman</span><br />
                  <span className="text-stone/50 text-xs">Lamb of God · Every Time I Die · Clutch</span>
                </p>
              </div>
            </div>

            <div className="w-full h-px bg-stone/10" />

            {/* Links */}
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-stone/60 mb-4">Links</p>
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'Spotify', href: 'https://open.spotify.com/artist/7fQmxwIBDALIrUmP0XJ8qt' },
                  { label: 'Apple Music', href: 'https://music.apple.com/us/artist/five-year-winter/1781776877' },
                  { label: 'Instagram', href: 'https://www.instagram.com/fiveyearwinterband/' },
                  { label: 'YouTube', href: 'https://www.youtube.com/@fiveyearwinterband' },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-stone/20 text-stone/70 hover:border-linen/50 hover:text-linen px-4 py-1.5 text-xs uppercase tracking-widest transition-all duration-300"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Music */}
      <section id="music" className="py-24 px-8 md:px-16 bg-ink border-t border-stone/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-stone/60 mb-4">Music</p>
            <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight text-linen leading-tight">
              A Matter of Conviction
            </h2>
            <p className="text-stone/60 text-sm mt-2">Debut EP · Released May 9, 2026</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <video
                src="/album-cover-animated.webm"
                autoPlay
                loop
                muted
                playsInline
                className="w-full shadow-2xl rounded-sm"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
            >
              <div className="rounded-sm overflow-hidden shadow-2xl">
                <iframe
                  src="https://open.spotify.com/embed/album/3FMd3kjNWwuowvHtjL1Mdb?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Live / Press photos */}
      <section id="live" className="py-24 px-8 md:px-16 bg-[#0f0e0c] border-t border-stone/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-stone/60 mb-4">Live</p>
            <h2 className="font-display text-4xl font-black uppercase tracking-tight text-linen leading-tight">
              The Band
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="md:col-span-2"
            >
              <img
                src="/3YWblindwebcompressed.png"
                alt="Five Year Winter live"
                className="w-full h-auto rounded-sm shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <img
                src="/band-photo-blindfold.jpg"
                alt="Five Year Winter"
                className="w-full h-full object-cover rounded-sm shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <img
                src="/3YWwebcompressed.png"
                alt="Five Year Winter"
                className="w-full h-auto rounded-sm shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Press / Download */}
      <section id="press" className="py-24 px-8 md:px-16 bg-ink border-t border-stone/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-stone/60 mb-4">Press</p>
            <h2 className="font-display text-4xl font-black uppercase tracking-tight text-linen leading-tight">
              Assets
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: 'Band Logo', desc: 'PNG · White on transparent', href: '/5YW img logo white.png' },
              { label: 'Spotify', desc: 'Stream the EP', href: 'https://open.spotify.com/artist/7fQmxwIBDALIrUmP0XJ8qt' },
              { label: 'Apple Music', desc: 'Stream the EP', href: 'https://music.apple.com/us/artist/five-year-winter/1781776877' },
            ].map((asset, i) => (
              <motion.a
                key={asset.label}
                href={asset.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="border border-stone/15 hover:border-stone/40 p-6 transition-all duration-300 group"
              >
                <p className="text-linen/90 text-sm uppercase tracking-widest mb-1 group-hover:text-linen transition-colors">{asset.label}</p>
                <p className="text-stone/50 text-xs">{asset.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-8 md:px-16 bg-[#0f0e0c] border-t border-stone/10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-xl"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-stone/60 mb-4">Contact</p>
            <h2 className="font-display text-4xl font-black uppercase tracking-tight text-linen leading-tight mb-6">
              Booking &amp;<br />Inquiries
            </h2>
            <p className="text-stone/70 leading-relaxed mb-8">
              For booking, press, or other inquiries, reach out directly.
            </p>
            <button
              onClick={copyBookingEmail}
              className="border border-stone/30 text-stone/80 hover:border-linen hover:text-linen px-8 py-3 text-sm uppercase tracking-widest transition-all duration-300 font-body"
            >
              {bookingCopied ? 'Copied!' : 'FiveYearWinterBand@gmail.com'}
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-8 border-t border-stone/10 bg-ink">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display text-sm text-linen/30 tracking-widest uppercase">Five Year Winter</p>
          <a
            href="/"
            className="text-xs uppercase tracking-widest text-stone/50 hover:text-linen transition-colors duration-300"
          >
            ← Back to site
          </a>
        </div>
      </footer>
    </main>
  );
}
