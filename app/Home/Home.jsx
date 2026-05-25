'use client'

import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import './Home.css'
import { motion } from 'framer-motion';

import featuredBg from './featured-product-bg2.png'
import woodBg from './bg-image-wood.avif'

// WHY US — ping pong frames
import frame1 from './1pr.png'
import frame2 from './2pr.png'
import frame3 from './3pr.png'
import frame4 from './4pr.png'
import frame5 from './5pr.png'
import frame6 from './6pr.png'
import frame7 from './7pr.png'

// WHY US — mobile ping pong
import prod1 from './5products1.png'
import prod2 from './5product2.png'
import prod3 from './5product3.png'
import prod4 from './5product4.png'
import prod5 from './5product5.png'
import prod6 from './5product6.png'

// Range Categories
import jeeraImg from './jeera (2).png'
import methiImg from './methi (2).png'

// Featured Products
import methiBase from './methi (2).png'
import methiTilt from './methi tilt.png'
import methiOpening from './methi opening.png'
import methiOpen from './methi open.png'
import jeeraBase from './jeera (2).png'
import jeeraTilt from './jeera tilt.png'
import jeeraOpening from './jeera opening.png'
import jeeraOpen from './jeera open.png'
import curryBase from './curry leaves (2).png'
import curryTilt from './curry leaf tilt.png'
import curryOpening from './curry leaf opening.png'
import curryOpen from './curry leaf open.png'
import garlicBase from './garlic (2).png'
import garlicTilt from './garlic tilt.png'
import garlicOpening from './garlic opening.png'
import garlicOpen from './garlic open.png'

// Recognition backgrounds
import recBg1 from './Hero-bg2.png'
import recBg2 from './product-hero-1.png'
import recBg3 from './crisp-closeup.png'
import recBg4 from './serving-plate.png'
import recBg5 from './family-snack.png'
import recBg6 from './ig4.png'

// Recognition images
import rec1 from './recognition-1.jpeg'
import rec2 from './recognition-2.jpeg'
import rec3 from './recognition-3.jpeg'
import rec4 from './recognition-4.jpeg'
import rec5 from './recognition-5.jpeg'
import rec6 from './recognition-6.jpeg'

// Founders
import founderTejaswini from './founder-tejaswini.jpeg'
import founderSridhar from './founder-sridhar.jpeg'

// Community carousel
import crisps from './crisp-closeup.png'
import familySnack from './family-snack.png'
import productHero from './product-hero-1.png'
import servingPlate from './serving-plate.png'
import ig4 from './ig4.png'
import heroBg2 from './Hero-bg2.png'

// Community video section background
import videoBg from './video-bg.png'


const WHYUS_FRAMES = [frame1, frame2, frame3, frame4, frame5, frame6, frame7, frame6, frame5, frame4, frame3, frame2]
const PRODUCT_FRAMES = [prod1, prod2, prod3, prod4, prod5, prod6]

/* ============================================================
   HERO
   ============================================================ */
const SLIDES = [
  {
    id: 'video',
    type: 'video',
    bg: '#1a0f05',
    accent: '#f5c4a0',
    announceBg: '#1a0f05',
    announceText: '#f5e0c8',
    announceMsg: 'Free delivery on orders above ₹299 · 100% Natural · FSSAI Certified',
    heroBg: '#1a0f05',
  },
  { type: 'flavour', flavour: 'Jeera',   bg: '#6F4A2D', accent: '#f5deb3', textColor: '#fff8f0', tagline: 'Earthy & Warm',     headline: 'Jeera\nFlavour',   sub: 'The classic Indian spice — bold, aromatic and guilt-free.',       badge: 'High Fibre · 0% Maida · Low GI', imgPlaceholderColor: '#d4873a' },
  { type: 'flavour', flavour: 'Garlic',  bg: '#E1ACAC', accent: '#f4c89a', textColor: '#fff5f0', tagline: 'Bold & Punchy',      headline: 'Garlic\nFlavour',  sub: 'Intense roasted garlic in every crisp, wholesome bite.',         badge: 'High Fibre · 0% Maida · Low GI', imgPlaceholderColor: '#a03535' },
  { type: 'flavour', flavour: 'Moringa', bg: '#004225', accent: '#b5e5a0', textColor: '#f0fff0', tagline: "Nature's Superfood", headline: 'Moringa\nFlavour', sub: 'Packed with nutrients, light on calories, rich in flavour.',      badge: 'High Fibre · 0% Maida · Low GI', imgPlaceholderColor: '#3d7a34' },
  { type: 'flavour', flavour: 'Onion',   bg: '#A888B5', accent: '#f0c4f0', textColor: '#fff0ff', tagline: 'Sweet & Savoury',    headline: 'Onion\nFlavour',   sub: 'Caramelised onion warmth baked into every thin crisp.',          badge: 'High Fibre · 0% Maida · Low GI', imgPlaceholderColor: '#8c4f8c' },
  { type: 'flavour', flavour: 'Methi',   bg: '#FFA55D', accent: '#d4e89a', textColor: '#f5fff0', tagline: 'Distinctly Desi',    headline: 'Methi\nFlavour',   sub: 'The bittersweet charm of fenugreek in a roasted crisp.',         badge: 'High Fibre · 0% Maida · Low GI', imgPlaceholderColor: '#637d25' },
  { type: 'flavour', flavour: 'Curry',   bg: '#468432', accent: '#d4e89a', textColor: '#f5fff0', tagline: 'Distinctly Desi',    headline: 'Curry\nFlavour',   sub: 'Aromatic curry flavour in every crunchy bite.',                  badge: 'High Fibre · 0% Maida · Low GI', imgPlaceholderColor: '#637d25' },
]

const DURATION = 5000

