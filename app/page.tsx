"use client";

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-void text-frost">
      {/* Hero */}
      <section className="flex-1 flex items-center justify-center px-6 py-24 text-center bg-gradient-to-b from-void to-black/80">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="max-w-5xl"
        >
          <h1 className="text-7xl md:text-9xl font-display font-black tracking-tighter text-blood uppercase mb-4 animate-glitch">
            Five Year Winter
          </h1>
          <p className="text-2xl md:text-4xl font-light mb-12">
            Nashville Post-Hardcore
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a
              href="https://open.spotify.com/artist/7fQmxwIBDALIrUmP0XJ8qt"
              target="_blank"
              className="bg-blood hover:bg-blood-dark text-void font-bold py-4 px-8 rounded-full text-lg transition-all"
            >
              Spotify
            </a>
            <a
              href="https://music.apple.com/us/artist/five-year-winter/1781776877"
              target="_blank"
              className="bg-blood hover:bg-blood-dark text-void font-bold py-4 px-8 rounded-full text-lg transition-all"
            >
              Apple Music
            </a>
            <a
              href="https://fiveyearwinter.printful.me/"
              target="_blank"
              className="border-2 border-blood text-blood hover:bg-blood hover:text-void font-bold py-4 px-8 rounded-full text-lg transition-all"
            >
              Merch
            </a>
            <a
              href="https://www.bandsintown.com/a/7419233-five-year-winter?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar"
              target="_blank"
              className="border-2 border-blood text-blood hover:bg-blood hover:text-void font-bold py-4 px-8 rounded-full text-lg transition-all"
            >
              Tickets
            </a>
          </div>
        </motion.div>
      </section>

      {/* About */}
      <section className="py-20 px-6 bg-black/50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-display font-bold text-blood mb-8"
          >
            About
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl leading-relaxed"
          >
            Five Year Winter is a post-hardcore/metalcore band from Nashville, Tennessee, formed in 2024. 
            Heavily influenced by the raw energy and emotional intensity of the early 2000s metalcore scene, 
            we fuse aggressive guitar riffs with haunting melodies and emotional vocals. 
            Currently tracking our upcoming EP — stay tuned.
          </motion.p>
        </div>
      </section>

      {/* Music */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-display font-bold text-blood text-center mb-12"
          >
            Music
          </motion.h2>
          <div className="aspect-video w-full max-w-3xl mx-auto rounded-xl overflow-hidden shadow-2xl shadow-blood/30">
            <iframe
              style={{ borderRadius: '12px' }}
              src="https://open.spotify.com/embed/artist/7fQmxwIBDALIrUmP0XJ8qt?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Shows */}
      <section className="py-20 px-6 bg-black/50">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-5xl font-display font-bold text-blood text-center mb-12"
          >
            Upcoming Shows
          </motion.h2>
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-void/80 border border-blood/30 p-6 rounded-lg hover:border-blood transition-all"
            >
              <h3 className="text-2xl font-bold text-blood mb-2">April 23, 2026</h3>
              <p className="text-xl">Cobra Nashville</p>
              <p className="text-lg mt-2">w/ The Broken View, Devil's Cut, Crooked Souls</p>
              <p className="mt-4 text-frost/80">
                Tickets: <a href="https://www.bandsintown.com/a/7419233-five-year-winter" className="text-blood underline">Buy Tickets</a>
              </p>
            </motion.div>
          </div>
          <p className="text-center mt-12 text-lg">
            More dates & updates on{' '}
            <a href="https://linktr.ee/fiveyearwinterband" className="text-blood hover:underline">
              Linktree
            </a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-blood/20 bg-black/80">
        <p className="text-lg">
          &copy; {new Date().getFullYear()} Five Year Winter • Nashville, TN
        </p>
        <div className="mt-6 flex justify-center gap-8 text-sm flex-wrap">
          <a href="https://www.instagram.com/fiveyearwinterband/" className="text-blood hover:text-blood-dark transition-colors">Instagram</a>
          <a href="https://linktr.ee/fiveyearwinterband" className="text-blood hover:text-blood-dark transition-colors">Linktree</a>
          <a href="https://open.spotify.com/artist/7fQmxwIBDALIrUmP0XJ8qt" className="text-blood hover:text-blood-dark transition-colors">Spotify</a>
          <a href="https://music.apple.com/us/artist/five-year-winter/1781776877" className="text-blood hover:text-blood-dark transition-colors">Apple Music</a>
          <a href="https://www.tiktok.com/@fiveyearwinterband" className="text-blood hover:text-blood-dark transition-colors">TikTok</a>
          <a href="https://www.youtube.com/@fiveyearwinterband" className="text-blood hover:text-blood-dark transition-colors">YouTube</a>
          <a href="https://fiveyearwinter.printful.me/" className="text-blood hover:text-blood-dark transition-colors">Merch</a>
        </div>
      </footer>
    </main>
  );
}