"use client";

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-ash text-charcoal font-body">

      {/* Hero — EP artwork full bleed */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background: album art with ink overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/5YW_website_back.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#1a1814]/95" />

        {/* Ink splatter texture overlay */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `radial-gradient(ellipse at 15% 20%, rgba(0,0,0,0.8) 0%, transparent 50%),
                              radial-gradient(ellipse at 85% 10%, rgba(0,0,0,0.6) 0%, transparent 40%)`,
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          {/* EP badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="relative inline-flex items-center justify-center mb-6 px-5 py-2"
          >
            {/* Dissipating ripple rings */}
            <motion.span
              className="absolute inset-0 border border-linen/50 rounded-sm pointer-events-none"
              animate={{ scale: [1, 2.4], opacity: [0.6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.span
              className="absolute inset-0 border border-linen/30 rounded-sm pointer-events-none"
              animate={{ scale: [1, 2.4], opacity: [0.4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.75 }}
            />
            {/* Badge text with pulse */}
            <motion.p
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-sm uppercase tracking-[0.25em] text-linen/90 font-body text-center sm:whitespace-nowrap"
            >
              Debut EP — Out Now on All Major Streaming Platforms!
            </motion.p>
          </motion.div>

          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-linen leading-none mb-4">
            Five Year<br />Winter
          </h1>

          <p className="font-display text-2xl md:text-3xl text-linen/90 tracking-widest uppercase mb-2 mt-6">
            A Matter of Conviction
          </p>

          <p className="text-sm text-linen/70 tracking-widest uppercase mb-12">
            Nashville Post-Hardcore
          </p>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 justify-center">
            {[
              { label: 'Spotify', href: 'https://open.spotify.com/artist/7fQmxwIBDALIrUmP0XJ8qt' },
              { label: 'Apple Music', href: 'https://music.apple.com/us/artist/five-year-winter/1781776877' },
              { label: 'Merch', href: 'https://fiveyearwinter.printful.me/' },
              { label: 'Tickets', href: 'https://www.bandsintown.com/a/7419233-five-year-winter?came_from=257&utm_medium=web&utm_source=home&utm_campaign=search_bar' },
              { label: 'Booking', href: 'mailto:fiveyearwinterband@gmail.com' },
            ].map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-linen/40 text-linen hover:bg-linen hover:text-ink px-8 py-3 text-sm uppercase tracking-widest transition-all duration-300 font-body"
              >
                {btn.label}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-stone/50">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
            className="w-px h-8 bg-gradient-to-b from-stone/50 to-transparent"
          />
        </motion.div>
      </section>

      {/* EP Feature */}
      <section className="py-24 px-6 bg-[#1a1814]">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="/og-image.jpg"
                alt="A Matter of Conviction EP"
                className="w-full shadow-2xl rounded-sm"
                style={{ filter: 'contrast(1.05)' }}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-linen"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-stone/60 mb-4">Debut EP</p>
              <h2 className="font-display text-4xl md:text-5xl font-black uppercase tracking-tight mb-6 leading-tight">
                A Matter of<br />Conviction
              </h2>
              <p className="text-stone/80 leading-relaxed mb-8 font-body">
                Five Year Winter is a post-hardcore/metalcore band from Nashville, Tennessee, formed in 2024.
                Heavily influenced by the raw energy and emotional intensity of the early 2000s metalcore scene,
                we fuse aggressive guitar riffs with haunting melodies and emotional vocals.
                Debut EP <em>A Matter of Conviction</em> drops May 9th.
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://distrokid.com/hyperfollow/fiveyearwinter1/a-matter-of-conviction?ref=release&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnK80nfJggv5513tt2VrvEg2tYi84tevVdvQm1geWKSJnzmj_Qqty2ECrT21w_aem_o45u_KaZLe0806bjVSsYnA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-stone/40 text-stone hover:border-linen hover:text-linen px-6 py-2 text-xs uppercase tracking-widest transition-all duration-300"
                >
                  Pre-Save Now
                </a>
                <a
                  href="https://music.apple.com/us/artist/five-year-winter/1781776877"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-stone/40 text-stone hover:border-linen hover:text-linen px-6 py-2 text-xs uppercase tracking-widest transition-all duration-300"
                >
                  Apple Music
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Spotify embed */}
      <section className="py-16 px-6 bg-ink">
        <div className="max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-stone/80 text-center mb-8"
          >
            Music
          </motion.p>
          <div className="rounded-sm overflow-hidden shadow-2xl">
            <iframe
              src="https://open.spotify.com/embed/artist/7fQmxwIBDALIrUmP0XJ8qt?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Band photo with blindfold scroll effect */}
      <section className="py-24 px-6 bg-[#1a1814]">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-stone/80 mb-12"
          >
            The Band
          </motion.p>

          <div className="relative mx-auto max-w-2xl">
            <img
              src="/3YWwebcompressed.png"
              alt="Five Year Winter — Zach, Christian, and Luke"
              className="w-full h-auto rounded-sm shadow-2xl"
            />
            <motion.img
              src="/3YWblindwebcompressed.png"
              alt="Five Year Winter — blindfold"
              className="absolute inset-0 w-full h-auto rounded-sm shadow-2xl"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-sm uppercase tracking-[0.2em] text-stone/80"
          >
            Zach — Vocals&nbsp;&nbsp;•&nbsp;&nbsp;Christian — Guitar&nbsp;&nbsp;•&nbsp;&nbsp;Luke — Bass
          </motion.p>
        </div>
      </section>

      {/* Shows */}
      <section className="py-24 px-6 bg-ink">
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-xs uppercase tracking-[0.3em] text-stone/80 text-center mb-12"
          >
            Upcoming Shows
          </motion.p>

          <div className="space-y-px">
            {[
              {
                date: 'May 22, 2026',
                venue: 'The Underdog',
                support: null,
                tickets: null,
              },
              {
                date: 'May 23, 2026',
                venue: 'The Mockingbird Theater',
                support: null,
                tickets: null,
              },
              {
                date: 'June 16, 2026',
                venue: 'Cobra',
                support: 'SavingVice, Roderick, Resider, Valor',
                tickets: null,
              },
              {
                date: 'July 18, 2026',
                venue: 'The End',
                support: null,
                tickets: null,
              },
              {
                date: 'August 29, 2026',
                venue: 'The Boneyard Skatepark',
                support: null,
                tickets: null,
              },
            ].map((show, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="border-t border-stone/10 py-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 group hover:border-stone/30 transition-colors"
              >
                <div>
                  <p className="font-display text-xl text-linen tracking-wide">{show.date}</p>
                  <p className="text-stone/70 text-sm mt-1 uppercase tracking-widest">{show.venue}</p>
                  {show.support && <p className="text-stone/50 text-xs mt-1">w/ {show.support}</p>}
                </div>
                {show.tickets ? (
                  <a
                    href={show.tickets}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-stone/30 text-stone/70 hover:border-linen hover:text-linen px-6 py-2 text-xs uppercase tracking-widest transition-all duration-300 whitespace-nowrap self-start sm:self-center"
                  >
                    Tickets
                  </a>
                ) : (
                  <span className="text-xs uppercase tracking-widest text-stone/30 self-start sm:self-center">Coming Soon</span>
                )}
              </motion.div>
            ))}
            <div className="border-t border-stone/10" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-stone/10 bg-[#0f0e0c]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-lg text-linen/40 tracking-widest uppercase mb-6">
            Five Year Winter
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-xs uppercase tracking-widest text-stone/70">
            {[
              { label: 'Merch', href: 'https://fiveyearwinter.printful.me/' },
              { label: 'Instagram', href: 'https://www.instagram.com/fiveyearwinterband/' },
              { label: 'TikTok', href: 'https://www.tiktok.com/@fiveyearwinterband' },
              { label: 'YouTube', href: 'https://www.youtube.com/@fiveyearwinterband' },
              { label: 'Apple Music', href: 'https://music.apple.com/us/artist/five-year-winter/1781776877' },
              { label: 'Spotify', href: 'https://open.spotify.com/artist/7fQmxwIBDALIrUmP0XJ8qt' },
              { label: 'Tour Dates', href: 'https://www.bandsintown.com/a/7419233?came_from=206' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-linen transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>
          <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-stone/80">
            &copy; {new Date().getFullYear()} Five Year Winter • Nashville, TN
          </p>
        </div>
      </footer>
    </main>
  );
}