function HeroSection() {
  const [current, setCurrent] = useState(0)
  const [animKey, setAnimKey] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef(null)
  const progressRef = useRef(null)
  const videoRef = useRef(null)

  const goTo = (index) => {
  setCurrent(index)
  setProgress(0)
  pausedProgressRef.current = 0  
  setIsPaused(false)             
  setAnimKey(k => k + 1)
}
  const goNext = () => goTo((current + 1) % SLIDES.length)
const goPrev = () => goTo((current - 1 + SLIDES.length) % SLIDES.length)
const handleVideoEnd = () => goNext()
const handleSlideClick = () => {
  setIsPaused(prev => {
    const newPaused = !prev
    if (slide.type === 'video' && videoRef.current) {
      newPaused ? videoRef.current.pause() : videoRef.current.play()
    }
    return newPaused
  })
}
const slide = SLIDES[current]
  
const pausedProgressRef = useRef(0)

useEffect(() => {
  clearInterval(intervalRef.current)
  if (slide.type !== 'video' && !isPaused) {
    const remaining = ((100 - pausedProgressRef.current) / 100) * DURATION
    intervalRef.current = setTimeout(() => {
      pausedProgressRef.current = 0
      goNext()
    }, remaining)
  }
  return () => clearTimeout(intervalRef.current)
}, [current, isPaused])
useEffect(() => {
  clearInterval(progressRef.current)
  if (isPaused) {
    pausedProgressRef.current = progress  
    return
  }

  const remaining = ((100 - pausedProgressRef.current) / 100) * DURATION 
  const start = Date.now()

  progressRef.current = setInterval(() => {
    const elapsed = Date.now() - start
    const newProgress = pausedProgressRef.current + (elapsed / DURATION) * 100
    setProgress(Math.min(newProgress, 100))
  }, 30)

  return () => clearInterval(progressRef.current)
}, [current, isPaused])

  return (
    <section className="hero" style={{ '--hero-bg': slide.bg, '--hero-accent': slide.accent }}>
      {/* Progress bar */}
      <div className="hero-progress">
        <div className="hero-progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="hero-bg-layer" key={`bg-${current}`} />
      <div className="hero-grain" />

      <div className="hero-inner" key={animKey} onClick={handleSlideClick}>
        {isPaused && (
  <div className="hero-pause-badge">
    <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
      <rect x="6" y="4" width="4" height="16" rx="1"/>
      <rect x="14" y="4" width="4" height="16" rx="1"/>
    </svg>
    Paused
  </div>
)}
        {slide.type === 'video' ? (
  /* ── VIDEO SLIDE — full background ── */
  <div className="hero-video-slide">
    {/* Video fills full background */}
    <video
      className="hero-video-bg"
      autoPlay
      muted
      loop = {false}
      playsInline
      poster="https://via.placeholder.com/1280x720"
      ref={videoRef} 
      onEnded={handleVideoEnd}
    >
      <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
    </video>

    {/* Dark overlay so text is readable */}
    <div className="hero-video-overlay" />

    {/* Centered content over video */}
    <div className="hero-video-content">
      <p className="hero-eyebrow">WIN-DIA · FIBRERICH</p>
      <h1 className="hero-title video-title">
        Coconut<br /><em>Infused</em> Thins
      </h1>
      <div className="hero-stats">
        <div className="stat">
          <span className="stat-num">0 mg</span>
          <span className="stat-label">Cholestrol</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-num">44%</span>
          <span className="stat-label">Glycaemic Index</span>
        </div>
        <div className="stat-divider" />
        <div className="stat">
          <span className="stat-num">22</span>
          <span className="stat-label">Protein</span>
        </div>
      </div>
      <a href="#shop" className="hero-cta" onClick={(e) => e.stopPropagation()}>Shop Now</a>
    </div>


  </div>
) : (
          /* ── FLAVOUR SLIDE ── */
          <div className="hero-flavour-slide">            
            <div className="hero-img-wrap">
              <div
                className="hero-product-card"
                style={{ background: `linear-gradient(145deg, ${slide.imgPlaceholderColor}, ${slide.bg})` }}
              >
                <div className="packet-shine" />
                <div className="packet-logo">WIN-DIA</div>
                <div className="packet-sub">FIBRERICH</div>
                <div className="packet-name">Thins</div>
                <div className="packet-flavour">{slide.flavour.toUpperCase()} FLAVOUR</div>
                <div className="packet-badges">
                  <span>High Fibre</span>
                  <span>0% Maida</span>
                  <span>Roasted</span>
                  <span>Low GI</span>
                </div>
                <div className="packet-weight">Net Weight: 40g</div>
              </div>
              <div className="hero-blob blob1" style={{ background: slide.accent }} />
              <div className="hero-blob blob2" style={{ background: slide.accent }} />
            </div>

            <div className="hero-content" style={{ color: slide.textColor }}>
              <p className="hero-eyebrow" style={{ color: slide.accent }}>{slide.tagline}</p>
              <h1 className="hero-title flavour-title">
                {slide.headline.split('\n').map((line, i) => (
                  <span key={i} className={i === 0 ? 'title-small' : 'title-big'}>
                    {line}<br />
                  </span>
                ))}
              </h1>
              <div className="hero-badge-pill">{slide.badge}</div>
              <div className="hero-actions">
                <a href="#shop" className="hero-cta">Shop Now</a>
                
              </div>
            </div>
          </div>
        )}
      </div>

    
      {/* Navigation Arrows */}
<div className="hero-nav-arrows">
  <button
    className="hero-arrow-btn hero-arrow-prev"
    onClick={(e) => { e.stopPropagation(); goPrev() }}
    aria-label="Previous slide"
  >
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <polyline points="15,18 9,12 15,6" strokeWidth="2" stroke="currentColor" fill="none"/>
    </svg>
  </button>

  <button
    className="hero-arrow-btn hero-arrow-next"
    onClick={(e) => { e.stopPropagation(); goNext() }}
    aria-label="Next slide"
  >
    <svg viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
      <polyline points="9,18 15,12 9,6" strokeWidth="2" stroke="currentColor" fill="none"/>
    </svg>
  </button>
</div>

      {/* Dots */}
      {slide.type !== 'video' && (
      <div className="hero-dots">
        {SLIDES.map((s, i) => (
          <button
            key={i}
            className={`hero-dot${i === current ? ' active' : ''}`}
            onClick={(e) => { e.stopPropagation(); goTo(i) }}
            aria-label={s.type === 'video' ? 'Video slide' : s.flavour}
            style={i === current ? { background: slide.accent } : {}}
          />
        ))}
      </div>
      )}
    </section>
  )
}



/* ============================================================
   TESTIMONIALS
   ============================================================ */
const reviews = [
  { stars: 5, quote: "I bought these for healthier snacking, but they've become a small ritual in our home. Every evening tea now feels incomplete without them.",                           author: "Priya Mehta",    location: "Bengaluru", product: "Garlic Thins"  },
  { stars: 5, quote: "Finding something wholesome that my whole family enjoys is rare. These crisps somehow bring together flavour, tradition, and comfort in every bite.",                author: "Anjali Rao",     location: "Mysuru",    product: "Moringa Thins" },
  { stars: 5, quote: "The first bite reminded me of homemade snacks we grew up with. It feels comforting to find something traditional that fits today's lifestyle.",                      author: "Rohit",          location: "Bangalore", product: "Methi Thins"   },
  { stars: 5, quote: "What started as curiosity turned into a pantry essential. They've become my go-to for busy days, quiet evenings, and everything in between.",                        author: "Meera Krishnan", location: "Chennai",   product: "Curry Thins"   },
  { stars: 5, quote: "Some snacks satisfy cravings. These feel different — wholesome, familiar, and made with care you can actually taste.",                                               author: "Nisha Patel",    location: "Hyderabad", product: "Methi Thins"   },
]

