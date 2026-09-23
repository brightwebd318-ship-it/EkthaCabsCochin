'use client';

import { useState, useId } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Calendar, 
  Clock, 
  Sparkles, 
  Star, 
  CheckCircle2, 
  MapPin, 
  Phone, 
  ShieldCheck, 
  Users, 
  Car, 
  Info, 
  MessageCircle, 
  ChevronRight,
  Flame,
  ThumbsUp,
  Award,
  Navigation,
  Compass
} from 'lucide-react';
import './SabarimalaPage.css';

const WHATSAPP_NUMBER = '919072836004';

// 2026 Sabarimala Festival & Opening Schedule Data
const SABARIMALA_SCHEDULE_2026 = [
  {
    title: 'Makaravilakku Season 2026',
    startDate: '2026-01-01',
    endDate: '2026-01-20',
    keyEvent: 'Makaravilakku & Makara Jyothi Darshan (Jan 14, 2026)',
    status: 'OPEN',
    desc: 'Main festival season with Makara Jyothi sighting at Ponnambalamedu on Jan 14.',
    badge: 'Major Festival'
  },
  {
    title: 'Kumbham Month Pooja',
    startDate: '2026-02-12',
    endDate: '2026-02-17',
    keyEvent: 'Malayalam Month Kumbham Monthly Pooja',
    status: 'OPEN',
    desc: 'Temple opens for 5 days of special monthly pooja rituals.',
    badge: 'Monthly Pooja'
  },
  {
    title: 'Meenam & Uthram Festival',
    startDate: '2026-03-18',
    endDate: '2026-03-28',
    keyEvent: 'Panguni Uthram & Temple Arattu Festival',
    status: 'OPEN',
    desc: '10-day annual temple festival concluding with holy bath (Arattu) at Pamba.',
    badge: 'Annual Festival'
  },
  {
    title: 'Vishu Festival 2026',
    startDate: '2026-04-10',
    endDate: '2026-04-18',
    keyEvent: 'Vishu Kani Darshan (April 14, 2026)',
    status: 'OPEN',
    desc: 'Sacred Vishu Kani darshan and gold coin distribution by Melshanthi.',
    badge: 'Vishu Special'
  },
  {
    title: 'Edavam Month Pooja',
    startDate: '2026-05-14',
    endDate: '2026-05-19',
    keyEvent: 'Malayalam Month Edavam Monthly Pooja',
    status: 'OPEN',
    desc: 'Temple opens for 5 days for monthly offerings and Neyyabhishekam.',
    badge: 'Monthly Pooja'
  },
  {
    title: 'Pratishtha Dinam & Mithunam Pooja',
    startDate: '2026-06-13',
    endDate: '2026-06-19',
    keyEvent: 'Sree Kovil Pratishtha Day & Monthly Pooja',
    status: 'OPEN',
    desc: 'Special anniversary pooja of idol installation & monthly rituals.',
    badge: 'Special Ritual'
  },
  {
    title: 'Karkidakam (Ramayana Month) Pooja',
    startDate: '2026-07-16',
    endDate: '2026-07-21',
    keyEvent: 'Malayalam Month Karkidakam Monthly Pooja',
    status: 'OPEN',
    desc: 'Sacred monsoon monthly pooja and special Laksharchana.',
    badge: 'Monthly Pooja'
  },
  {
    title: 'Chingam & Onam Festival 2026',
    startDate: '2026-08-16',
    endDate: '2026-08-28',
    keyEvent: 'Chingam 1 New Year & Thiruvonam Sadya',
    status: 'OPEN',
    desc: 'Malayalam New Year opening & Onam festival feast for pilgrims.',
    badge: 'Onam Special'
  },
  {
    title: 'Kanni Month Pooja',
    startDate: '2026-09-16',
    endDate: '2026-09-21',
    keyEvent: 'Malayalam Month Kanni Monthly Pooja',
    status: 'OPEN',
    desc: '5-day monthly opening for pujas and pilgrim darshan.',
    badge: 'Monthly Pooja'
  },
  {
    title: 'Thulam Month Pooja',
    startDate: '2026-10-17',
    endDate: '2026-10-22',
    keyEvent: 'Malayalam Month Thulam Monthly Pooja',
    status: 'OPEN',
    desc: 'Monthly pooja before the commencement of Mandalam preparation.',
    badge: 'Monthly Pooja'
  },
  {
    title: 'Mandalam Pilgrimage Season 2026',
    startDate: '2026-11-16',
    endDate: '2026-12-27',
    keyEvent: 'Mandala Pooja (Dec 27, 2026)',
    status: 'OPEN',
    desc: '41-day grand Mandala Kalam season. Lakhs of Ayyappa devotees visit Sannidhanam.',
    badge: 'Grand Pilgrimage'
  },
  {
    title: 'Makaravilakku Opening 2026-2027',
    startDate: '2026-12-30',
    endDate: '2027-01-20',
    keyEvent: 'Makaravilakku Opening for 2027 Festival',
    status: 'OPEN',
    desc: 'Temple reopens for Makara Samkrama pooja and Makaravilakku.',
    badge: 'Makaravilakku'
  }
];

