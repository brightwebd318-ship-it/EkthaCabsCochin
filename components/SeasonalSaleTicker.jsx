'use client';

import Link from 'next/link';
import { Flame, ArrowRight } from 'lucide-react';
import './SeasonalSaleTicker.css';

export default function SeasonalSaleTicker() {
  return (
    <aside className="seasonal-ticker-wrapper" aria-label="Sabarimala Season Sale Banner">
      <Link href="/sabarimalapackage" className="seasonal-ticker-link">
        <div className="seasonal-ticker-badge">
          <Flame size={18} className="ticker-flame" />
          <span>SEASON SALE</span>
        </div>
        
        <div className="seasonal-ticker-marquee">
          <div className="marquee-track">
            <span className="marquee-text">
              🔥 <strong>SABARIMALA SEASON SALE 2026</strong> — Dedicated Pilgrimage Cabs from Cochin Airport & Ernakulam Stations • Multilingual Drivers (Malayalam, English, Hindi, Tamil) • Click Here to Book Now & Check 2026 Temple Timings ➔
            </span>
            <span className="marquee-text" aria-hidden="true">
              🔥 <strong>SABARIMALA SEASON SALE 2026</strong> — Dedicated Pilgrimage Cabs from Cochin Airport & Ernakulam Stations • Multilingual Drivers (Malayalam, English, Hindi, Tamil) • Click Here to Book Now & Check 2026 Temple Timings ➔
            </span>
          </div>
        </div>

        <div className="seasonal-ticker-cta">
          <span>View Packages</span>
          <ArrowRight size={16} />
        </div>
      </Link>
    </aside>
  );
}