const TERRACOTTA = '#E2703A'
const LIGHT      = '#F5EDE6'

function getPosition(index, current, total) {
  let diff = index - current
  if (diff >  total / 2) diff -= total
  if (diff < -total / 2) diff += total
  if (diff ===  0) return { x:    0, scale: 1,    opacity: 1,   z: 10, shadow: '0 28px 56px rgba(226,112,58,0.35)', active: true  }
  if (diff ===  1) return { x:  236, scale: 0.86, opacity: 1,   z:  6, shadow: '0 6px 20px rgba(200,140,110,0.2)',  active: false }
  if (diff === -1) return { x: -236, scale: 0.86, opacity: 1,   z:  6, shadow: '0 6px 20px rgba(200,140,110,0.2)',  active: false }
  if (diff ===  2) return { x:  400, scale: 0.74, opacity: 0.7, z:  3, shadow: 'none', active: false }
  if (diff === -2) return { x: -400, scale: 0.74, opacity: 0.7, z:  3, shadow: 'none', active: false }
  return { x: diff > 0 ? 560 : -560, scale: 0.65, opacity: 0, z: 0, shadow: 'none', active: false }
}

function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [displayed, setDisplayed] = useState(0)  // ✅ delayed class switch
  const startXRef = useRef(null)
  const autoRef = useRef(null)

 const next = () => {
  setCurrent(c => {
    const n = (c + 1) % reviews.length
    requestAnimationFrame(() => {           // ✅ wait for DOM paint
      setTimeout(() => setDisplayed(n), 50)
    })
    return n
  })
}

const prev = () => {
  setCurrent(c => {
    const n = (c - 1 + reviews.length) % reviews.length
    requestAnimationFrame(() => {           // ✅ wait for DOM paint
      setTimeout(() => setDisplayed(n), 50)
    })
    return n
  })
}

  const startAuto = () => {
    clearInterval(autoRef.current)
    autoRef.current = setInterval(next, 5000)
  }

  const stopAuto = () => clearInterval(autoRef.current)

  useEffect(() => {
    autoRef.current = setInterval(next, 3000)
    return () => clearInterval(autoRef.current)
  }, [])

  return (
    <section className="tc-section">
      <span className="tc-label">Testimonials</span>
      <h2 className="tc-heading">Loved by thousands</h2>
      <p className="tc-sub">Real people · Real results</p>

      <div
        className="tc-stage"
        onMouseEnter={stopAuto}       
  onMouseLeave={startAuto}
        onTouchStart={e => {
          stopAuto()
          startXRef.current = e.touches[0].clientX
        }}
        onTouchEnd={e => {
          const dx = e.changedTouches[0].clientX - startXRef.current
          if (dx < -40) next(); else if (dx > 40) prev()
          startAuto()
        }}
        onMouseDown={e => { startXRef.current = e.clientX }}
        onMouseUp={e => {
          const dx = e.clientX - startXRef.current
          startXRef.current = null
          if (dx < -30) next(); else if (dx > 30) prev()
        }}
      >
        <div className="tc-track">
          {reviews.map((review, i) => {
            const pos = getPosition(i, current, reviews.length)
            return (
              <div
                key={i}
                className={`tc-card ${i === displayed ? 'tc-card--active' : 'tc-card--side'}`}
                style={{
                  transform: `translateX(${pos.x}px) scale(${pos.scale})`,
                  opacity: pos.opacity,
                  zIndex: pos.z,
                  boxShadow: pos.shadow,
                  backgroundColor: i === displayed ? TERRACOTTA : LIGHT,
                }}
                onClick={() => {
                  if (i !== current) {
                    setCurrent(i)
                    setTimeout(() => setDisplayed(i), 50)
                  }
                }}
              >
                <div className="tc-card__top">
                  <div className="tc-card__stars">{'★'.repeat(review.stars)}</div>
                  <span className="tc-card__quote-mark">"</span>
                  <p className="tc-card__quote">{review.quote}</p>
                </div>
                <div className="tc-card__bottom">
                  <div className="tc-card__line" />
                  <p className="tc-card__author">{review.author}</p>
                  <p className="tc-card__location">{review.location}</p>
                  <span className="tc-card__tag">{review.product}</span>
                </div>
              </div>
            )
          })}
        </div>
        <button className="tc-nav tc-nav--prev" onClick={prev} aria-label="Previous">&#8249;</button>
        <button className="tc-nav tc-nav--next" onClick={next} aria-label="Next">&#8250;</button>
      </div>

      <div className="tc-dots">
        {reviews.map((_, i) => (
          <button
            key={i}
            className={`tc-dot${i === current ? ' tc-dot--active' : ''}`}
            onClick={() => { setCurrent(i); setTimeout(() => setDisplayed(i), 50) }}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
      <p className="tc-counter">{current + 1} of {reviews.length}</p>
    </section>
  )
}


/* ============================================================
   EXPORT
   ============================================================ */
export default function HomeSections() {

  // ─────────────────────────────────────────────
// BLOCK 1: WHY US — State, Refs, Logic
// Paste these inside your HomePage() function, before return()
// ─────────────────────────────────────────────

// Refs
const whyUsRef = useRef(null);
const prTimerRef = useRef(null);
const chipTimerRef = useRef(null);
const whyGifTimer = useRef(null);
const whyImgTimer = useRef(null);

// State
const [whyUsPhase, setWhyUsPhase] = useState('hidden');
const [chipsVisible, setChipsVisible] = useState(false);
const [prIndex, setPrIndex] = useState(1);
const [activeChip, setActiveChip] = useState(null);

// Desktop gif ping-pong frames
const [whyGifIdx, setWhyGifIdx] = useState(0);

// Mobile ping-pong frames
const pingPongSeq = [...PRODUCT_FRAMES, ...[...PRODUCT_FRAMES].slice(1, -1).reverse()];
const [whyImgIdx, setWhyImgIdx] = useState(0);

// Scroll-triggered animation for WHY US section
useEffect(() => {
  const section = whyUsRef.current;
  if (!section) return;

  const startCycle = () => {
    let idx = 1;
    setPrIndex(1);
    prTimerRef.current = setInterval(() => {
      idx = idx >= 10 ? 1 : idx + 1;
      setPrIndex(idx);
    }, 800);
  };

  const stopCycle = () => {
    clearInterval(prTimerRef.current);
    clearTimeout(chipTimerRef.current);
    setPrIndex(1);
  };

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setChipsVisible(false);
        setWhyUsPhase('big');
        startCycle();
        chipTimerRef.current = setTimeout(() => {
          setWhyUsPhase('small');
          setTimeout(() => setChipsVisible(true), 300);
        }, 600);
      } else {
        setWhyUsPhase('hidden');
        setChipsVisible(false);
        stopCycle();
      }
    },
    { threshold: 0.1 }
  );
  observer.observe(section);
  return () => {
    observer.disconnect();
    clearInterval(prTimerRef.current);
    clearTimeout(chipTimerRef.current);
  };
}, []);

