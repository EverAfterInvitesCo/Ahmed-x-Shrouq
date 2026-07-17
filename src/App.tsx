/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef } from 'react';
import { AnimatePresence } from 'motion/react';
import { OpeningIntro } from './components/OpeningIntro';
import { HeroSection } from './components/HeroSection';
import { QuranSection } from './components/QuranSection';
import { CountdownSection } from './components/CountdownSection';
import { VenueSection } from './components/VenueSection';
import { FooterSection } from './components/FooterSection';
import { MusicPlayer } from './components/MusicPlayer';

export default function App() {
  const [introFinished, setIntroFinished] = useState(false);
  const musicRef = useRef<any>(null); // Reference to control the music

  const handleIntroComplete = () => {
    setIntroFinished(true);
    // Trigger the music to play once the intro animation finishes
    if (musicRef.current) {
      musicRef.current.playMusic();
    }
  };

  return (
    <div className="relative min-h-screen bg-ivory text-stone-800 selection:bg-gold-light selection:text-gold-dark">
      {/* 
        Main Website: 
        Pre-mounted underneath with low opacity, unlocking overflow and fading in 
        beautifully once the envelope opening animation concludes.
      */}
      
      {/* Music Player with reference to trigger playback */}
      <MusicPlayer ref={musicRef} />

      <div 
        className={`w-full transition-opacity duration-[1200ms] ease-out ${
          introFinished ? 'opacity-100' : 'opacity-0 h-screen overflow-hidden'
        }`}
      >
        <HeroSection />
        <QuranSection />
        <CountdownSection />
        <VenueSection />
        <FooterSection />
      </div>

      {/* Absolute-positioned fullscreen video intro with exit fade */}
      <AnimatePresence>
        {!introFinished && (
          <OpeningIntro onComplete={handleIntroComplete} />
        )}
      </AnimatePresence>
    </div>
  );
}
