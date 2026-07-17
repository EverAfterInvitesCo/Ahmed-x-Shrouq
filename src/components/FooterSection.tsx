import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook } from 'lucide-react';
import { GoldDivider } from './GoldOrnaments';

export const FooterSection: React.FC = () => {
  return (
    <footer
      id="footer-section"
      className="relative py-10 px-6 bg-champagne/30 text-stone-600 border-t border-gold-light/25 select-none"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
        {/* Elegant sentiment before footer details */}
        <motion.p
          id="footer-sentiment"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="font-playfair text-2xl md:text-3xl text-stone-850 font-light tracking-wide mb-6 italic"
        >
          The night won&rsquo;t be complete without you
        </motion.p>

        {/* Subtle separator gold divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0.5 }}
          whileInView={{ opacity: 0.7, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="w-full flex justify-center mb-6"
        >
          <GoldDivider />
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex space-x-6 justify-center mb-8"
        >
          <a href="https://www.instagram.com/_everafterinvites_/" target="_blank" rel="noopener noreferrer" className="text-gold-dark hover:text-stone-900 transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61591686334310" target="_blank" rel="noopener noreferrer" className="text-gold-dark hover:text-stone-900 transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <a href="https://www.tiktok.com/@_everafterinvites_" target="_blank" rel="noopener noreferrer" className="text-gold-dark hover:text-stone-900 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-3.9V2.5h-3.45v13.67a2.89 2.89 0 0 1-5.77 0 2.89 2.89 0 0 1 2.89-2.89h.5V10h-.5a6.39 6.39 0 0 0-6.39 6.39 6.39 6.39 0 0 0 6.39 6.39h.56A6.39 6.39 0 0 0 21 16.39V6.69z"/>
            </svg>
          </a>
        </motion.div>

        {/* Initials Accent */}
        <motion.h2
          id="footer-initials"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.1 }}
          className="font-cinzel text-2xl md:text-3xl text-gold-dark font-medium tracking-[0.4em] mb-2"
        >
          A<span className="font-decorative text-gold text-xl md:text-2xl mx-1 font-normal lowercase tracking-normal">x</span>S
        </motion.h2>

        {/* Brand Credit */}
        <motion.p
          id="footer-credit"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 0.65, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="font-cinzel text-[8px] md:text-[9px] tracking-[0.35em] text-stone-500 font-medium uppercase"
        >
          Made with love by EverAfterInvites
        </motion.p>

        {/* Small Year footer */}
        <motion.span
          id="footer-year"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-sans text-[8px] text-stone-400 mt-4 tracking-widest block"
        >
          &copy; {new Date().getFullYear()} Ahmed &amp; Shrouk. All Rights Reserved.
        </motion.span>
      </div>
    </footer>
  );
};