// Desktop gif timer
useEffect(() => {
  whyGifTimer.current = setInterval(() => {
    setWhyGifIdx(prev => (prev + 1) % WHYUS_FRAMES.length);
  }, 500);
  return () => clearInterval(whyGifTimer.current);
}, []);

// Mobile ping-pong timer
useEffect(() => {
  whyImgTimer.current = setInterval(() => {
    setWhyImgIdx(prev => (prev + 1) % pingPongSeq.length);
  }, 300);
  return () => clearInterval(whyImgTimer.current);
}, []);

// ─────────────────────────────────────────────
// BLOCK 3: FEATURED PRODUCTS — State, Refs, Logic
// Paste these inside your HomePage() function, before return()
// ─────────────────────────────────────────────

const [activeProduct, setActiveProduct] = useState(null);
const [productFrame, setProductFrame] = useState({}); // { [idx]: 'base'|'tilt'|'opening'|'open' }
const productTimers = useRef({});

const activateProduct = (i) => {
  clearTimeout(productTimers.current[i]);
  setProductFrame(f => ({ ...f, [i]: 'tilt' }));
  productTimers.current[i] = setTimeout(() => {
    setProductFrame(f => ({ ...f, [i]: 'opening' }));
    productTimers.current[i] = setTimeout(() => {
      setProductFrame(f => ({ ...f, [i]: 'open' }));
    }, 600);
  }, 600);
};

const deactivateProduct = (i) => {
  clearTimeout(productTimers.current[i]);
  setProductFrame(f => ({ ...f, [i]: 'base' }));
  setActiveProduct(null);
};


{/* ════════════════════════════════════════════════
    BLOCK 1: RECOGNITION SECTION — State & Logic
    Paste this inside your HomePage function, before return()
    Also add these imports at the top of your file:
      import { useState, useEffect, useRef } from 'react';
      import { motion } from 'framer-motion';
════════════════════════════════════════════════ */}

const [recognitionActiveIndex, setRecognitionActiveIndex] = useState(0);
const recognitionScrollRef = useRef(null);
const recognitionAnimFrameRef = useRef(null);
const recognitionTargetScrollRef = useRef(0);
const recognitionCurrentScrollRef = useRef(0);

const recognitions = [
  { title: "Export Ready", subtitle: "Global Quality Standards", description: "Win-Dia has achieved international export certification, meeting stringent global quality standards. Our coconut flour-based snacks are now trusted across borders, bringing healthy snacking to international markets.", image: rec1.src, bgImage: recBg1.src, blogUrl: "#", organization: "Export Council of India" },
  { title: "Fibre Innovation", subtitle: "Coconut Flour Crafted", description: "Recognized for pioneering innovation in high-fibre snacking. Our unique coconut flour formulation addresses the modern diet's fibre gap, creating a new category in healthy snacking.", image: rec2.src, bgImage: recBg2.src, blogUrl: "#", organization: "Food Innovation Awards" },
  { title: "Clean Ingredients", subtitle: "Thoughtfully Made", description: "Awarded for our commitment to clean, transparent ingredient sourcing. Every Win-Dia product is crafted with carefully selected natural ingredients, free from artificial additives and preservatives.", image: rec3.src, bgImage: recBg3.src, blogUrl: "#", organization: "Clean Label Initiative" },
  { title: "Trusted Manufacturing", subtitle: "Premium Quality", description: "Certified for excellence in manufacturing practices. Our state-of-the-art facility maintains the highest standards of hygiene, quality control, and sustainable production methods.", image: rec4.src, bgImage: recBg4.src, blogUrl: "#", organization: "Quality Assurance Board" },
  { title: "Gluten-Free Range", subtitle: "Better Everyday Choice", description: "Recognized for creating accessible gluten-free options without compromising on taste. Our range supports dietary needs while delivering the satisfaction of traditional snacking.", image: rec5.src, bgImage: recBg5.src, blogUrl: "#", organization: "Celiac Foundation" },
  { title: "Modern Snacking", subtitle: "High Fibre Focus", description: "Honored for redefining modern snacking with a focus on gut health and wellness. Win-Dia bridges the gap between indulgence and nutrition, making healthy choices effortless.", image: rec6.src, bgImage: recBg6.src, blogUrl: "#", organization: "Health Today Magazine" },
]

useEffect(() => {
  const animate = () => {
    if (!recognitionScrollRef.current) return;
    const diff = recognitionTargetScrollRef.current - recognitionCurrentScrollRef.current;
    recognitionCurrentScrollRef.current += diff * 0.12;
    recognitionScrollRef.current.scrollLeft = recognitionCurrentScrollRef.current;
    recognitionAnimFrameRef.current = requestAnimationFrame(animate);
  };
  recognitionAnimFrameRef.current = requestAnimationFrame(animate);
  return () => { if (recognitionAnimFrameRef.current) cancelAnimationFrame(recognitionAnimFrameRef.current); };
}, []);

const handleRecognitionMouseMove = (e) => {
  if (!recognitionScrollRef.current) return;
  const container = recognitionScrollRef.current;
  const rect = container.getBoundingClientRect();
  const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
  recognitionTargetScrollRef.current = pct * (container.scrollWidth - rect.width);
};

const activeRecognition = recognitions[recognitionActiveIndex];


{/* ════════════════════════════════════════════════
    BLOCK 3: COMMUNITY SECTION — State & Logic
    Paste this inside your HomePage function, before return()
    Add these imports at the top of your file:
      import { useState, useEffect } from 'react';
      import { motion } from 'framer-motion';
════════════════════════════════════════════════ */}

const communitySlides = [
  { src: crisps.src, alt: 'Crispy Win-Dia Thins' },
  { src: familySnack.src, alt: 'Family Snacking Moment' },
  { src: productHero.src, alt: 'Win-Dia Product Hero' },
  { src: servingPlate.src, alt: 'Serving Plate Presentation' },
  { src: ig4.src, alt: 'Community Moment' },
  { src: heroBg2.src, alt: 'Hero Background' },
]