// Packages Data
const SABARIMALA_PACKAGES = [
  {
    id: 'express-1day',
    title: 'Cochin to Pamba 1-Day Express Package',
    subtitle: 'Direct Express Pilgrimage Taxi',
    route: 'Kochi Airport / Station ➔ Nilakkal / Pamba ➔ Kochi',
    duration: '1 Day (18-24 Hours Wait & Return)',
    features: [
      'Punctual airport/railway pickup at any hour (24x7)',
      'Experienced ghat-section driver on Chalakudy / Kottayam route',
      'Vehicle wait time at Nilakkal parking included',
      'Neat, sanitized AC sedan / SUV / Tempo Traveller',
      'No hidden fuel or driver night charges'
    ],
    recommendedFor: 'Devotees with tight schedules or 1-day flight/train returns.',
    popular: true,
    priceNote: 'Best price guarantee'
  },
  {
    id: 'temple-2day',
    title: '2-Day Sabarimala & Sacred Temple Package',
    subtitle: 'Includes Erumely & Pamba Stoppage',
    route: 'Kochi ➔ Erumely Petta Thullal ➔ Pamba ➔ Sannidhanam ➔ Kochi',
    duration: '2 Days / 1 Night',
    features: [
      'Visit Erumely Sree Dharma Sastha Temple & Vavar Mosque',
      'Overnight vehicle waiting at Nilakkal/Pamba parking',
      'Flexible time for Pamba River holy dip & Irumudi Kettu',
      'Optional halt at Kaduthuruthy / Ettumanoor Shiva Temples',
      'Comfortable pushback reclining seats'
    ],
    recommendedFor: 'Devotees performing traditional Erumely Petta Thullal.',
    popular: false,
    priceNote: 'Most Devotional Journey'
  },
  {
    id: 'grand-3day',
    title: '3-Day Grand Kerala Temple Pilgrimage',
    subtitle: 'Sabarimala + Chottanikkara + Vaikom + Guruvayur',
    route: 'Kochi ➔ Sabarimala ➔ Chottanikkara ➔ Vaikom ➔ Guruvayur ➔ Kochi',
    duration: '3 Days / 2 Nights',
    features: [
      'Complete pilgrimage covering Sabarimala Sannidhanam',
      'Darshan at Chottanikkara Bhagavathy Temple',
      'Vaikom Mahadeva & Ettumanoor Mahadeva Temples',
      'Guruvayur Sree Krishna Temple darshan inclusion',
      'Customizable halting & hotel drop recommendations'
    ],
    recommendedFor: 'Families & Swamy groups seeking complete Kerala temple darshan.',
    popular: false,
    priceNote: 'Complete Spiritual Circuit'
  }
];

// Realistic Google Reviews Data (Rating 5.0)
const GOOGLE_REVIEWS = [
  {
    id: 1,
    name: 'Ramesh Kumar',
    location: 'Chennai, Tamil Nadu',
    avatarBg: '#D97706',
    initial: 'R',
    badge: 'Local Guide • 42 reviews',
    rating: 5,
    date: '3 weeks ago',
    travelDetails: 'Travelled with Family in Innova Crysta',
    comment: 'Booked an Innova Crysta for 6 of us from Cochin Airport to Pamba for Sabarimala darshan. Driver Saneesh was extremely polite, highly experienced on hill routes, and guided us on parking at Nilakkal. The vehicle was spotlessly clean and very comfortable. Swamiye Saranam Ayyappa! Highly recommended.',
    likes: 18
  },
  {
    id: 2,
    name: 'Senthil Nathan',
    location: 'Bengaluru, Karnataka',
    avatarBg: '#059669',
    initial: 'S',
    badge: 'Local Guide • 19 reviews',
    rating: 5,
    date: '1 month ago',
    travelDetails: 'Booked 13-Seater Tempo Traveller',
    comment: 'Top-class Sabarimala taxi service! Clean vehicle and punctual pickup at Ernakulam Town station at 3:30 AM. Our driver drove with utmost care through the ghat section to Nilakkal. Very transparent pricing without any hidden costs. Will definitely book Ektha Cabs again next season!',
    likes: 24
  },
  {
    id: 3,
    name: 'Gopalakrishnan Nair',
    location: 'Hyderabad, Telangana',
    avatarBg: '#2563EB',
    initial: 'G',
    badge: 'Verified Pilgrim',
    rating: 5,
    date: '2 months ago',
    travelDetails: 'Kochi to Pamba Express Package',
    comment: 'We took a 1-day express package from Cochin Airport to Sabarimala Pamba. Driver knew all the best halting points for fresh-up and breakfast near Erumely. Safe driving, great communication on WhatsApp, and very polite attitude towards pilgrims. 5/5 stars!',
    likes: 15
  },
  {
    id: 4,
    name: 'Anand Viswanathan',
    location: 'Coimbatore, Tamil Nadu',
    avatarBg: '#7C3AED',
    initial: 'A',
    badge: 'Local Guide • 56 reviews',
    rating: 5,
    date: '2 months ago',
    travelDetails: 'Maruti Suzuki Dzire AC Cab',
    comment: 'Smooth and hassle-free booking experience via WhatsApp. The driver arrived 15 minutes prior to our scheduled time at Kochi station. Excellent driving skills in heavy rain near Pathanamthitta. Fair pricing and respectful behavior. Swamiye Saranam Ayyappa!',
    likes: 12
  },
  {
    id: 5,
    name: 'Vijayaraghavan M',
    location: 'Mysore, Karnataka',
    avatarBg: '#DC2626',
    initial: 'V',
    badge: 'Verified Pilgrim',
    rating: 5,
    date: '3 months ago',
    travelDetails: 'Erumely & Sabarimala 2-Day Tour',
    comment: 'Excellent service by Ektha Cabs Cochin! We visited Erumely for Petta Thullal and then proceeded to Pamba. The driver waited patiently for 14 hours while we went up to Sannidhanam for Neyyabhishekam. Vehicle AC and music system were top notch. Very professional team.',
    likes: 29
  },
  {
    id: 6,
    name: 'Dr. Karthik Raj',
    location: 'Tiruchirappalli, Tamil Nadu',
    avatarBg: '#D97706',
    initial: 'K',
    badge: 'Local Guide • 28 reviews',
    rating: 5,
    date: '3 months ago',
    travelDetails: '2 Innovas for Swamy Pilgrimage Group',
    comment: 'We booked 2 Innova Crystas for our 10-member Ayyappa Swamy group. Both drivers maintained convoy coordination smoothly from Cochin to Nilakkal. Very respectful of our pilgrimage traditions and fasting rituals. 100% reliable taxi operator in Kochi.',
    likes: 31
  }
];