const [communityRotation, setCommunityRotation] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCommunityRotation((prev) => prev + 0.3);
  }, 16);
  return () => clearInterval(interval);
}, []);

const getCommunityImageStyle = (index) => {
  const anglePerImage = 360 / communitySlides.length;
  const currentAngle = communityRotation + (index * anglePerImage);
  const radius = 220;
  const radian = (currentAngle * Math.PI) / 180;
  const x = Math.sin(radian) * radius;
  const z = Math.cos(radian) * radius;
  const y = Math.sin(radian * 2) * 15;
  const scale = (z + radius) / (radius * 2) * 0.4 + 0.5;
  const opacity = (z + radius) / (radius * 2) * 0.6 + 0.4;
  const rotateY = -currentAngle;
  return {
    transform: `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, ${z.toFixed(2)}px) rotateY(${rotateY.toFixed(2)}deg) scale(${scale.toFixed(2)})`,
    opacity: opacity.toFixed(2),
    zIndex: Math.round(z),
  };
};



  return (
    <>
      <HeroSection />


      {/* ═══════════════════════════════════════════════════
    BLOCK 1: WHY US BANNER
    Place this after the Hero section
    Requires: whyUsRef, whyUsPhase, chipsVisible, activeChip,
              setActiveChip, WHYUS_FRAMES, whyGifIdx,
              pingPongSeq, whyImgIdx
═══════════════════════════════════════════════════ */}
<section className="why-us-banner" ref={whyUsRef} onClick={() => setActiveChip(null)}>
<div className="why-us-wood-bg" style={{ 
  backgroundImage: `url(${woodBg.src})`}
}  />
  {/* WHY US? animated heading — top left */}
  <div className="why-us-clip">
    <div
      className="why-us-text"
      style={{
        fontSize: whyUsPhase === 'small' ? 'clamp(44px, 7vw, 96px)' : 'clamp(72px, 13vw, 160px)',
        transform: whyUsPhase === 'hidden' ? 'translateY(110%)' : 'translateY(0%)',
        opacity: whyUsPhase === 'hidden' ? 0 : 1,
        transition: whyUsPhase === 'hidden'
          ? 'none'
          : whyUsPhase === 'big'
          ? 'transform 0.55s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease'
          : 'font-size 0.5s cubic-bezier(0.16,1,0.3,1), transform 0.55s cubic-bezier(0.16,1,0.3,1)',
      }}
    >
      WHY US?
    </div>
  </div>

  {/* Left chips — chips 0 & 1 (desktop left col + mobile) */}
  <div className="why-us-left">
    {[
      { label: 'High in Fibre',      why: 'Keeps you full. Fuels your day. Supports digestion naturally.',       color: '#E8D5C4', textDark: true },
      { label: 'Low Glycemic Index', why: 'GI of 44. No sugar spikes. Steady energy from first bite to last.',  color: '#c2886eff', textDark: true },
    ].map((f, i) => (
      <div
        key={i}
        className={`why-chip-row${chipsVisible ? ' chips-visible' : ''}`}
        style={{ transitionDelay: `${i * 0.1}s` }}
      >
        <div
          className={`why-chip${activeChip === i ? ' chip-mobile-active' : ''}`}
          style={{ '--chip-color': f.color }}
          onClick={(e) => {
            e.stopPropagation();
            if (activeChip === i) { window.location.href = '/science'; }
            else { setActiveChip(i); }
          }}
        >
          <div className="why-chip-inner" data-why={f.why} style={{ '--chip-color': f.color }}>
            <span className="why-chip-label">{f.label}</span>
            <Link href="/science" className="why-chip-expanded" style={{ background: f.color }} onClick={(e) => e.stopPropagation()}>
              <p className="why-chip-why" style={f.textDark ? { color: 'rgba(30,20,10,0.88)' } : {}}>{f.why}</p>
            </Link>
          </div>
        </div>
        <span className="why-chip-callout">
          <span className="why-chip-line" />
          <span className="why-chip-dot" />
        </span>
      </div>
    ))}
  </div>

  {/* Centre gif — desktop only (absolutely centred) */}
  <div className="why-us-desktop-gif">
    <img src={WHYUS_FRAMES[whyGifIdx].src} />
  </div>

  {/* Right chips — chips 2 & 3 (desktop right col only) */}
  <div className="why-us-right">
    {[
      { label: '0% Cholesterol',   why: 'Zero cholesterol. Every ingredient earns its place.',          color: '#9b7e67ff', textDark: false },
      { label: 'No Preservatives', why: 'Nothing hidden. Nothing artificial. Just honest, clean food.', color: '#C8D9B8',   textDark: false },
    ].map((f, i) => (
      <div
        key={i + 2}
        className={`why-chip-row why-chip-row--right-col${chipsVisible ? ' chips-visible' : ''}`}
        style={{ transitionDelay: `${(i + 2) * 0.1}s` }}
      >
        <span className="why-chip-callout why-chip-callout--left">
          <span className="why-chip-dot" />
          <span className="why-chip-line" />
        </span>
        <div
          className={`why-chip${activeChip === i + 2 ? ' chip-mobile-active' : ''}`}
          style={{ '--chip-color': f.color }}
          onClick={(e) => {
            e.stopPropagation();
            if (activeChip === i + 2) { window.location.href = '/science'; }
            else { setActiveChip(i + 2); }
          }}
        >
          <div className="why-chip-inner" data-why={f.why} style={{ '--chip-color': f.color }}>
            <span className="why-chip-label">{f.label}</span>
            <Link href="/science" className="why-chip-expanded" style={{ background: f.color }} onClick={(e) => e.stopPropagation()}>
              <p className="why-chip-why" style={f.textDark ? { color: 'rgba(30,20,10,0.88)' } : {}}>{f.why}</p>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Mobile-only: chips 2 & 3 shown below left chips */}
  <div className="why-us-mobile-extra">
    {[
      { label: '0% Cholesterol',   why: 'Zero cholesterol. Every ingredient earns its place.',          color: '#9b7e67ff', textDark: false },
      { label: 'No Preservatives', why: 'Nothing hidden. Nothing artificial. Just honest, clean food.', color: '#C8D9B8',   textDark: false },
    ].map((f, i) => (
      <div
        key={i + 2}
        className={`why-chip-row${chipsVisible ? ' chips-visible' : ''}`}
        style={{ transitionDelay: `${(i + 2) * 0.1}s` }}
      >
        <div
          className={`why-chip${activeChip === i + 2 ? ' chip-mobile-active' : ''}`}
          onClick={(e) => {
            e.stopPropagation();
            if (activeChip === i + 2) { window.location.href = '/science'; }
            else { setActiveChip(i + 2); }
          }}
        >
          <div className="why-chip-inner">
            <span className="why-chip-label">{f.label}</span>
            <Link href="/science" className="why-chip-expanded" style={{ background: f.color }} onClick={(e) => e.stopPropagation()}>
              <p className="why-chip-why" style={f.textDark ? { color: 'rgba(30,20,10,0.88)' } : {}}>{f.why}</p>
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>

  {/* Mobile: ping-pong product image */}
  <div className="why-us-products-img">
    <img
      src={pingPongSeq[whyImgIdx].src}
      alt="Win-Dia Products"
      style={{ width: '100%', height: 'auto', objectFit: 'contain', display: 'block' }}
    />
  </div>

  {/* CTA */}
  <Link href="/science" className="why-us-cta">
    Uncover the Science →
  </Link>

</section>


{/* ═══════════════════════════════════════════════════
    BLOCK 2: RANGE CATEGORIES
    Place this after the Why Us section
    Images used: /jeera (2).png, /methi (2).png (already in /public)
═══════════════════════════════════════════════════ */}
<section className="products" id="shop">
  <div className="products-split">

    {/* LEFT — Everyday Classics Range */}
    <div className="products-split-left">
      <img src={jeeraImg.src} alt="Jeera" className="products-peek products-peek-left" />
      <div className="products-split-content products-split-content--left">
        <div className="products-split-eyebrow">Crafted from Tradition</div>
        <h2 className="products-split-title"><em>Everyday Classics</em><br/>Range</h2>
        <p className="products-split-desc">Wholesome ingredients, authentic flavors, and satisfying crunch for daily enjoyment.</p>
        <Link href="/shop" className="products-split-btn products-split-btn--dark">Explore Classics Range →</Link>
      </div>
    </div>

    {/* RIGHT — Gluten-Free Range */}
    <div className="products-split-right">
      <img src={methiImg.src} alt="Methi" className="products-peek products-peek-right" />
      <div className="products-split-content products-split-content--right">
        <div className="products-split-eyebrow">Made for Mindful Snacking</div>
        <h2 className="products-split-title"><em>Gluten-Free</em><br/>Range</h2>
        <p className="products-split-desc">Lighter, easy-to-digest options without compromising on taste and crunch.</p>
        <Link href="/shop" className="products-split-btn products-split-btn--light">Explore Gluten-Free Range →</Link>
      </div>
    </div>

  </div>
</section>


{/* ═══════════════════════════════════════════════════
    BLOCK 3: FEATURED PRODUCTS
    Place this after the Range Categories section
    Requires: activeProduct, setActiveProduct,
              productFrame, activateProduct, deactivateProduct,
              setActiveChip (from block-1, or just pass null setter)
    Images used: all in /public (methi, jeera, curry leaf, garlic variants)
═══════════════════════════════════════════════════ */}
<section className="recipes-banner" id="recipes" 
style={{ backgroundImage: `url(${featuredBg.src})`}}
onClick={() => {
  setActiveChip(null);
  Object.keys(productTimers.current).forEach(k => { clearTimeout(productTimers.current[k]); });
  setProductFrame({});
  setActiveProduct(null);
}}>

  {/* Title */}
  <div className="featured-eyebrow">OUR FEATURED PRODUCTS</div>

  {/* Product grid */}
  <div className="featured-grid">
    {[
  { base: methiBase.src, tilt: methiTilt.src, opening: methiOpening.src, open: methiOpen.src, name: 'Methi Thins', price: '₹220' },
  { base: jeeraBase.src, tilt: jeeraTilt.src, opening: jeeraOpening.src, open: jeeraOpen.src, name: 'Jeera Thins', price: '₹180' },
  { base: curryBase.src, tilt: curryTilt.src, opening: curryOpening.src, open: curryOpen.src, name: 'Curry Leaf Thins', price: '₹180' },
  { base: garlicBase.src, tilt: garlicTilt.src, opening: garlicOpening.src, open: garlicOpen.src, name: 'Garlic Thins', price: '₹200' },
].map((p, i) => {
      const frame = productFrame[i] || 'base';
      const src = p[frame];
      return (
        <div
          key={i}
          className="featured-item"
          onMouseEnter={() => { setActiveProduct(i); activateProduct(i); }}
          onMouseLeave={() => deactivateProduct(i)}
          onClick={(e) => {
            e.stopPropagation();
            if (activeProduct === i) { deactivateProduct(i); }
            else { setActiveProduct(i); activateProduct(i); }
          }}
        >
          <div className="featured-img-wrap">
            <img src={src} alt={p.name} className="featured-frame" />
          </div>
          <div className="featured-info">
            <div className="featured-name">{p.name}</div>
            <div className="featured-price">{p.price} <span>/ 250g</span></div>
            <Link href="/shop" className="featured-add" onClick={e => e.stopPropagation()}>Add to Cart</Link>
          </div>
        </div>
      );
    })}
  </div>

  {/* Explore CTA */}
  <div className="featured-explore-wrap">
    <div className="featured-explore-rule">
      <span className="featured-explore-line" />
      <span className="featured-explore-glitter">✦ ✦ ✦</span>
      <span className="featured-explore-line" />
    </div>
    <Link href="/shop" className="featured-explore-cta">
      <span className="featured-explore-label">Explore Our Full Collection</span>
      <span className="featured-explore-arrow">→</span>
    </Link>
  </div>

</section>
      <Testimonials />
      
{/* 
  ════════════════════════════════════════════════
    BLOCK 1: RECOGNITION SECTION
    Place this as the first section after Hero
════════════════════════════════════════════════  */}
<section className="rec-section">
  {/* Dynamic Background */}
  <div className="rec-bg-layer">
    {recognitions.map((item, index) => (
      <motion.div key={index} className="rec-bg-item" initial={{opacity:0}} animate={{opacity:recognitionActiveIndex===index?1:0}} transition={{duration:0.5,ease:'easeInOut'}}>
        <img src={item.bgImage} alt="" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} />
        <div className="rec-bg-overlay1" />
        <div className="rec-bg-overlay2" />
      </motion.div>
    ))}
  </div>

  <div className="rec-main">
    {/* Desktop Nav Dots */}
    <div className="rec-nav-desktop">
      {recognitions.map((_, index) => (
        <button key={index} onClick={() => setRecognitionActiveIndex(index)} className="rec-nav-btn">
          <motion.div className={`rec-nav-dot${recognitionActiveIndex===index?' active':''}`} whileHover={{scale:1.5}} />
          {index < recognitions.length - 1 && <div className="rec-nav-line" />}
        </button>
      ))}
    </div>

    {/* Mobile Nav Dots */}
    <div className="rec-nav-mobile">
      {recognitions.map((_, index) => (
        <button key={index} onClick={() => setRecognitionActiveIndex(index)} className="rec-nav-btn">
          <motion.div className={`rec-nav-dot-mobile${recognitionActiveIndex===index?' active':''}`} whileTap={{scale:1.6}} />
        </button>
      ))}
    </div>

    <div className="rec-content-area">
      {/* Left: Text Content */}
      <div className="rec-left">
        <div className="rec-left-inner">
          <div className="rec-stack">
            <motion.div key={`badge-${recognitionActiveIndex}`} initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.3}}>
              <span className="rec-badge">{activeRecognition.organization}</span>
            </motion.div>
            <motion.h2 key={`title-${recognitionActiveIndex}`} className="rec-title" initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.3,delay:0.05}}>
              {activeRecognition.title}
            </motion.h2>
            <motion.p key={`sub-${recognitionActiveIndex}`} className="rec-subtitle" initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.3,delay:0.1}}>
              {activeRecognition.subtitle}
            </motion.p>
            <motion.p key={`desc-${recognitionActiveIndex}`} className="rec-desc" initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.3,delay:0.15}}>
              {activeRecognition.description}
            </motion.p>
            <motion.div key={`cta-${recognitionActiveIndex}`} initial={{opacity:0,x:-20}} animate={{opacity:1,x:0}} transition={{duration:0.3,delay:0.2}}>
              <a href={activeRecognition.blogUrl} className="rec-cta">
                <span>Read Full Story</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Right: Card Carousel */}
      <div className="rec-right">
        <div ref={recognitionScrollRef} onMouseMove={handleRecognitionMouseMove} className="rec-scroll">
          <div className="rec-cards-row">
            {recognitions.map((item, index) => (
              <motion.button key={index} onMouseEnter={() => setRecognitionActiveIndex(index)} className="rec-card-btn" whileHover={{scale:1.05,y:-8}} transition={{duration:0.4,ease:[0.34,1.56,0.64,1]}}>
                <div className={`rec-card${recognitionActiveIndex===index?' active':''}`}>
                  <img src={item.image} alt={item.title} style={{width:'100%',height:'100%',objectFit:'contain'}} />
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* ════════════════════════════════════════════════
    BLOCK 2: FOUNDERS SECTION
    Place this after the Recognition section
════════════════════════════════════════════════ */}
<section className="fnd-section">
  <div className="fnd-bg-blob1"></div>
  <div className="fnd-bg-blob2"></div>

  <div className="fnd-container">

    {/* Header */}
    <motion.div className="fnd-header" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8}}>
      <div className="fnd-header-label-row">
        <span className="fnd-header-line"></span>
        <span className="fnd-header-label">The Story Behind</span>
        <span className="fnd-header-line right"></span>
      </div>
      <h2 className="fnd-header-title">
        Two journeys. <span>One mission.</span>
      </h2>
      <p className="fnd-header-desc">
        Personal experiences with health and nutrition led us to create Win-Dia. Every product is a testament to our shared belief in better, gut-friendly snacking.
      </p>
    </motion.div>

    {/* FOUNDER 1 */}
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.8}}>
      <div className="fnd-grid">
        <motion.div className="fnd-image-col" initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.9,delay:0.2}}>
          <div className="fnd-image-wrapper">
            <div className="fnd-number">01</div>
            <div className="fnd-image-frame">
              <img src={founderTejaswini.src} alt="G Tejaswini" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} />
              <div className="fnd-image-overlay"></div>
              <div className="fnd-nameplate">
                <p className="fnd-nameplate-role">Founder</p>
                <p className="fnd-nameplate-name">G Tejaswini</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div className="fnd-content-col" initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.9,delay:0.3}}>
          <div className="fnd-role-label">
            <span className="fnd-role-line"></span>
            <span className="fnd-role-text">Managing Director and Founder</span>
          </div>
          <blockquote className="fnd-quote">
            <p>In todays busy world, people are increasingly dependent on processed and junk foods made with refined flour and unhealthy oils, affecting gut health and leading to lifestyle issues at an early age.</p>
          </blockquote>
          <div className="fnd-story">
            <p>When we studied this growing concern, we realized that the modern diet suffers from a <strong>MAJOR FIBRE GAP</strong>. Driven by this purpose, our effort is to fill the fibre gap through healthier coconut flour-based snacks.</p>
            <p>With <strong>WIN-DIA</strong> and our tagline <span className="fnd-highlight">Start Your Second Innings,</span> we aim to inspire people towards smarter and healthier snacking choices for better gut health and well-being.</p>
          </div>
        </motion.div>
      </div>
    </motion.div>

    {/* Divider */}
    <div className="fnd-divider">
      <div className="fnd-divider-inner">
        <div className="fnd-divider-line"></div>
        <div className="fnd-divider-dot"></div>
        <div className="fnd-divider-line right"></div>
      </div>
    </div>

    {/* FOUNDER 2 */}
    <motion.div initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.8}}>
      <div className="fnd-grid reversed">
        <motion.div className="fnd-content-col text-right-lg" initial={{opacity:0,x:-40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.9,delay:0.3}}>
          <div className="fnd-role-label">
            <span className="fnd-role-line"></span>
            <span className="fnd-role-text">CEO and Co-Founder</span>
          </div>
          <blockquote className="fnd-quote">
            <p>My journey into this field began through a personal experience with diabetes and digestive health challenges. After changing my diet and lifestyle, I was able to move away from medications and truly begin my second innings during my middle age.</p>
          </blockquote>
          <div className="fnd-story">
            <p>Today, the time has come for people to start their second innings much earlier - by choosing healthier food habits at a young age itself, avoiding future health complications.</p>
            <p>This realization inspired us to create <strong>WIN-DIA</strong>, with an effort to fill the growing fibre gap through innovative coconut flour-based snacks that support better gut health and mindful living.</p>
          </div>
        </motion.div>

        <motion.div className="fnd-image-col right-side" initial={{opacity:0,x:40}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.9,delay:0.2}}>
          <div className="fnd-image-wrapper ml-auto">
            <div className="fnd-number right">02</div>
            <div className="fnd-image-frame">
              <img src={founderSridhar.src} alt="T N Sridhar" style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover'}} />
              <div className="fnd-image-overlay"></div>
              <div className="fnd-nameplate">
                <p className="fnd-nameplate-role">Co-Founder</p>
                <p className="fnd-nameplate-name">T N Sridhar</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>

    {/* Mission */}
    <motion.div className="fnd-mission" initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.8,delay:0.2}}>
      <div className="fnd-mission-card">
        <div className="fnd-mission-corner tl"></div>
        <div className="fnd-mission-corner tr"></div>
        <div className="fnd-mission-corner bl"></div>
        <div className="fnd-mission-corner br"></div>
        <div className="fnd-mission-label-row">
          <span className="fnd-mission-label-line"></span>
          <span className="fnd-mission-label">Our Shared Mission</span>
          <span className="fnd-mission-label-line"></span>
        </div>
        <p className="fnd-mission-quote">We believe a healthy gut is the foundation of a happier and healthier life.</p>
        <p className="fnd-mission-attribution">- G Tejaswini and T N Sridhar</p>
        <motion.button className="fnd-mission-btn" whileHover={{scale:1.05,y:-2}} whileTap={{scale:0.98}}>
          <span>Discover Our Story</span>
          <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.button>
      </div>
    </motion.div>

  </div>
</section>


{/* ════════════════════════════════════════════════
    BLOCK 3: COMMUNITY SECTION
    Place this after the Founders section
════════════════════════════════════════════════ */}
<section className="com-section">
  {/* Decorative */}
  <div className="com-decor">
    <motion.div className="com-decor-leaf" animate={{rotate:[0,5,0],scale:[1,1.05,1]}} transition={{duration:8,repeat:Infinity,ease:'easeInOut'}}>
      <svg viewBox="0 0 200 200" fill="none"><path d="M100 20 Q120 60, 140 100 Q120 140, 100 180 Q80 140, 60 100 Q80 60, 100 20" fill="#93C572" opacity="0.3"/><path d="M100 20 Q110 60, 120 100 Q110 140, 100 180" stroke="#93C572" strokeWidth="2" opacity="0.5"/></svg>
    </motion.div>
    <motion.div className="com-decor-sparkle" animate={{scale:[1,1.5,1],opacity:[0.3,0.8,0.3],rotate:[0,180,360]}} transition={{duration:4,repeat:Infinity,ease:'easeInOut'}}>
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none"><path d="M20 0L22 18L20 40L18 18L20 0Z" fill="#A8D08D" opacity="0.6"/><path d="M0 20L18 22L40 20L18 18L0 20Z" fill="#A8D08D" opacity="0.6"/></svg>
    </motion.div>
    <motion.div className="com-decor-dot1" animate={{y:[0,-30,0],opacity:[0.3,0.8,0.3]}} transition={{duration:5,repeat:Infinity,ease:'easeInOut'}} />
    <motion.div className="com-decor-dot2" animate={{y:[0,20,0],opacity:[0.4,0.9,0.4]}} transition={{duration:4,repeat:Infinity,ease:'easeInOut',delay:2}} />
  </div>

  <div className="com-container">
    {/* Top grid */}
    <div className="com-top-grid">

      {/* Left content */}
      <motion.div className="com-left" initial={{opacity:0,x:-50}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.8}}>
        <motion.div initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.2}}>
          <span className="com-label">Our Community</span>
        </motion.div>
        <motion.h3 className="com-tagline" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.25}}>
          Stories that inspire. <em>Moments that connect.</em>
        </motion.h3>
        <motion.p className="com-desc" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.3}}>
          Every bite celebrates the goodness of coconut flour and the warmth of family traditions. Join our community in rediscovering snacking that nourishes both body and soul.
        </motion.p>
        <motion.div className="com-stats" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.35}}>
          <div className="com-stat"><span className="com-stat-value">10K+</span><span className="com-stat-label">Happy Families</span></div>
          <div className="com-stat"><span className="com-stat-value">44 GI</span><span className="com-stat-label">Low Glycemic</span></div>
          <div className="com-stat"><span className="com-stat-value">4.85g</span><span className="com-stat-label">Fiber Rich</span></div>
        </motion.div>
      </motion.div>

      {/* 3D Carousel */}
      <motion.div className="com-carousel-col" initial={{opacity:0,scale:0.8}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} transition={{duration:0.8}}>
        <div className="com-carousel-3d">
          <div className="com-carousel-stage" style={{transformStyle:'preserve-3d'}}>
            {communitySlides.map((slide, index) => {
              const style = getCommunityImageStyle(index);
              return (
                <div key={index} className="com-carousel-item" style={{...style,transformStyle:'preserve-3d',backfaceVisibility:'hidden'}}>
                  <div className="com-carousel-card">
                    <img src={slide.src} alt={slide.alt} style={{width:'100%',height:'100%',objectFit:'cover',display:'block'}} />
                    <div className="com-carousel-overlay"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </div>

    {/* Video section */}
    <motion.div className="com-video-section" initial={{opacity:0}} whileInView={{opacity:1}} viewport={{once:true}} transition={{duration:0.6}}>
      <div className="com-video-bg">
        <img src={videoBg.src} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}} />
      </div>

      <div className="com-video-inner">
        <div className="com-video-scroll"
          onMouseMove={(e) => {
            const c = e.currentTarget;
            const rect = c.getBoundingClientRect();
            const pct = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
            c.scrollLeft = pct * (c.scrollWidth - rect.width);
          }}
        >
          <div className="com-video-row">
            {[{id:1,offset:40},{id:2,offset:20},{id:3,offset:0},{id:4,offset:20},{id:5,offset:40}].map((item, index) => (
              <div key={index} className="com-video-card-wrap" style={{marginBottom:`${item.offset}px`}}>
                <div className="com-video-card">
                  <div className="com-video-card-bg"></div>
                  <div className="com-video-card-content">
                    <div className="com-video-play-btn">
                      <svg viewBox="0 0 24 24" fill="#7FB069"><path d="M8 5v14l11-7z"/></svg>
                    </div>
                    <p className="com-video-story-label">Story {item.id}</p>
                    <p className="com-video-coming-soon">Video Coming Soon</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div className="com-bottom-cta" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6,delay:0.3}}>
          <p className="com-bottom-cta-text">Discover our community stories</p>
          <div className="com-bottom-cta-row">
            <a href="https://www.instagram.com/Kalpavristi_Coco_FAB" target="_blank" rel="noopener noreferrer" className="com-insta-link">
              <svg fill="currentColor" viewBox="0 0 24 24" width="28" height="28"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              <span>@Kalpavristi_Coco_FAB</span>
            </a>
            <span className="com-separator">•</span>
            <button className="com-join-btn">
              <span>Join Our Family</span>
              <svg width="20" height="20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </div>
        </motion.div>
      </div>
    </motion.div>

  </div>
</section>




    </>
  )
}