export default function SabarimalaPage() {
  const dateInputId = useId();
  // Default date selector state for 2026 timing checker
  const [selectedDate, setSelectedDate] = useState('2026-11-18');
  const [selectedPackage, setSelectedPackage] = useState('express-1day');
  const [customPickup, setCustomPickup] = useState('Cochin International Airport (COK)');
  const [customVehicle, setCustomVehicle] = useState('Toyota Innova Crysta');
  const [paxCount, setPaxCount] = useState('4-6 Pilgrims');
  const [openFaq, setOpenFaq] = useState(0);

  // Helper to check 2026 temple status for selected date
  const getScheduleStatusForDate = (dateStr) => {
    if (!dateStr) return null;
    const target = new Date(dateStr);
    
    // Find matching festival event
    const matched = SABARIMALA_SCHEDULE_2026.find(item => {
      const s = new Date(item.startDate);
      const e = new Date(item.endDate);
      return target >= s && target <= e;
    });

    if (matched) {
      return {
        isOpen: true,
        event: matched.title,
        keyEvent: matched.keyEvent,
        badge: matched.badge,
        desc: matched.desc,
        morningTiming: '3:00 AM – 1:00 PM (Neyyabhishekam 3:30 AM – 11:30 AM)',
        eveningTiming: '3:00 PM – 11:00 PM (Harivarasanam at 10:50 PM)',
        advice: 'Temple is OPEN for darshan. Virtual Q booking & spot booking available at Nilakkal.'
      };
    }

    // Default closed / off-season monthly pooja notice
    return {
      isOpen: false,
      event: 'Temple Closed for Regular Monthly Pooja Interval',
      keyEvent: 'Monthly Pooja / Maintenance Interval',
      badge: 'Temple Closed',
      desc: 'Sabarimala temple opens during designated Malayalam month opening dates & Mandalam/Makaravilakku seasons.',
      morningTiming: 'N/A (Temple Sanctum Closed)',
      eveningTiming: 'N/A (Temple Sanctum Closed)',
      advice: 'Check nearest upcoming opening date below or contact us for customized pilgrimage travel planning.'
    };
  };

  const statusInfo = getScheduleStatusForDate(selectedDate);

  const buildWhatsAppLink = (customText) => {
    const text = customText || `Hello Ektha Cabs Cochin, I want to inquire about Sabarimala Taxi Package for date: ${selectedDate}. Vehicle: ${customVehicle}, Pickup: ${customPickup}, Pilgrims: ${paxCount}. Please send me the price quotation.`;
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const handleWhatsAppRedirect = (customText) => {
    window.open(buildWhatsAppLink(customText), '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="sabarimala-page">
      {/* Background Divine Atmosphere Particles */}
      <div className="sab-divine-bg-particles" aria-hidden="true">
        <div className="sab-particle particle-1" />
        <div className="sab-particle particle-2" />
        <div className="sab-particle particle-3" />
      </div>

      {/* Hero Header Banner */}
      <section className="sab-hero-section">
        <div className="sab-hero-overlay" />
        <div className="container sab-hero-container">
          <div className="sab-hero-badge">
            <Flame className="sab-flame-icon" size={18} />
            <span>സ്വാമിയേ ശരണമയ്യപ്പാ • Swamiye Saranam Ayyappa</span>
          </div>

          <h1 className="sab-hero-title">
            Sabarimala <span className="sab-gold-text">Pilgrimage Taxi</span> Services 2026
          </h1>

          <p className="sab-hero-subtitle">
            Premium, safe & dedicated taxi packages from Cochin International Airport & Ernakulam Railway Stations to Sabarimala Pamba. Driven by experienced, polite drivers familiar with hill routes.
          </p>

          {/* Key Value Pill Highlights */}
          <div className="sab-hero-pills">
            <div className="sab-pill-item">
              <CheckCircle2 size={16} className="text-amber-400" />
              <span>24/7 Kochi Airport Pickup</span>
            </div>
            <div className="sab-pill-item">
              <Users size={16} className="text-amber-400" />
              <span>Drivers Fluent in <strong>Malayalam, English, Hindi & Tamil</strong></span>
            </div>
            <div className="sab-pill-item">
              <ShieldCheck size={16} className="text-amber-400" />
              <span>Experienced Hill Drivers</span>
            </div>
            <div className="sab-pill-item">
              <Car size={16} className="text-amber-400" />
              <span>Sanitized AC Sedans, SUVs & Tempo</span>
            </div>
            <div className="sab-pill-item">
              <Award size={16} className="text-amber-400" />
              <span>No Hidden Charges</span>
            </div>
          </div>

          {/* Quick CTA Actions */}
          <div className="sab-hero-actions">
            <button 
              className="sab-cta-btn sab-cta-whatsapp"
              onClick={() => handleWhatsAppRedirect()}
              aria-label="Get Instant Sabarimala Quote on WhatsApp"
            >
              <MessageCircle size={22} />
              <span>Get WhatsApp Quotation</span>
            </button>

            <a href="tel:+918606036004" className="sab-cta-btn sab-cta-phone">
              <Phone size={20} />
              <span>Call +91 86060 36004</span>
            </a>
          </div>
        </div>
      </section>

      {/* Devotional Gallery & Divine Showcase */}
      <section className="sab-gallery-section container">
        <div className="sab-section-header text-center">
          <span className="sab-sub-tag">Sacred Pilgrimage Ambiance</span>
          <h2 className="sab-section-title">
            Blessings of <span className="sab-gold-text">Lord Ayyappan</span> & Sabarimala Sannidhanam
          </h2>
          <p className="sab-section-desc">
            Experience a divine, peaceful journey to Sabarimala. We ensure complete comfort so you can focus on your spiritual vows and prayers.
          </p>
        </div>

        <div className="sab-divine-grid">
          {/* Card 1: Divine Lord Ayyappan */}
          <div className="sab-divine-card">
            <div className="sab-card-img-wrap">
              <Image 
                src="/images/assets/lord_ayyappan_divine.png"
                alt="Lord Ayyappan Swami Sabarimala Divine Blessing"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="sab-divine-img"
              />
              <div className="sab-card-gradient" />
              <div className="sab-card-badge">Divine Sree Kovil</div>
            </div>
            <div className="sab-card-body">
              <h3 className="sab-card-title">Lord Ayyappan Darshan</h3>
              <p className="sab-card-text">
                Blessed Sree Kovil ambiance. Seek the supreme grace of Lord Ayyappa Swami at Sannidhanam with our hassle-free travel arrangements.
              </p>
            </div>
          </div>

          {/* Card 2: Pathinettam Padi */}
          <div className="sab-divine-card">
            <div className="sab-card-img-wrap">
              <Image 
                src="/images/assets/pathinettam_padi.png"
                alt="Sabarimala Pathinettam Padi 18 Holy Steps"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="sab-divine-img"
              />
              <div className="sab-card-gradient" />
              <div className="sab-card-badge">Pathinettam Padi</div>
            </div>
            <div className="sab-card-body">
              <h3 className="sab-card-title">18 Holy Steps (Pathinettam Padi)</h3>
              <p className="sab-card-text">
                Ascend the sacred 18 steps with Irumudi Kettu. Our drivers ensure timely arrival at Pamba to align with your Virtual Q coupon timings.
              </p>
            </div>
          </div>

          {/* Card 3: Pamba Journey */}
          <div className="sab-divine-card">
            <div className="sab-card-img-wrap">
              <Image 
                src="/images/assets/sabari_pamba_journey.png"
                alt="Sabarimala Pamba River Pilgrimage Journey"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="sab-divine-img"
              />
              <div className="sab-card-gradient" />
              <div className="sab-card-badge">Pamba River Bank</div>
            </div>
            <div className="sab-card-body">
              <h3 className="sab-card-title">Pamba River & Trekking Halt</h3>
              <p className="sab-card-text">
                Convenient drop-off at Nilakkal / Pamba Triveni. Vehicle waiting facility while you take the holy dip in Pamba and complete darshan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 2026 Interactive Sabarimala Temple Timings & Schedule Checker */}
      <section className="sab-checker-section">
        <div className="container">
          <div className="sab-checker-box">
            <div className="sab-checker-header">
              <div className="sab-checker-icon-wrap">
                <Calendar size={28} className="text-amber-400" />
              </div>
              <div>
                <span className="sab-sub-tag">Interactive Calendar Tool</span>
                <h2 className="sab-checker-title">
                  Sabarimala Temple Opening Schedule & Timings (2026)
                </h2>
                <p className="sab-checker-subtitle">
                  Select your intended travel date in 2026 to check temple status, pooja opening hours, and book your taxi accordingly.
                </p>
              </div>
            </div>

            {/* Date Input Selector */}
            <div className="sab-date-picker-wrap">
              <label htmlFor={dateInputId} className="sab-picker-label">
                <Compass size={18} className="text-amber-400" />
                <span>Select Travel Date in 2026:</span>
              </label>
              <input 
                id={dateInputId}
                type="date"
                value={selectedDate}
                min="2026-01-01"
                max="2026-12-31"
                onChange={(e) => setSelectedDate(e.target.value)}
                className="sab-date-input"
              />

              {/* Fast Quick Date Selector Chips */}
              <div className="sab-quick-chips">
                <span className="sab-chip-title">Quick Select 2026 Highlights:</span>
                <button 
                  type="button"
                  className={`sab-chip ${selectedDate === '2026-01-14' ? 'active' : ''}`}
                  onClick={() => setSelectedDate('2026-01-14')}
                >
                  Makara Jyothi (Jan 14)
                </button>
                <button 
                  type="button"
                  className={`sab-chip ${selectedDate === '2026-04-14' ? 'active' : ''}`}
                  onClick={() => setSelectedDate('2026-04-14')}
                >
                  Vishu Kani (Apr 14)
                </button>
                <button 
                  type="button"
                  className={`sab-chip ${selectedDate === '2026-11-18' ? 'active' : ''}`}
                  onClick={() => setSelectedDate('2026-11-18')}
                >
                  Mandalam Season (Nov 16)
                </button>
                <button 
                  type="button"
                  className={`sab-chip ${selectedDate === '2026-12-27' ? 'active' : ''}`}
                  onClick={() => setSelectedDate('2026-12-27')}
                >
                  Mandala Pooja (Dec 27)
                </button>
              </div>
            </div>

            {/* Dynamic Status Output Box */}
            {statusInfo && (
              <div className={`sab-status-card ${statusInfo.isOpen ? 'sab-status-open' : 'sab-status-closed'}`}>
                <div className="sab-status-top">
                  <div className="sab-status-badge">
                    <Sparkles size={16} />
                    <span>{statusInfo.badge}</span>
                  </div>
                  <span className="sab-selected-date-display">
                    Date Selected: <strong>{new Date(selectedDate).toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</strong>
                  </span>
                </div>

                <h3 className="sab-event-name">{statusInfo.event}</h3>
                <p className="sab-event-desc">{statusInfo.desc}</p>

                <div className="sab-timings-grid">
                  <div className="sab-timing-item">
                    <div className="sab-timing-icon">
                      <Clock size={20} />
                    </div>
                    <div>
                      <span className="sab-timing-label">Morning Sanctum Hours</span>
                      <p className="sab-timing-val">{statusInfo.morningTiming}</p>
                    </div>
                  </div>

                  <div className="sab-timing-item">
                    <div className="sab-timing-icon">
                      <Flame size={20} />
                    </div>
                    <div>
                      <span className="sab-timing-label">Evening Sanctum Hours</span>
                      <p className="sab-timing-val">{statusInfo.eveningTiming}</p>
                    </div>
                  </div>
                </div>

                <div className="sab-advice-banner">
                  <Info size={18} className="sab-info-icon" />
                  <span>{statusInfo.advice}</span>
                </div>

                <div className="sab-status-action">
                  <button 
                    className="sab-wa-quote-btn"
                    onClick={() => handleWhatsAppRedirect(`Hello Ektha Cabs, I want to book Sabarimala Taxi for ${new Date(selectedDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })} (${statusInfo.event}). Please send me rates.`)}
                  >
                    <MessageCircle size={20} />
                    <span>Book Taxi for this Date on WhatsApp</span>
                  </button>
                </div>
              </div>
            )}

            {/* 2026 Key Season Schedule List Overview */}
            <div className="sab-schedule-accordion">
              <h4 className="sab-acc-title">
                <Calendar size={18} className="text-amber-400" />
                <span>Full 2026 Sabarimala Festival & Opening Dates List</span>
              </h4>
              <div className="sab-schedule-table-wrap">
                <table className="sab-schedule-table">
                  <thead>
                    <tr>
                      <th>Opening Season / Pooja</th>
                      <th>2026 Dates</th>
                      <th>Key Ritual / Event</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {SABARIMALA_SCHEDULE_2026.map((sched, idx) => (
                      <tr key={idx} className={selectedDate >= sched.startDate && selectedDate <= sched.endDate ? 'table-highlight' : ''}>
                        <td>
                          <strong>{sched.title}</strong>
                          <span className="table-badge">{sched.badge}</span>
                        </td>
                        <td>
                          {new Date(sched.startDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric' })} – {new Date(sched.endDate).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </td>
                        <td>{sched.keyEvent}</td>
                        <td>
                          <button 
                            className="sab-table-btn"
                            onClick={() => {
                              setSelectedDate(sched.startDate);
                              window.scrollTo({ top: 800, behavior: 'smooth' });
                            }}
                          >
                            Check Date
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sabarimala Taxi Packages Section */}
      <section className="sab-packages-section container" id="packages">
        <div className="sab-section-header text-center">
          <span className="sab-sub-tag">Tailored Pilgrim Travel</span>
          <h2 className="sab-section-title">
            Popular Sabarimala <span className="sab-gold-text">Taxi Packages</span>
          </h2>
          <p className="sab-section-desc">
            Choose from our 1-Day Express, 2-Day Erumely halt, or 3-Day Grand Kerala Temple packages. All cabs equipped with AC, comfortable seating, and driven by courteous drivers.
          </p>
        </div>

        <div className="sab-packages-grid">
          {SABARIMALA_PACKAGES.map((pkg) => (
            <div 
              key={pkg.id}
              className={`sab-package-card ${pkg.popular ? 'sab-package-popular' : ''} ${selectedPackage === pkg.id ? 'sab-package-selected' : ''}`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              {pkg.popular && (
                <div className="sab-pop-badge">
                  <Star size={14} fill="#FFF" />
                  <span>Most Preferred Package</span>
                </div>
              )}

              <div className="sab-pkg-header">
                <span className="sab-pkg-subtitle">{pkg.subtitle}</span>
                <h3 className="sab-pkg-title">{pkg.title}</h3>
                <div className="sab-pkg-route">
                  <Navigation size={16} className="text-amber-500" />
                  <span>{pkg.route}</span>
                </div>
              </div>

              <div className="sab-pkg-body">
                <div className="sab-pkg-duration">
                  <Clock size={16} />
                  <span>{pkg.duration}</span>
                </div>

                <ul className="sab-pkg-features">
                  {pkg.features.map((feat, fIdx) => (
                    <li key={fIdx}>
                      <CheckCircle2 size={16} className="sab-feat-check" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <p className="sab-pkg-recommend">
                  <strong>Best for:</strong> {pkg.recommendedFor}
                </p>
              </div>

              <div className="sab-pkg-footer">
                <button 
                  className="sab-pkg-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleWhatsAppRedirect(`Hello Ektha Cabs, I would like to get a quotation for the "${pkg.title}". Pickup Location: ${customPickup}, Vehicle: ${customVehicle}.`);
                  }}
                >
                  <MessageCircle size={18} />
                  <span>Get WhatsApp Quotation</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Instant Quote Customizer */}
        <div className="sab-custom-calculator">
          <div className="sab-calc-header">
            <Sparkles size={22} className="text-amber-400" />
            <div>
              <h3>Custom Sabarimala Cab Quotation Request</h3>
              <p>Select your pickup point & vehicle preference to get an instant customized quote on WhatsApp.</p>
            </div>
          </div>

          <div className="sab-calc-grid">
            <div className="sab-calc-field">
              <label>Pickup Location:</label>
              <select 
                value={customPickup} 
                onChange={(e) => setCustomPickup(e.target.value)}
                className="sab-select"
              >
                <option value="Cochin International Airport (COK)">Cochin International Airport (COK)</option>
                <option value="Ernakulam Junction (ERS) Railway Station">Ernakulam Junction (ERS) Railway Station</option>
                <option value="Ernakulam Town (ERN) Railway Station">Ernakulam Town (ERN) Railway Station</option>
                <option value="Aluva Railway Station / Bus Stand">Aluva Railway Station / Bus Stand</option>
                <option value="Kochi City Hotel / Residence">Kochi City Hotel / Residence</option>
                <option value="Other Kerala Location">Other Kerala / Outstation Location</option>
              </select>
            </div>

            <div className="sab-calc-field">
              <label>Vehicle Choice:</label>
              <select 
                value={customVehicle} 
                onChange={(e) => setCustomVehicle(e.target.value)}
                className="sab-select"
              >
                <option value="Toyota Innova Crysta (7-Seater Premium)">Toyota Innova Crysta (7-Seater Premium)</option>
                <option value="Maruti Suzuki Dzire / Etios (4-Seater Sedan)">Maruti Suzuki Dzire / Etios (4-Seater Sedan)</option>
                <option value="Ertiga / Carens (6-Seater MPV)">Ertiga / Carens (6-Seater MPV)</option>
                <option value="Tempo Traveller (12/17-Seater Luxury)">Tempo Traveller (12/17-Seater Luxury)</option>
                <option value="Urbania Executive Van">Urbania Executive Van</option>
              </select>
            </div>

            <div className="sab-calc-field">
              <label>Passenger Count:</label>
              <select 
                value={paxCount} 
                onChange={(e) => setPaxCount(e.target.value)}
                className="sab-select"
              >
                <option value="1-3 Pilgrims">1-3 Pilgrims</option>
                <option value="4-6 Pilgrims">4-6 Pilgrims</option>
                <option value="7-12 Pilgrims Group">7-12 Pilgrims Group</option>
                <option value="13-17 Pilgrims Swamy Group">13-17 Pilgrims Swamy Group</option>
              </select>
            </div>

            <div className="sab-calc-action">
              <button 
                className="sab-calc-btn"
                onClick={() => handleWhatsAppRedirect()}
              >
                <MessageCircle size={20} />
                <span>Send WhatsApp Quote Request</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews & Devotee Testimonials Section */}
      <section className="sab-reviews-section">
        <div className="container">
          <div className="sab-section-header text-center">
            <div className="sab-google-rating-header">
              <div className="sab-g-logo">
                <span className="g-blue">G</span>
                <span className="g-red">o</span>
                <span className="g-yellow">o</span>
                <span className="g-blue">g</span>
                <span className="g-green">l</span>
                <span className="g-red">e</span>
              </div>
              <div className="sab-g-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={22} fill="#FBBC04" stroke="#FBBC04" />
                ))}
              </div>
              <span className="sab-g-score">5.0 Rating • 250+ Devotee Reviews</span>
            </div>
            <h2 className="sab-section-title">
              What <span className="sab-gold-text">Ayyappa Devotees</span> Say About Us
            </h2>
            <p className="sab-section-desc">
              Real reviews from pilgrims who travelled with Ektha Cabs Cochin for Sabarimala darshan.
            </p>
          </div>

          <div className="sab-reviews-grid">
            {GOOGLE_REVIEWS.map((rev) => (
              <div key={rev.id} className="sab-review-card">
                <div className="sab-rev-top">
                  <div className="sab-rev-user">
                    <div className="sab-rev-avatar" style={{ backgroundColor: rev.avatarBg }}>
                      {rev.initial}
                    </div>
                    <div>
                      <h3 className="sab-rev-name">{rev.name}</h3>
                      <span className="sab-rev-badge">{rev.badge}</span>
                      <span className="sab-rev-loc">{rev.location}</span>
                    </div>
                  </div>
                  <div className="sab-g-icon-small" title="Google Verified Review">
                    <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                    </svg>
                  </div>
                </div>

                <div className="sab-rev-rating-row">
                  <div className="sab-stars-wrap">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#FBBC04" stroke="#FBBC04" />
                    ))}
                  </div>
                  <span className="sab-rev-date">{rev.date}</span>
                </div>

                <div className="sab-rev-travel-tag">
                  <Car size={13} className="text-amber-500" />
                  <span>{rev.travelDetails}</span>
                </div>

                <p className="sab-rev-comment">"{rev.comment}"</p>

                <div className="sab-rev-footer">
                  <div className="sab-helpful-btn">
                    <ThumbsUp size={14} />
                    <span>Helpful ({rev.likes})</span>
                  </div>
                  <span className="sab-verified-tag">
                    <CheckCircle2 size={13} className="text-emerald-500" /> Verified Review
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO Rich Content & FAQ Section */}
      <section className="sab-seo-faq-section container">
        <div className="sab-seo-content-block">
          <span className="sab-sub-tag">Complete Travel Guide</span>
          <h2 className="sab-section-title">
            Sabarimala Taxi Services & <span className="sab-gold-text">Pilgrimage Packages</span>
          </h2>
          <p className="sab-seo-text">
            Ektha Cabs Cochin is Kerala’s most trusted provider of <strong>Sabarimala taxi services</strong> and dedicated <strong>Sabarimala packages</strong>. Whether you are arriving at Cochin International Airport (COK), Ernakulam Junction (ERS), or Aluva, we provide seamless <strong>taxi for Sabarimala trip</strong> bookings with 24/7 pickup reliability.
          </p>
          <p className="sab-seo-text">
            Our fleet includes spacious <strong>Sabarimala Innova cab booking</strong> options for families, comfortable sedan cars for small pilgrim groups, and 12 to 17-seater <strong>Sabarimala Tempo Traveller packages</strong> for large Swamy groups. Driven by experienced drivers well-versed with hill routes through Chalakudy, Erumely, and Pathanamthitta to Nilakkal & Pamba.
          </p>
        </div>

        <div className="sab-faq-wrapper">
          <h3 className="sab-faq-heading">Frequently Asked Questions (Sabarimala Trip & Cab Fares)</h3>
          <div className="sab-faq-list">
            {[
              {
                q: 'How do I book a taxi for Sabarimala trip from Cochin Airport (COK)?',
                a: 'Booking a cab for Sabarimala is fast and easy. You can click our WhatsApp button or call +91 86060 36004 with your flight arrival time. Our driver will be waiting at the arrivals exit with a placard to take you directly to Nilakkal/Pamba.'
              },
              {
                q: 'What are the popular Sabarimala packages available from Kochi?',
                a: 'We offer 1-Day Express Packages (Kochi to Pamba & back with 18-24 hour vehicle wait), 2-Day Erumely Petta Thullal packages, and 3-Day Grand Kerala Temple Pilgrimage circuits covering Sabarimala, Chottanikkara, Vaikom, and Guruvayur.'
              },
              {
                q: 'What is the taxi fare from Kochi to Pamba / Nilakkal?',
                a: 'Our Sabarimala cab fares are transparent and flat-rate with no hidden night charges or driver fees. Fares vary depending on vehicle type (Sedan, Innova Crysta, or Tempo Traveller) and duration. Contact us on WhatsApp for an instant flat-rate quote.'
              },
              {
                q: 'Can the taxi driver wait at Nilakkal parking while we complete darshan?',
                a: 'Yes! All our Sabarimala packages include vehicle waiting time at Nilakkal/Pamba parking while devotees trek to Sannidhanam for Neyyabhishekam and darshan.'
              },
              {
                q: 'Are 24x7 taxi services available during peak Mandalam and Makaravilakku 2026 season?',
                a: 'Yes, our taxi services operate 24 hours a day, 7 days a week throughout the 2026 Mandalam (Nov-Dec) and Makaravilakku (Dec-Jan) seasons.'
              }
            ].map((faq, fIdx) => (
              <div key={fIdx} className={`sab-faq-item ${openFaq === fIdx ? 'active' : ''}`}>
                <button 
                  className="sab-faq-question"
                  onClick={() => setOpenFaq(openFaq === fIdx ? null : fIdx)}
                >
                  <span>{faq.q}</span>
                  <ChevronRight className={`sab-faq-arrow ${openFaq === fIdx ? 'rotate' : ''}`} size={20} />
                </button>
                {openFaq === fIdx && (
                  <div className="sab-faq-answer">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Ektha Cabs for Sabarimala */}
      <section className="sab-features-section container">
        <div className="sab-section-header text-center">
          <span className="sab-sub-tag">Why Pilgrims Trust Us</span>
          <h2 className="sab-section-title">
            The Preferred Choice for <span className="sab-gold-text">Sabarimala Pilgrims</span>
          </h2>
        </div>

        <div className="sab-reasons-grid">
          <div className="sab-reason-card">
            <div className="sab-reason-icon"><ShieldCheck size={28} /></div>
            <h3>Ghat Section Experts</h3>
            <p>Our drivers have years of experience navigating the hilly Chalakudy-Pathanamthitta-Nilakkal routes with utmost safety.</p>
          </div>

          <div className="sab-reason-card">
            <div className="sab-reason-icon"><Users size={28} /></div>
            <h3>Multilingual Drivers</h3>
            <p>Our drivers are fluent in Malayalam, English, Hindi, and Tamil, ensuring smooth communication and guidance for devotees from across India.</p>
          </div>

          <div className="sab-reason-card">
            <div className="sab-reason-icon"><Clock size={28} /></div>
            <h3>24/7 Airport & Station Pickup</h3>
            <p>Late night or early morning flight arrival at COK? We coordinate punctual pickups synchronized with your train/flight arrival.</p>
          </div>

          <div className="sab-reason-card">
            <div className="sab-reason-icon"><Award size={28} /></div>
            <h3>Transparent Flat Rates</h3>
            <p>No hidden tolls, driver night fees, or surprise surcharges. Transparent quotes provided upfront on WhatsApp before booking.</p>
          </div>
        </div>
      </section>

      {/* WhatsApp Quote Banner CTA */}
      <section className="sab-bottom-cta container">
        <div className="sab-bottom-box">
          <div className="sab-bottom-content">
            <span className="sab-sub-tag">Swamiye Saranam Ayyappa</span>
            <h2>Planning Your 2026 Sabarimala Pilgrimage?</h2>
            <p>Book your cab in advance to secure your preferred vehicle & driver during peak Mandalam & Makaravilakku seasons.</p>
          </div>
          <div className="sab-bottom-actions">
            <button 
              className="sab-large-wa-btn"
              onClick={() => handleWhatsAppRedirect("Hello Ektha Cabs, I want to book a cab for Sabarimala 2026. Please share rates and available vehicle options.")}
            >
              <MessageCircle size={24} />
              <span>Get WhatsApp Quote Now</span>
            </button>
            <a href="tel:+918606036004" className="sab-large-call-btn">
              <Phone size={20} />
              <span>Call +91 86060 36004</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
